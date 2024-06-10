"use client";
import { clsx } from "clsx";
import Link from "next/link";
import { Progress } from "./ui/progress";
import { useEffect, useState } from "react";

export interface DeckCardProps {
  title: string;
  src: string;
  type: string;
  progress?: number;
}

export default function DeckCard(props: Readonly<DeckCardProps>) {
  const { title, src, type } = props;
  const [wordProgress, setWordProgress] = useState<{
    [word: string]: "learning" | "reviewing" | "mastered";
  }>({});
  const storedProgress = localStorage.getItem(`wordProgress-${src}`);
  
  useEffect(() => {
    if (storedProgress && storedProgress !== "{}") {
      setWordProgress(JSON.parse(storedProgress));
    }
  }, [storedProgress]);


  const getMasteredPercentage = () => {
    const masteredWords =  Object.values(wordProgress).filter(
      (status) => status === "mastered"
    ).length;
    const totalWords = Object.keys(wordProgress).length;
    const masteredPercentage = Math.ceil((masteredWords / totalWords) * 100);
    return masteredPercentage;
  }

  const masteredPercentage = getMasteredPercentage();

  return (
    <Link href={`/decks/${src}`}>
      <div
        className={clsx(
          {
            "bg-gradient-to-r rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105":
              true,
          },
          {
            "from-[#22C55E] to-[#16A34A]": type === "basic",
          },
          {
            "from-[#0EA5E9] to-[#0284C7]": type === "common",
          },
          {
            "from-[#F43F5E] to-[#E11D48]": type === "advanced",
          }
        )}
      >
        <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t dark:from-gray-900/80 dark:to-transparent from-gray-700/80 to-transparent" />
          <div className="absolute bottom-4 left-4 w-5/6 text-white">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <Progress
            className="w-full h-2 bg-gray-300 dark:bg-gray-800"
            value={masteredPercentage}
            indicatorColor="bg-primary"
          />
          </div>
        </div>
      </div>
    </Link>
  );
}
