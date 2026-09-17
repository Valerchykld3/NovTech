import React from "react";
import Link from "next/link";
import Image from "next/image";
import messagesUk from '@/lang/BaryCore/en.json';

const t = messagesUk.bcp3;

const ImageCard = ({ src, alt }: { src: string; alt: string }) => (
    <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-border/40 shadow-sm bg-zinc-50 dark:bg-zinc-900/20 hover:border-primary/40 hover:shadow-md transition-all duration-300">
        <Image
            src={src}
            alt={alt}
            fill
            className="object-cover sm:object-contain p-2"
        />
    </div>
);

const ListItem = ({ text, imageSrc, imageAlt }: { text: string; imageSrc?: string; imageAlt?: string }) => (
    <li className="flex flex-col gap-4 pl-4 border-l-2 border-primary/20">
        <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">
            {text}
        </p>
        {imageSrc && imageAlt && <ImageCard src={imageSrc} alt={imageAlt} />}
    </li>
);

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans px-6 sm:px-12 pt-24 pb-24 max-w-4xl mx-auto flex flex-col gap-16">
            {/* Блок Main */}
            <section id="Main" className="flex flex-col gap-8">
                {/* Посилання на наступну та попередню сторінку */}
                <div className="flex justify-between items-center w-full mb-2">
                    <Link 
                        href="/BaryCore/en/p2" 
                        className="text-sm font-semibold text-primary hover:underline w-fit transition-all">
                        {t.pP} &larr;
                    </Link>
                    <Link 
                        href="/BaryCore/en/p4" 
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
            <li>
              <Link href="#Ch8" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a5}</Link>
                            </li>
            <li>
              <Link href="#Ch9" className="text-18px font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.a6}</Link>
            </li>
          </ul>
                    </div>
                    
                    <p className="text-xl sm:text-2xl text-foreground/70 leading-relaxed font-medium">
                        {t.w}
                    </p>
                </div>
                <ImageCard src="/bc_p3/full_config.png" alt="BaryCore config structure" />
            </section>

            <hr className="border-border/50" />
            
            <section id="Ch1" className="flex flex-col gap-6">
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t1}</p>
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t2}</p>
                <ImageCard src="/bc_p3/genai.jpg" alt="Google GenAI integration" />
            </section>

            <section id="Ch2" className="flex flex-col gap-10">
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.n1}</p>
                
                <div className="flex flex-col gap-4">
                    <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t3}</p>
                    <ImageCard src="/bc_p3/core.png" alt="Core functionality" />
                </div>
                
                <div className="flex flex-col gap-4">
                    <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t4}</p>
                    <ImageCard src="/bc_p3/tools.png" alt="Tools functionality" />
                </div>
                
                <div className="flex flex-col gap-4">
                    <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t5}</p>
                    <ImageCard src="/bc_p3/archetypes.png" alt="Archetypes functionality" />
                </div>
                
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium bg-primary/5 p-4 rounded-xl border border-primary/10">
                    {t.t6}
                </p>
            </section>

            <section id="Ch3" className="flex flex-col gap-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 tracking-tight">{t.n2}</h2>
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t7}</p>
                <ImageCard src="/bc_p3/tokens.png" alt="Tokens explanation" />
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t8}</p>
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t9}</p>
            </section>

            <section id="Ch4" className="flex flex-col gap-6 items-start">
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t10}</p>
                <Link 
                    href="https://github.com/Valerchykld3/BaryCore/tree/beta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 hover:shadow-lg transition-all duration-300 w-fit"
                >
                    {t.link}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                </Link>
            </section>

            <section id="Ch5" className="flex flex-col gap-8">
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t11}</p>
                <ul className="flex flex-col gap-10 list-none p-0 m-0">
                    <ListItem text={t.q110} imageSrc="/bc_p3/register_dynamic_agent.png" imageAlt="register_dynamic_agent function" />
                    <ListItem text={t.q111} imageSrc="/bc_p3/handle_message.png" imageAlt="handle_message function" />
                    <ListItem text={t.q112} imageSrc="/bc_p3/_run_dynamic.png" imageAlt="_run_dynamic function" />
                </ul>
            </section>

            <section id="Ch6" className="flex flex-col gap-8">
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t12}</p>
                <ul className="flex flex-col gap-10 list-none p-0 m-0">
                    <ListItem text={t.q120} imageSrc="/bc_p3/init.png" imageAlt="init function" />
                    <ListItem text={t.q121} imageSrc="/bc_p3/process_request.png" imageAlt="process_request function" />
                </ul>
            </section>

            <section id="Ch7" className="flex flex-col gap-8">
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t13}</p>
                <ul className="flex flex-col gap-10 list-none p-0 m-0">
                    <ListItem text={t.q130} />
                    <ListItem text={t.q131} imageSrc="/bc_p3/DFMB_functions.png" imageAlt="DFMB functions" />
                    <ListItem text={t.q132} imageSrc="/bc_p3/DTRB_functions.png" imageAlt="DTRB functions" />
                </ul>
            </section>

            <section id="Ch8" className="flex flex-col gap-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 tracking-tight">{t.n3}</h2>
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t14}</p>
                <ImageCard src="/bc_p3/agents.png" alt="Agents interaction" />
            </section>

            <section id="Ch9" className="flex flex-col gap-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-4 tracking-tight">{t.n4}</h2>
                <div className="flex flex-col gap-8 w-full items-center">
                    <ImageCard src="/bc_p3/ex1.png" alt="example 1" />
                    <ImageCard src="/bc_p3/ex2.png" alt="example 2" />
                    <ImageCard src="/bc_p3/ex3.png" alt="example 3" />
                    <ImageCard src="/bc_p3/ex4.png" alt="example 4" />
                </div>
            </section>

            <section id="Ch10" className="flex flex-col gap-6">
                <p className="text-lg sm:text-xl text-foreground">{t.t15}</p>
            </section>

            {/* Блок nextPage */}
            <section id="nP" className="mt-8 pt-8 border-t border-border flex justify-end">
              <Link 
                href="/BaryCore/en/p4" 
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