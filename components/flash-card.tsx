"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { SendHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

export interface FlashCardProps {
  word: string;
  type: string;
  explanation: string;
  example: string;
  status?: "reviewing" | "learning" | "mastered";
}

export default function FlashCard(params: FlashCardProps) {
  const { word, type, explanation, example, status } = params;

  const router = useRouter();

  const [prompt, setPrompt] = useState("");
  const [showDefinition, setShowDefinition] = useState(false);

  const toggleDefinition = () => {
    setShowDefinition(!showDefinition);
  };

  const nextWord = () => {
    setPrompt("");
    toggleDefinition();
    router.refresh();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("/api/chat", {
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

    const data = await response.json();
    console.log(data);

    setPrompt("");
    toggleDefinition();
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="bg-[#f7f7f7] w-full max-w-sm space-y-2 p-6 rounded-lg shadow-md flex items-center justify-center relative">
        {!showDefinition ? (
          <>
            <Badge
              className="absolute top-2 right-2 bg-[#dddddd] text-gray-500 rounded-md uppercase"
              variant="outline"
            >
              {status ?? "Learning"}
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
                    <Button
                      className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full text-slate-500 hover:text-black transition-all duration-300 ease-in-out"
                      size="icon"
                      variant="link"
                      disabled={!prompt}
                    >
                      <SendHorizontal className="h-5 w-5" />
                      <span className="sr-only">Submit meaning</span>
                    </Button>
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
            <p className="text-lg text-gray-600 mb-4">{explanation}</p>
            <p className="text-lg text-gray-600 mb-4">{example}</p>
            <Button
              className="bg-gradient-to-r from-slate-600 to-black text-white px-4 py-2 rounded-md hover:from-slate-700 hover:to-black animate-gradient-x transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:shadow-xl"
              onClick={nextWord}
            >
              Next Word
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
