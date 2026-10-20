import React from "react";
import Link from "next/link";
import Image from "next/image";
import messagesUk from '@/lang/VoltPulse/uk.json';

const t = messagesUk.vpp2;

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans px-6 sm:px-12 pt-32 pb-24 max-w-4xl mx-auto flex flex-col gap-12">

            {/* Блок Main */}
            <section id="Main" className="flex flex-col gap-6">
            {/* Посилання на наступну та попередню сторінку */}
                <div className="flex justify-between items-center w-full mb-2">
                    <Link 
                        href="/VoltPulse/uk/p1" 
                        className="text-sm font-semibold text-primary hover:underline w-fit transition-all">
                        {t.pP} &larr;
                    </Link>
                    <Link 
                        href="/VoltPulse/uk/p3" 
                        className="text-sm font-semibold text-primary hover:underline w-fit transition-all">
                        {t.nP} &rarr;
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
                                <Link href="#Ch1" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a1}</Link>
                            </li>
                            <li>
                                <Link href="#Ch2" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a2}</Link>
                            </li>
                            <li>
                                <Link href="#Ch3" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a3}</Link>
                            </li>
                            <li>
                                <Link href="#Ch4" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a4}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <hr className="border-border" />

            <section id="Ch1" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n1}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t1}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t101}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/vp_p2/device1" alt="Prototype1" fill className="object-contain p-2" />
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t102}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/vp_p2/device2" alt="Prototype2" fill className="object-contain p-2" />
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t103}</p>
            </section>

            <section id="Ch2" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n2}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t2}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t201}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t202}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/vp_p2/1" alt="photo1" fill className="object-contain p-2" />
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t203}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/vp_p2/2" alt="photo2" fill className="object-contain p-2" />
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t204}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/vp_p2/3" alt="photo3" fill className="object-contain p-2" />
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t205}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/vp_p2/4" alt="photo4" fill className="object-contain p-2" />
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t206}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t207}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t208}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t209}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/vp_p2/5" alt="photo5" fill className="object-contain p-2" />
                </div>
            </section>

            <section id="Ch3" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n3}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t3}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t301}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t302}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/vp_p2/test2.png" alt="photo" fill className="object-contain p-2" />
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t303}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/vp_p2/test3.jpg" alt="photo" fill className="object-contain p-2" />
                </div>
            </section>

            <section id="Ch4" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n4}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t4}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t401}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t402}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t403}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t404}</p>
            </section>

            {/* Блок nextPage */}
            <section id="nP" className="mt-12 pt-8 border-t border-border flex justify-end">
                <Link 
                    href="/VoltPulse/uk/p3" 
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