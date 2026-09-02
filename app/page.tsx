"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import messagesUk from "./en.json";

const t = messagesUk.Home;

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <div className="space-y-10 md:space-y-16 pb-16">
      
      <section id="Home" className="w-full relative bg-background">
        
        {/*Кнопки*/}
        <div className="absolute top-6 right-6 lg:top-8 lg:right-12 z-10 flex gap-5 bg-background/60 backdrop-blur-md px-4 py-2 rounded-full border border-border shadow-sm">
          <a
            href="https://www.linkedin.com/in/valerii-artiukh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-primary transition-colors duration-300 flex items-center justify-center"
          >
            <LinkedInIcon/>
          </a>
          <a
            href="https://github.com/Valerchykld3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-primary transition-colors duration-300 flex items-center justify-center"
          >
            <GitHubIcon/>
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Перемкнути темний режим"
            className="hover:text-primary transition-colors duration-300 flex items-center justify-center"
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button>
        </div>

        {/*Банер*/}
        <div className="relative w-full h-64 sm:h-80 md:h-100 bg-zinc-200 dark:bg-zinc-800">
          <Image
            src="/backlogo.png"
            alt="Background Banner"
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        {/*Блок інформації*/}
        <div className="relative px-6 sm:px-12 md:px-24 lg:px-40 pb-16 w-full max-w-[1600px] mx-auto">
          <div className="absolute -top-20 sm:-top-24 left-6 sm:left-12 md:left-24 lg:left-40 w-36 h-36 sm:w-48 sm:h-48 rounded-full border-[6px] border-foreground bg-zinc-200 dark:bg-zinc-800 overflow-hidden shadow-sm">
            <Image
              src="/logo.jpg"
              alt="Profile Avatar"
              fill 
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
          
          <div className="pt-24 sm:pt-32 flex flex-col gap-3">
            <h1 className="text-5xl sm:text-7xl font-bold">{t.Name}</h1>
            <h2 className="text-xl sm:text-4xl text-primary font-medium leading-relaxed max-w-3xl">{t.Description}</h2>
            
            <div className="flex flex-wrap items-center gap-3 mt-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
              <span>{t.Region}</span>
              <span>•</span>
              <p className="text-primary hover:underline font-semibold transition-all">{t.Contacts}</p>
            </div>
          </div>

        </div>
      </section>


      
      <section id="Portfolio" className="px-6 sm:px-12 md:px-24 lg:px-40 py-16 w-full max-w-[1600px] mx-auto">
        
        {/* Заголовок секції */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground relative inline-block">
            {t.title}
            <span className="absolute -bottom-2 left-0 w-35 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>

        {/*Сітка*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/*LockedNet*/}
          <Link 
            href="https://lockednetweb.vercel.app/" 
            className="group flex items-center justify-between p-6 bg-[#0D1117] border border-border rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
            <div className="flex flex-col gap-1.5 pr-4">
              <h3 className="text-xl font-bold group-hover:text-primary text-[#E6EDF3] duration-300">
                {t.t1}
              </h3>
              <p className="text-sm text-[#E6EDF3] line-clamp-2">
                {t.n1}
              </p>
            </div>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-border">
               <Image src="/ln.ico" alt="LockedNet Logo" width={56} height={56} className="object-cover" />
            </div>
          </Link>

          {/* BaryCore*/}
          <Link 
            href="/projects/barycore" 
            className="group flex items-center justify-between p-6 bg-[#0D1117] border border-border rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
            <div className="flex flex-col gap-1.5 pr-4">
              <h3 className="text-xl font-bold group-hover:text-primary text-[#E6EDF3] duration-300">
                {t.t2}
              </h3>
              <p className="text-sm text-[#E6EDF3] line-clamp-2">
                {t.n2}
              </p>
            </div>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-border">
               <Image src="/bc.png" alt="BaryCore Logo" width={56} height={56} className="object-cover" />
            </div>
          </Link>

          <div
            className="group flex items-center justify-between p-6 bg-[#0D1117] border border-border rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
            <div className="flex flex-col gap-1.5 pr-4">
              <h3 className="text-xl font-bold group-hover:text-primary text-[#E6EDF3] duration-300">
                {t.t3}
              </h3>        
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}