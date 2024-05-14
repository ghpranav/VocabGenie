import { promises as fs } from "fs";
import Link from "next/link";

import FlashCard from "@/components/flash-card";
import ProgressStatus from "@/components/progress-status";

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

export default async function DecksPage({ params }: Readonly<DecksPageProps>) {
  const { id } = params;

  const file = await fs.readFile(process.cwd() + `/lib/${id}.json`, "utf8");
  const wordData: FlashCardData = JSON.parse(file);

  if (!wordData || Object.keys(wordData).length === 0) {
    throw new Error("No data found");
  }

  const words = Object.keys(wordData);
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];

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
          />
          {/* <ProgressStatus /> */}
        </div>
      </div>
    </div>
  );
}
