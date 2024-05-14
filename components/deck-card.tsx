import { clsx } from "clsx";
import Link from "next/link";

export interface DeckCardProps {
  title: string;
  src: string;
  type: string;
  progress?: number;
}

export default function DeckCard(props: Readonly<DeckCardProps>) {
  const { title, src, type } = props;

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
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4 w-5/6 text-white">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
