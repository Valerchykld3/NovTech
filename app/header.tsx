"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from 'next-themes';
import { Moon, Sun, ArrowLeft, Globe } from 'lucide-react';

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    const pathname = usePathname() || ""; 

    useEffect(() => setMounted(true), []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    if (!mounted) return null;

    const isUk = pathname.includes('/uk');
    let newPath = pathname;
    if (isUk) {
        newPath = pathname.replace('/uk', '/en');
    } else if (pathname.includes('/en')) {
        newPath = pathname.replace('/en', '/uk');
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md text-foreground border-b border-border transition-colors duration-300">
            <nav className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 sm:px-12 md:px-24 lg:px-40 py-4">
                
                {/* Ліва частина: Кнопка Назад та Назва */}
                <div className="flex items-center gap-4 sm:gap-6">
                    <Link
                        href="/"
                        aria-label="Повернутися на головну"
                        className="hover:text-primary transition-colors duration-300 flex items-center justify-center">
                        <ArrowLeft size={24} />
                    </Link>
                    <span className="font-bold text-lg tracking-wide hidden sm:block">BaryCore Documentation</span>
                    <span className="font-bold text-lg tracking-wide sm:hidden">BaryCore</span>
                </div>

                {/* Права частина: Посилання та Налаштування */}
                <div className="flex items-center gap-4 sm:gap-6">
                    <a
                        href="https://www.linkedin.com/in/valerii-artiukh"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="hover:text-primary transition-colors duration-300 flex items-center justify-center">
                        <LinkedInIcon/>
                    </a>
                    <a
                        href="https://github.com/Valerchykld3"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="hover:text-primary transition-colors duration-300 flex items-center justify-center">
                        <GitHubIcon/>
                    </a>

                    <div className="w-px h-5 bg-border mx-1 hidden sm:block"></div>

                    <button
                        onClick={toggleTheme}
                        aria-label="Перемкнути тему"
                        className="hover:text-primary transition-colors duration-300 flex items-center justify-center"
                    >
                        {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
                    </button>
                    
                    <Link
                        href={newPath}
                        aria-label="Перемкнути мову"
                        className="flex items-center gap-1.5 hover:text-primary transition-colors duration-300 font-semibold text-sm"
                    >
                        <Globe size={20} className="hidden sm:block" />
                        <span>{isUk ? "EN" : "UK"}</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}