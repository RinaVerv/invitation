import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@radix-ui/react-navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, X } from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
}

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const navigation: NavigationItem[] = [
  { name: 'Our Story', href: '#story' },
  { name: 'Event Details', href: '#events' },
  { name: 'RSVP', href: '#rsvp' },
  { name: 'Location', href: '#location' },
];

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex-shrink-0">
            <span className="font-serif text-2xl text-primary-800">S & V</span>
          </div>

          <div className="hidden sm:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      href={item.href}
                      className="text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-primary-500 border-b-2 border-transparent px-1 pt-1"
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="sm:hidden">
              <button className="p-2 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <span className="sr-only">Open menu</span>
                {isOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:hidden">
              <nav className="flex flex-col space-y-4 mt-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 px-3 py-2 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}