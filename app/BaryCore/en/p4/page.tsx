import React from "react";
import Link from "next/link";
import Image from "next/image";
import messagesUk from '@/lang/BaryCore/en.json';

const t = messagesUk.bcp4;

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans px-6 sm:px-12 pt-32 pb-24 max-w-4xl mx-auto flex flex-col gap-12">
            {/* Блок Main */}
            <section id="Main" className="flex flex-col gap-8">
                {/* Посилання на наступну та попередню сторінку */}
                <div className="flex justify-between items-center w-full mb-2">
                    <Link 
                        href="/BaryCore/en/p3" 
                        className="text-sm font-semibold text-primary hover:underline w-fit transition-all">
                        {t.pP} &larr;
                    </Link>
                    <Link 
                        href="/BaryCore/en/p5" 
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
                            <li>
                                <Link href="#Ch5" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a6}</Link>
                            </li>
                            <li>
                                <Link href="#Ch6" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a7}</Link>
                            </li>
                            <li>
                                <Link href="#Ch7" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a8}</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <p className="text-xl sm:text-2xl text-foreground/70 leading-relaxed font-medium">
                        {t.w}
                    </p>
                    <Link 
                        href="https://github.com/Valerchykld3/BaryCore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 hover:shadow-lg transition-all duration-300 w-fit"
                    >
                        {t.link}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    </Link>
                </div>
            </section>
            
            <section id="Ch1" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n1}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t1}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/DFMB_functions.png" alt="DFMB_functions" fill className="object-contain p-2" />
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t2}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/list_directory.png" alt="list_directory" fill className="object-contain p-2" />
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t3}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/DTRB_functions.png" alt="DTRB_functions" fill className="object-contain p-2" />
                </div>
            </section>

            <section id="Ch2" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n2}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t4}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t5}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/close_of_sessions.png" alt="close_of_sessions" fill className="object-contain p-2" />
                </div>
            </section>

            <section id="Ch3" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n3}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t6}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/staticEngine.png" alt="statics" fill className="object-contain p-2" />
                </div>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/register_static_agent.png" alt="statics" fill className="object-contain p-2" />
                </div>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/_run_static.png" alt="statics" fill className="object-contain p-2" />
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t7}</p>
            </section>

            <section id="Ch4" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n4}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t8}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t9}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t10}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t11}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/OAuth2.png" alt="OAuth2" fill className="object-contain p-2" />
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t12}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/DGDB_functions.png" alt="DGDB_dunctions" fill className="object-contain p-2" />
                </div>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/DGDB.png" alt="DGDB_dunctions" fill className="object-contain p-2" />
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t13}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/SGRB_functions.png" alt="SGRB_functions" fill className="object-contain p-2" />
                </div>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/SGRB.png" alt="DGDB_dunctions" fill className="object-contain p-2" />
                </div>
            </section>

            <section id="Ch5" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n5}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t14}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t15}</p>
            </section>

            <section id="Ch6" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n6}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t16}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t17}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t18}</p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t19}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/DMSB.png" alt="DMSB" fill className="object-contain p-2" />
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t20}</p>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/DNIB_functions.png" alt="DNIB_functions" fill className="object-contain p-2" />
                </div>
                <div className="relative w-full aspect-video rounded-xl border border-border bg-zinc-50 dark:bg-[#0d1117] shadow-sm overflow-hidden my-2 transition-all duration-300 hover:border-primary hover:shadow-sm">
                    <Image src="/bc_p4/DNIB.png" alt="DNIB" fill className="object-contain p-2" />
                </div>
            </section>

            <section id="Ch7" className="flex flex-col gap-6 mt-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary border-b border-border pb-2 tracking-tight">{t.n7}</h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{t.t21}</p>
            </section>

            {/* Блок nextPage (Без змін) */}
            <section id="nP" className="mt-12 pt-8 border-t border-border flex justify-end">
                <Link 
                    href="/BaryCore/en/p5" 
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