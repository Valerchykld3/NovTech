import React from "react";
import Link from "next/link";
import Image from "next/image";
import messagesUk from '@/lang/VoltPulse/uk.json';

const t = messagesUk.vpp3;

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans px-6 sm:px-12 pt-32 pb-24 max-w-4xl mx-auto flex flex-col gap-12">

            {/* Блок Main */}
            <section id="Main" className="flex flex-col gap-6">
                {/* Посилання на наступну та попередню сторінку */}
                <div className="flex justify-between items-center w-full mb-2">
                    <Link
                        href="/VoltPulse/uk/p2"
                        className="text-sm font-semibold text-primary hover:underline w-fit transition-all">
                        {t.pP} &larr;
                    </Link>
                    <Link
                        href="/VoltPulse/uk/p4"
                        className="text-sm font-semibold text-primary hover:underline w-fit transition-all">
                        {t.nP} &rarr;
                    </Link>
                </div>
            
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary leading-tight">
                        {t.title}
                    </h1>
                </div>
            </section>
        </main>
    );
}