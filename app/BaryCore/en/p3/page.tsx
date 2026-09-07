"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import messagesUk from '@/lang/BaryCore/en.json';

const t = messagesUk.p3;

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans px-6 sm:px-12 pt-32 pb-24 max-w-4xl mx-auto flex flex-col gap-12">
            {/* Блок Main */}
            <section id="Main" className="flex flex-col gap-6">
                {/* Посилання на наступну та попередню сторінку */}
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
            
            </section>

        <hr className="border-border" />
        </main>
    )
}