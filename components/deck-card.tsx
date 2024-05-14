import Image from "next/image";
import Link from "next/link";

export interface DeckCardProps {
  title: string;
  alt: string;
  src: string;
  progress?: number;
  onClick?: () => void;
};

export default function DeckCard(props: DeckCardProps) {
  const { title, alt, src } = props;

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 transform hover:scale-105">
      <Link href={`/decks/${src}`}>
        <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
          <Image
            alt={alt}
            className="w-full h-full object-cover object-center"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full w-2/3" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
