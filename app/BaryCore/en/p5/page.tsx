import React from "react";
import Link from "next/link";
import Image from "next/image";
import messagesUk from '@/lang/BaryCore/en.json';

const t = messagesUk.bcp5;

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans px-6 sm:px-12 pt-32 pb-24 max-w-4xl mx-auto flex flex-col gap-12">
            {/* Блок Main */}
            <section id="Main" className="flex flex-col gap-8">
                {/* Посилання на наступну та попередню сторінку */}
                <div className="flex justify-between items-center w-full mb-2">
                    <Link 
                        href="/BaryCore/en/p4" 
                        className="text-sm font-semibold text-primary hover:underline w-fit transition-all">
                        {t.pP} &larr;
                    </Link>
                    <Link 
                        href="/BaryCore/en/p6" 
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

            <hr className="border-border" />

            <section id="Ch" className="flex flex-col gap-6 mt-4">
                <div className="w-full aspect-video">
                    <iframe
                        className="w-full h-full border-0"
                        src="https://www.youtube.com/embed/lbZzsO3uM8U"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>

            {/* Блок nextPage */}
            <section id="nP" className="mt-12 pt-8 border-t border-border flex justify-end">
                <Link 
                    href="/BaryCore/en/p6" 
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
    )
}