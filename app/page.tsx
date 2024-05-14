import DeckCard from "@/components/deck-card";
import { decks } from "@/lib/decks";

export default function Home() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16">
      <div className="space-y-2 mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-700">
          Vocab Genie
        </h1>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
          Unleash your inner wordsmith! Flashcards meet AI for a smarter
          vocabulary adventure.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {decks.map((deck) => (
          <DeckCard
            key={deck.title}
            src={deck.src}
            title={deck.title}
            type={deck.type}
          />
        ))}
      </div>
    </main>
  );
}
