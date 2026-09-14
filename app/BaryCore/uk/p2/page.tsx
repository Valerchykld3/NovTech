"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import messagesUk from '@/lang/BaryCore/uk.json';

const t = messagesUk.bcp2;

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-4 items-start text-lg text-foreground/90 leading-relaxed">
    <span className="text-primary mt-1.5 shrink-0">
      <div className="w-2 h-2 rounded-full bg-primary" />
    </span>
    <span>{children}</span>
  </li>
);

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans px-6 sm:px-12 pt-32 pb-24 max-w-4xl mx-auto flex flex-col gap-12">
            
            {/* Блок Main */}
            <section id="Main" className="flex flex-col gap-6">
                {/* Посилання на наступну та попередню сторінку */}
                <div className="flex justify-between items-center w-full mb-2">
                    <Link 
                        href="/BaryCore/uk/p1" 
                        className="text-sm font-semibold text-primary hover:underline w-fit transition-all">
                        {t.pP} &larr;
                    </Link>
                    <Link 
                        href="/BaryCore/uk/p3" 
                        className="text-sm font-semibold text-primary hover:underline w-fit transition-all">
                        {t.nP} &rarr;
                    </Link>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary">
                    {t.title}
                </h1>

                <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold text-primary">{t.contents}</h2>
          <ul className="flex flex-col gap-3 pl-2 sm:pl-6">
            <li>
              <Link href="#Ch1" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a1}</Link>
            </li>
            <li>
              <Link href="#text2" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a2}</Link>
            </li>
            <li>
              <Link href="#Ch2" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a3}</Link>
            </li>
            <li>
              <Link href="#Ch3" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a4}</Link>
            </li>
            <li>
              <Link href="#Ch4" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a5}</Link>
            </li>
          </ul>
                </div>
                
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">
                    {t.w}
                </p>
            </section>

            <hr className="border-border" />

            {/* Блок 1 */}
            <section id="Ch1" className="flex flex-col gap-10">
                <p className="text-lg text-foreground/90 leading-relaxed">
                    {t.t1}
                </p>
                
                <div className="flex flex-col gap-8">
                    {/* Виконавець */}
                    <div className="border-l-2 border-primary pl-4 sm:pl-6 flex flex-col gap-4">
                        <p id="text2" className="text-lg sm:text-xl font-semibold text-foreground leading-relaxed">{t.t2}</p>
                        <ul className="flex flex-col gap-3">
                            <ListItem>{t.q20}</ListItem>
                            <ListItem>{t.q21}</ListItem>
                        </ul>
                    </div>

                    {/* Інтегратор */}
                    <div className="border-l-2 border-primary pl-4 sm:pl-6 flex flex-col gap-4">
                        <p className="text-lg sm:text-xl font-semibold text-foreground leading-relaxed">{t.t3}</p>
                        <ul className="flex flex-col gap-3">
                            <ListItem>{t.q30}</ListItem>
                            <ListItem>{t.q31}</ListItem>
                        </ul>
                    </div>

                    {/* Аналітик */}
                    <div className="border-l-2 border-primary pl-4 sm:pl-6 flex flex-col gap-4">
                        <p className="text-lg sm:text-xl font-semibold text-foreground leading-relaxed">{t.t4}</p>
                        <ul className="flex flex-col gap-3">
                            <ListItem>{t.q40}</ListItem>
                            <ListItem>{t.q41}</ListItem>
                        </ul>
                    </div>

                    {/* Комунікатор */}
                    <div className="border-l-2 border-primary pl-4 sm:pl-6 flex flex-col gap-4">
                        <p className="text-lg sm:text-xl font-semibold text-foreground leading-relaxed">{t.t5}</p>
                        <ul className="flex flex-col gap-3">
                            <ListItem>{t.q50}</ListItem>
                            <ListItem>{t.q51}</ListItem>
                        </ul>
                    </div>
                </div>
            </section>

            { /* Блок 2 */}
            <section id="Ch2" className="flex flex-col gap-6">
                <div className="bg-foreground/5 p-6 rounded-2xl border border-border">
                    <p className="text-lg text-foreground/90 leading-relaxed">
                        {t.t6}
                    </p>
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed">
                    {t.t7}
                </p>
            </section>

            { /* Блок 3 */}
            <section id="Ch3" className="flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-4">{t.n1}</h2>
                <p className="text-lg text-foreground/90 leading-relaxed">{t.t8}</p>
            </section>

            { /* Блок 4 */}
            <section id="Ch4" className="flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-4">{t.n2}</h2>
                <p className="text-lg text-foreground/90 leading-relaxed">{t.t9}</p>
            </section>

            { /* Блок 5 */}
            <section id="Ch5" className="flex flex-col gap-10">
                {/* Рівень 1 */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary">{t.n3}</h3>
                    <p className="text-lg text-foreground/90 leading-relaxed">{t.t10}</p>
                    <ul className="flex flex-col gap-3 pl-2 sm:pl-4">
                        <ListItem>{t.q100}</ListItem>
                        <ListItem>{t.q101}</ListItem>
                        <ListItem>{t.q102}</ListItem>
                        <ListItem>{t.q103}</ListItem>
                    </ul>
                </div>

                {/* Рівень 2 */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary">{t.n4}</h3>
                    <p className="text-lg text-foreground/90 leading-relaxed">{t.t11}</p>
                    <ul className="flex flex-col gap-3 pl-2 sm:pl-4">
                        <ListItem>{t.q110}</ListItem>
                        <ListItem>{t.q111}</ListItem>
                    </ul>
                </div>

                {/* Рівень 3 */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary">{t.n5}</h3>
                    <p className="text-lg text-foreground/90 leading-relaxed">{t.t12}</p>
                </div>

                <div className="w-full flex justify-center py-6">
                    <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden border border-border shadow-lg bg-foreground/5">
                        <Image
                            src="/bc_p2/config.png"
                            alt="BaryCore config structure"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Блок nextPage */}
            <section id="nP" className="mt-8 pt-8 border-t border-border flex justify-end">
                <p className="text-lg sm:text-xl text-foreground">{t.t13}</p>

              <Link 
                href="/BaryCore/uk/p3" 
                className="group flex flex-col items-end gap-1 p-6 rounded-2xl border border-border bg-zinc-50 dark:bg-[#111612] hover:border-primary/50 hover:shadow-md transition-all duration-300 max-w-sm w-full">
                <span className="text-sm font-medium text-[#E6EDF3]">Go next</span>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#F85149] group-hover:underline">
                    {t.nP}
                  </h2>
                  <span className="text-primary transform group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </Link>
            </section>
        </main>
    );
}