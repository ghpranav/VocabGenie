"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import FlashCard from "@/components/flash-card";
import ProgressStatus from "@/components/progress-status";
import LoadingDecksPage from "./loading";

export interface DecksPageProps {
  params: {
    id: string;
  };
}

interface WordData {
  type: string;
  explanation: string;
  example: string;
}

interface FlashCardData {
  [word: string]: WordData; // Use an index signature for dynamic word properties
}

export default function DecksPage({ params }: Readonly<DecksPageProps>) {
  const { id } = params;

  const [wordData, setWordData] = useState<FlashCardData | null>(null);
  const [wordProgress, setWordProgress] = useState<{
    [word: string]: "learning" | "reviewing" | "mastered";
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const file = await fetch(`/deck/${id}.json`);
        const data = await file.json();
        if (!data || Object.keys(data).length === 0) {
          throw new Error("No data found");
        }
        setWordData(data);
        initializeProgress(data);
      } catch (error) {
        throw new Error("No data found");
      }
    };

    const initializeProgress = (wordData: FlashCardData) => {
      const storedProgress = localStorage.getItem(`wordProgress-${id}`);
      if (storedProgress && storedProgress !== "{}") {
        setWordProgress(JSON.parse(storedProgress));
      } else {
        const newProgress = Object.keys(wordData || {}).reduce<{
          [word: string]: "learning" | "reviewing" | "mastered";
        }>((acc, word) => {
          acc[word] = "learning";
          return acc;
        }, {});
        localStorage.setItem(`wordProgress-${id}`, JSON.stringify(newProgress));
        setWordProgress(newProgress);
      }
    };

    if (wordData === null) {
      fetchData();
    } else {
      initializeProgress(wordData);
    }
  }, [id, wordData]);

  const getRandomWord = () => {
    // Categorize words based on progress
    const learningWords = Object.keys(wordProgress).filter(
      (word) => wordProgress[word] === "learning"
    );
    const reviewingWords = Object.keys(wordProgress).filter(
      (word) => wordProgress[word] === "reviewing"
    );
    const masteredWords = Object.keys(wordProgress).filter(
      (word) => wordProgress[word] === "mastered"
    );

    // Weight random selection based on progress category
    const weights = { learning: 5, reviewing: 3, mastered: 1 };

    let randomPool = [];
    for (const word of learningWords) {
      randomPool.push(...Array(weights.learning).fill(word));
    }
    for (const word of reviewingWords) {
      randomPool.push(...Array(weights.reviewing).fill(word));
    }
    for (const word of masteredWords) {
      randomPool.push(...Array(weights.mastered).fill(word));
    }

    const randomIndex = Math.floor(Math.random() * randomPool.length);
    return randomPool[randomIndex];
  };

  const updateProgress = (word: string, userKnows: boolean) => {
    const currentStatus = wordProgress[word];
    if (userKnows) {
      if (currentStatus === "learning") {
        wordProgress[word] = "reviewing";
      } else if (currentStatus === "reviewing") {
        wordProgress[word] = "mastered";
      }
    } else {
      wordProgress[word] = "learning";
    }
    localStorage.setItem(`wordProgress-${id}`, JSON.stringify(wordProgress));
  };

  if (!wordData) {
    return <LoadingDecksPage />;
  }

  const randomWord = getRandomWord();

  return (
    <div className="min-h-screen flex justify-center items-center p-2">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <div className="flex flex-col">
          <div className="mb-6">
            <Link className="text-black font-bold" href="/">
              ← Home
            </Link>
            <p className="text-right text-xs text-gray-400 italic">
              Words you don&apos;t know will reappear later
            </p>
          </div>
          <FlashCard
            word={randomWord}
            type={wordData[randomWord].type}
            explanation={wordData[randomWord].explanation}
            example={wordData[randomWord].example}
            status={wordProgress[randomWord]}
            updateProgress={updateProgress}
          />
          <ProgressStatus
            totalWords={Object.keys(wordProgress).length}
            masteredWords={
              Object.values(wordProgress).filter(
                (status) => status === "mastered"
              ).length
            }
            reviewingWords={
              Object.values(wordProgress).filter(
                (status) => status === "reviewing"
              ).length
            }
            learningWords={
              Object.values(wordProgress).filter(
                (status) => status === "learning"
              ).length
            }
          />
        </div>
      </div>
    </div>
  );
}
