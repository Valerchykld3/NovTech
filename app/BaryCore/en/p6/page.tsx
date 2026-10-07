import React from "react";
import Link from "next/link";
import Image from "next/image";
import messagesUk from '@/lang/BaryCore/en.json';

const t = messagesUk.bcp6;

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans px-6 sm:px-12 pt-32 pb-24 max-w-4xl mx-auto flex flex-col gap-12">
            {/* Блок Main */}
            <section id="Main" className="flex flex-col gap-8">
                {/* Посилання на наступну та попередню сторінку */}
                <div className="flex justify-between items-center w-full mb-2">
                    <Link 
                        href="/BaryCore/en/p5" 
                        className="text-sm font-semibold text-primary hover:underline w-fit transition-all">
                        {t.pP} &larr;
                    </Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary leading-tight">
                        {t.title}
                    </h1>

                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold text-primary">{t.contents}</h2>
                        <ul className="flex flex-col gap-3 pl-2 sm:pl-6">
                            <li>
                                <Link href="#Main" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a1}</Link>
                            </li>
                            <li>
                                <Link href="#Ch1" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a2}</Link>
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
                    
                    <p className="text-xl sm:text-2xl text-foreground/70 leading-relaxed font-medium">
                        {t.w1}
                    </p>
                    <p className="text-xl sm:text-2xl text-foreground/70 leading-relaxed font-medium">
                        {t.w2}
                    </p>
                </div>
            </section>

            <section id="Ch1" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n1}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t1}</p>
            </section>

            <section id="Ch2" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n2}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t2}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t21}</p>
            </section>

            <section id="Ch3" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n3}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t3}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p6/delete_item.png" alt="DFMB_functions" fill className="object-contain p-2" />
                </div>
            </section>

            <section id="Ch4" className="flex flex-col gap-6 mt-4">
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t4}</p>
                <Link 
                        href="https://github.com/Valerchykld3/BaryCore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 hover:shadow-lg transition-all duration-300 w-fit"
                    >
                        {t.link}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    </Link>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t5}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t6}</p>
            </section>

            <section id="Test" className="flex flex-col gap-6 mt-4">
                <div className="w-full aspect-video">
                    <iframe
                        className="w-full h-full border-0"
                        src="https://www.youtube.com/embed/s31884dN5zs"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>
        </main>
    )
}