import React from "react";
import Link from "next/link";
import Image from "next/image";
import messagesUk from '@/lang/BaryCore/en.json';

const t = messagesUk.p0;

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
                </ul>
            </section>
        </main>
    );
}