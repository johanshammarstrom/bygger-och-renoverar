'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import {
    ArrowLeft, CheckCircle, Utensils,
    ShieldCheck, Zap, Hammer, Ruler,
    ChevronDown, Phone, Mail, Sparkles
} from 'lucide-react';

export default function KokPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const steps = [
        { title: "Kostnadsfri rådgivning & offert", desc: "Vi besöker hemmet, mäter och tar fram en detaljerad köksrenovering offert." },
        { title: "Design & materialval", desc: "Tillsammans skapar vi en plan som matchar din stil och din budget." },
        { title: "Demontering & förberedelse", desc: "Vi river gamla ytor och kontrollerar el och VVS noggrant." },
        { title: "Installation & montering", desc: "Certifierade hantverkare installerar skåp, vitvaror och bänkskivor." },
        { title: "Slutbesiktning & garanti", desc: "Vi går igenom allt med dig och lämnar en skriftlig garanti." },
    ];

    const faqs = [
        { q: "Vad är genomsnittlig kostnad för köksrenovering?", a: "Ofta mellan 120 000–250 000 SEK beroende på storlek och materialval." },
        { q: "Kan ni ge fast pris för att renovera kök?", a: "Ja, efter ett hembesök ger vi en fast offert med en tydlig kostnadsfördelning." },
        { q: "Hur lång tid tar en köksrenovering?", a: "Vanligtvis 4–6 veckor beroende på projektets omfattning." },
        { q: "Går det att renovera kök billigt?", a: "Ja, genom att behålla befintlig rördragning och kombinera standardluckor med exklusiva detaljer kan man sänka kostnaden rejält." }
    ];

    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans text-left">
            <Header />
            <ScrollToTop />

            {/* HERO SECTION */}
            <section className="relative h-[65vh] flex items-center justify-center text-white text-center">
                <div className="absolute inset-0 z-0">
                    <Image src="/kok-hero.jpg" alt="Köksrenovering Stockholm" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-slate-900/60" />
                </div>
                <div className="relative z-10 px-6 max-w-4xl">
                    <Link href="/" className="inline-flex items-center text-orange-500 mb-6 font-bold hover:underline">
                        <ArrowLeft size={20} className="mr-2" /> Tillbaka
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">Köksrenovering i Stockholm</h1>
                    <p className="text-xl text-slate-200 mb-8 italic">Skapa ditt drömkök – stil, funktion och kvalitet.</p>
                    <a href="#contact" className="bg-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition shadow-xl">Boka Offertförfrågan</a>
                </div>
            </section>

            {/* INTRO & PRISGUIDE */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 italic underline decoration-orange-600">Från idé till färdigt kök</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Att renovera kök är ett av de mest värdehöjande projekten du kan göra. Ett nytt, funktionellt och stilrent kök förbättrar både vardagen och bostadens marknadsvärde.
                            Vi hjälper dig att bevara charm i gamla kök eller skapa helt nya moderna lösningar.
                        </p>
                        <div className="space-y-4">
                            <h4 className="font-bold uppercase text-sm tracking-widest text-orange-600">Varför anlita oss?</h4>
                            {[
                                "Modern planlösning & smart förvaring",
                                "Korrekt el- och VVS-arbete för hög säkerhet",
                                "Certifierade hantverkare med lokal expertis",
                                "Hjälp med designnivå och materialval"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-orange-600 shrink-0" />
                                    <span className="font-medium">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Sparkles size={120} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-orange-500">Pris renovera kök</h3>
                        <div className="text-4xl font-black mb-2 italic">8 000 – 15 000 SEK/m²</div>
                        <p className="text-slate-400 text-sm mb-6">Normal kostnad i Stockholm inklusive material och arbete. Exakt pris via personlig offert.</p>
                        <div className="space-y-2 border-t border-white/10 pt-6">
                            <p className="text-xs uppercase font-bold tracking-tighter text-orange-200">Tips för billigare renovering:</p>
                            <p className="text-xs text-slate-400">• Behåll befintlig rördragning och el.</p>
                            <p className="text-xs text-slate-400">• Kombinera standardlösningar med exklusiva detaljer.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VÅRA JOBB - BILDER */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest">VÅRA KÖKSPROJEKT</h2>
                    <div className="w-20 h-1.5 bg-orange-600 mx-auto mb-16"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { loc: "Bromma", title: "Modernt kök i Bromma", img: "/jobb-bromma.jpg" },
                            { loc: "Östermalm", title: "Premiumrenovering Östermalm", img: "/jobb-ostermalm.jpg" },
                            { loc: "Södermalm", title: "Sekelskifteskök Södermalm", img: "/jobb-sodermalm.jpg" },
                        ].map((job, i) => (
                            <div key={i} className="group relative h-96 rounded-2xl overflow-hidden shadow-lg bg-slate-200">
                                <Image src={job.img} alt={job.title} fill className="object-cover transition duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-left">
                                    <span className="text-orange-500 font-bold text-xs uppercase mb-2">{job.loc}</span>
                                    <h3 className="text-white text-xl font-bold">{job.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-24 px-6 max-w-7xl mx-auto text-left">
                <h2 className="text-3xl font-bold mb-16 italic underline decoration-orange-600">Vår arbetsprocess för kök</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {steps.map((step, i) => (
                        <div key={i} className="relative pl-12">
                            <div className="absolute left-0 top-0 text-4xl font-black text-orange-100 italic -z-10">0{i + 1}</div>
                            <h3 className="font-bold text-lg mb-2 uppercase tracking-tight">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-slate-900 text-white px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-orange-500">Vanliga frågor om kök (FAQ)</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left outline-none">
                                    <span className="font-bold italic">{faq.q}</span>
                                    <ChevronDown className={`text-orange-500 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`transition-all duration-300 overflow-hidden ${activeFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 pt-0 text-slate-400 border-t border-white/5 text-sm leading-relaxed">{faq.a}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER CONTACT */}
            <footer id="contact" className="py-20 bg-white text-center border-t border-slate-200">
                <h2 className="text-3xl font-bold mb-8 uppercase tracking-tighter">Få din köksoffert idag</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="tel:0708399749" className="flex items-center justify-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition shadow-lg">
                        <Phone size={20} /> 070-839 97 49
                    </a>
                    <a href="mailto:info@byggochrenoverar.se" className="flex items-center justify-center gap-3 border border-slate-300 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition">
                        <Mail size={20} /> Skicka e-post
                    </a>
                </div>
                <p className="mt-12 text-slate-400 text-xs">© 2026 Bygger och Renoverar Stockholm</p>
            </footer>
        </main>
    );
}