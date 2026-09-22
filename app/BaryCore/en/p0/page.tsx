import React from "react";
import Link from "next/link";
import Image from "next/image";
import messagesUk from '@/lang/BaryCore/en.json';

const t = messagesUk.bcp0;

export default function Home() {
    return (
      <main className="min-h-screen bg-background text-foreground font-sans px-6 sm:px-12 pt-32 pb-24 max-w-4xl mx-auto flex flex-col gap-12">
            <section id="Main" className="flex flex-col gap-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary">{t.title}</h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{t.stitle}</h2>
            </section>

            <hr className="border-border" />
            
            <section id="Contents" className="flex flex-col gap-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{t.n}</h2>
                <ul className="flex flex-col gap-3 pl-2 sm:pl-6">
                    <li>
                        <Link href="/BaryCore/en/p1" className="text-sm font-semibold text-foreground hover:underline w-fit transition-all">&rarr; {t.q1}</Link>
                    </li>
                    <li>
                        <Link href="/BaryCore/en/p2" className="text-sm font-semibold text-foreground hover:underline w-fit transition-all">&rarr; {t.q2}</Link>
                    </li>
                    <li>
                        <Link href="/BaryCore/en/p3" className="text-sm font-semibold text-foreground hover:underline w-fit transition-all">&rarr; {t.q3}</Link>
                    </li>
                    <li>
                        <Link href="/BaryCore/en/p4" className="text-sm font-semibold text-foreground hover:underline w-fit transition-all">&rarr; {t.q4}</Link>
                    </li>
                </ul>
            </section>

            <section id="GitHub" className="flex flex-col gap-6">
                <Link 
                        href="https://github.com/Valerchykld3/BaryCore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 hover:shadow-lg transition-all duration-300 w-fit"
                    >
                        {t.link}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                </Link>
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.w}</p>
            </section>
        </main>
    );
}