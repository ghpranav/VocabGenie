import { MenuIcon } from "lucide-react";
import Link from "next/link";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="w-full">
      <Drawer>
        <div className="container mx-auto px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 flex items-center justify-between">
          <Link className="text-lg text-gray-50 font-bold" href="/">
            VocabGenie
          </Link>
          <div className="hidden md:flex items-center space-x-4 md:space-x-6">
            <Link
              className="text-gray-400 disabled cursor-not-allowed"
              href="#"
              aria-disabled
              tabIndex={-1}
            >
              Settings
            </Link>
            <Link
              className="text-gray-400 hover:text-gray-50 transition-colors"
              href="https://github.com/ghpranav/VocabGenie"
              target="_blank"
            >
              Github
            </Link>
          </div>
          <DrawerTrigger asChild>
            <Button className="md:hidden" size="icon" variant="ghost">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DrawerTrigger>
        </div>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>
          <div className="space-y-4 p-4">
            <Link
              className="block text-gray-400 disabled cursor-not-allowed"
              href="#"
              aria-disabled
              tabIndex={-1}
            >
              Settings
            </Link>
            <Link
              className="block text-gray-400 hover:text-gray-50 transition-colors"
              href="https://github.com/ghpranav/VocabGenie"
              target="_blank"
            >
              Github
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
}
