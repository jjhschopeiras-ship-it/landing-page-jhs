'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderData {
  logo: string;
  navLinks: {
    text: string;
    href: string;
  }[];
  ctaButton: { text: string; href: string };
}

export function Header({ data }: { data: HeaderData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="text-xl font-bold text-primary">
           <Image src={data.logo}
                      alt="Logo"
                      width={50}
                      height={50}
                    />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {data.navLinks.map((link) => (
            <a
              key={link.text}
              href={link.href}
              className="text-sm font-medium:underline underline-offset-4"
            >
              {link.text}
            </a>
          ))}
          <Button asChild>
            <a href={data.ctaButton.href}>{data.ctaButton.text}</a>
          </Button>
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col items-center gap-4 p-4">
            {data.navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <Button asChild className="w-full">
              <a href={data.ctaButton.href}>{data.ctaButton.text}</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
