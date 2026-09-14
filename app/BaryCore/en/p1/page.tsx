import React from "react";
import Link from "next/link";
import Image from "next/image";
import messagesUk from '@/lang/BaryCore/en.json';

const t = messagesUk.p1;

export default function Home() {
  return (
      <main className="min-h-screen bg-background text-foreground font-sans px-6 sm:px-12 pt-32 pb-24 max-w-4xl mx-auto flex flex-col gap-12">

        {/* Блок Main */}
        <section id="Main" className="flex flex-col gap-6">
            {/* Посилання на наступну та попередню сторінку */}
                <div className="flex justify-between items-center w-full mb-2">
                    <Link 
                        href="/BaryCore/en/p0" 
                        className="text-sm font-semibold text-primary hover:underline w-fit transition-all">
                        {t.pP} &larr;
                    </Link>
                    <Link 
                        href="/BaryCore/en/p2" 
                        className="text-sm font-semibold text-primary hover:underline w-fit transition-all">
                        {t.nP} &rarr;
                    </Link>
                </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary">
              {t.title}
            </h1>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed font-medium">
              {t.t1}
            </p>
        </section>

        <hr className="border-border" />

        {/* Блок 1 */}
        <section id="Ch1" className="flex flex-col gap-8">
          <p className="text-lg text-foreground leading-relaxed">
            {t.t2}
          </p>
          
          <div className="w-full flex justify-center py-4">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-border shadow-lg bg-zinc-100 dark:bg-zinc-900">
              <Image
                src="/bc.png"
                alt="BaryCore Logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Блок 2 */}
        <section id="Ch2" className="flex flex-col gap-6">
          <p className="text-lg text-foreground leading-relaxed">
            {t.t3}
          </p>
          
          <ul className="flex flex-col gap-3 pl-2 sm:pl-6">
            {[t.q30, t.q31, t.q32].map((item, index) => (
              <li key={index} className="flex gap-4 items-start text-lg text-foreground leading-relaxed">
                <span className="text-primary mt-1.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <p className="text-lg text-foreground leading-relaxed">
            {t.t4}
          </p>
        </section>

        {/* Блок 3 */}
        <section id="Ch3" className="flex flex-col gap-6">
          <p className="text-lg text-foreground leading-relaxed">
            {t.t5}
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            {t.t6}
          </p>
          
          <ul className="flex flex-col gap-3 pl-2 sm:pl-6">
            {[t.q60, t.q61].map((item, index) => (
              <li key={index} className="flex gap-4 items-start text-lg text-foreground leading-relaxed">
                <span className="text-primary mt-1.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Блок 4 */}
        <section id="Ch4" className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-4">
            {t.n}
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            {t.t7}
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            {t.t8}
          </p>
        </section>

        {/* Блок nextPage */}
        <section id="nP" className="mt-8 pt-8 border-t border-border flex justify-end">
          <Link 
            href="/BaryCore/en/p2" 
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