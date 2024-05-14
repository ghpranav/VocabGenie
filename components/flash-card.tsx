"use client";

import { clsx } from "clsx";
import { LoaderCircle, SendHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export interface FlashCardProps {
  word: string;
  type: string;
  explanation: string;
  example: string;
  status?: "reviewing" | "learning" | "mastered";
  updateProgress: (word: string, userKnows: boolean) => void;
}

export default function FlashCard(params: Readonly<FlashCardProps>) {
  const { word, type, explanation, example, status, updateProgress } = params;

  const router = useRouter();

  const [prompt, setPrompt] = useState("");
  const [showDefinition, setShowDefinition] = useState(false);
  const [score, setScore] = useState<any>(null);
  const [response, setResponse] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const toggleDefinition = () => {
    setShowDefinition(!showDefinition);
  };

  const nextWord = (userKnows: boolean) => {
    setPrompt("");
    setScore(null);
    setResponse(null);
    updateProgress(word, userKnows);
    toggleDefinition();
    router.refresh();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: prompt,
          word: word,
          explanation: explanation,
        }),
      });

      const result = await res.json();
      setScore(result?.data?.score);
      setResponse(result?.data?.explanation);
    } catch (error) {
      console.error(error);
      setScore("no");
      setResponse(
        "Sorry, I'm currently unavailable due to high traffic. Please try again later."
      );
    } finally {
      setPrompt("");
      setIsLoading(false);
      toggleDefinition();
    }
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="bg-[#f7f7f7] w-full max-w-sm space-y-2 p-6 rounded-lg shadow-md flex items-center justify-center relative">
        {!showDefinition ? (
          <>
            <Badge
              className={clsx(
                {
                  "absolute top-2 right-2 text-gray-600 rounded-md uppercase":
                    true,
                },
                {
                  "bg-[#dddddd]": status === "learning",
                },
                {
                  "bg-[#f6e05e]": status === "reviewing",
                },
                {
                  "bg-[#22c55e]": status === "mastered",
                }
              )}
              variant="outline"
            >
              {status ?? "learning"}
            </Badge>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">{word}</h2>
              <div className="flex items-center w-full mb-4">
                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <Input
                      value={prompt}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent hover:ring-2 hover:ring-black transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
                      placeholder="Enter the meaning"
                      type="text"
                      onChange={(e) => setPrompt(e.target.value)}
                    />
                    {isLoading ? (
                      <Button
                        className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full text-slate-500 animate-spin"
                        size="icon"
                        variant="link"
                        disabled
                      >
                        <LoaderCircle className="h-5 w-5" />
                        <span className="sr-only">Loading</span>
                      </Button>
                    ) : (
                      <Button
                        className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full text-slate-500 hover:text-black transition-all duration-300 ease-in-out"
                        size="icon"
                        variant="link"
                        disabled={!prompt}
                      >
                        <SendHorizontal className="h-5 w-5" />
                        <span className="sr-only">Submit meaning</span>
                      </Button>
                    )}
                  </div>
                </form>
                <Button
                  className="bg-gradient-to-r from-slate-600 to-black text-white px-4 py-2 rounded-md hover:from-slate-700 hover:to-black animate-gradient-x transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:shadow-xl ml-4"
                  onClick={toggleDefinition}
                >
                  See Meaning
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">{word}</h2>
            <p className="text-base text-gray-600 mb-4">
              <strong>{type}: </strong>
              {explanation}
            </p>
            <p className="text-sm italic text-gray-600 mb-4">{example}</p>
            {response && (
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 text-gray-600 text-left">
                <span
                  className={clsx(
                    {
                      "flex h-2 w-2 translate-y-1 rounded-full": true,
                    },
                    {
                      "bg-red-500": score === "no",
                    },
                    {
                      "bg-green-500": score === "yes",
                    },
                    {
                      "bg-sky-500": score !== "yes" && score !== "no",
                    }
                  )}
                />
                <div className="space-y-1">
                  <p className="text-sm font-semibold leading-none">
                    VocabGenie AI
                  </p>
                  <p className="text-sm font-medium">{response}</p>
                </div>
              </div>
            )}
            <div className="flex justify-center space-x-4 mt-4">
              <Button
                className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white px-4 py-2 rounded-md animate-gradient-x transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:shadow-xl"
                onClick={() => nextWord(true)}
              >
                I know the word
              </Button>
              <Button
                className="bg-gradient-to-r from-[#F43F5E] to-[#E11D48] text-white px-4 py-2 rounded-md animate-gradient-x transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:shadow-xl"
                onClick={() => nextWord(false)}
              >
                I don&apos;t know the word
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
