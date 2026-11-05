import React from "react";
import Link from "next/link";
import Image from "next/image";
import messagesUk from '@/lang/LockedNet/en.json';

const t = messagesUk.lnp0;

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans px-6 sm:px-12 pt-32 pb-24 max-w-4xl mx-auto flex flex-col gap-12">
            <section id="Main" className="flex flex-col gap-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary">{t.title}</h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{t.stitle}</h2>
                <div className="relative w-full aspect-video my-2">
                    <Image
                        src="/ln.ico" alt="LockedNet" fill className="object-contain"/>
                </div>
            </section>

            <hr className="border-border" />

            <section id="Contents" className="flex flex-col gap-6">
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t1}</p>
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t2}</p>
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t3}</p>
                <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed font-medium">{t.t4}</p>
                <Link href="https://lockednetweb.vercel.app/" className="text-5xl font-semibold text-primary hover:underline w-fit transition-all">&rarr; {t.link}</Link>
            </section>
        </main>
    );
}