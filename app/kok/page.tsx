'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import ContactForm from '../components/ContactForm'; // Importera ditt nya formulär
import {
    ArrowLeft, CheckCircle, Utensils,
    ShieldCheck, Zap, Hammer, Ruler,
    ChevronDown, Phone, Mail, Sparkles, Info, Shield
} from 'lucide-react';

export default function KokPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const steps = [
        { title: "Kostnadsfri rådgivning & offert", desc: "Vi besöker hemmet, mäter och tar fram en detaljerad köksrenovering offert." },
        { title: "Design & materialval", desc: "Tillsammans skapar vi en plan som matchar din stil och din budget." },
        { title: "Demontering & förberedelse", desc: "Vi river gamla ytur och kontrollerar el och VVS noggrant." },
        { title: "Installation & montering", desc: "Certifierade hantverkare installerar skåp, vitvaror och bänkskivor." },
        { title: "Slutbesiktning & garanti", desc: "Vi går igenom allt med dig och lämnar en skriftlig garanti." },
    ];

    const faqs = [
        { q: "Vad är genomsnittlig kostnad för köksrenovering?", a: "Ofta mellan 120 000–250 000 SEK beroende på storlek och materialval." },
        { q: "Kan ni ge fast pris för att renovera kök?", a: "Ja, efter ett hembesök ger vi en fast offert med en tydlig kostnadsfördelning." },
        { q: "Hur lång tid tar en köksrenovering?", a: "Vanligtvis 4–6 veckor beroende på projektets omfattning." },
        { q: "Går det att renovera kök billigt?", a: "Ja, genom att behålla befintlig rördragning och kombinera standardluckor med exklusiva detaljer kan man sänka kostnaden rejält." }
    ];

    const jobs = [
        { loc: "Bromma", title: "Modernt kök i Bromma", img: "/jobb-bromma.jpg" },
        { loc: "Östermalm", title: "Premiumrenovering Östermalm", img: "/jobb-ostermalm.jpg" },
        { loc: "Södermalm", title: "Sekelskifteskök Södermalm", img: "/jobb-sodermalm.jpg" },
    ];

    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans text-left">
            <Header />
            <ScrollToTop />

            {/* HERO */}
            <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
                <div className="absolute inset-0 z-0">
                    <Image src="/kok-hero.jpg" alt="Köksrenovering Stockholm" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-slate-900/60" />
                </div>
                <div className="relative z-10 px-6">
                    <Link href="/" className="inline-flex items-center text-orange-500 mb-6 font-bold hover:underline transition">
                        <ArrowLeft size={20} className="mr-2" /> Tillbaka
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">Köksrenovering</h1>
                    <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto italic">
                        Skapa ditt drömkök med oss – vi kombinerar stil, funktion och svensk kvalitet.
                    </p>
                </div>
            </section>

            {/* INTRO & PRIS */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-orange-600 italic underline decoration-orange-600/30">Experten på kök i Stockholm</h2>
                        <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                            Ett nytt kök är en av de bästa investeringarna du kan göra för din bostad.
                            Vi hjälper dig att optimera planlösningen och välja material som håller i många år framöver.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-5 bg-slate-50 rounded-2xl flex items-center gap-3 border border-slate-100">
                                <Utensils className="text-orange-500" /> <span className="font-bold text-sm">Smart design</span>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-2xl flex items-center gap-3 border border-slate-100">
                                <ShieldCheck className="text-orange-500" /> <span className="font-bold text-sm">Säker el & VVS</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-600 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                        <Sparkles className="absolute -top-4 -right-4 text-white/10" size={120} />
                        <h3 className="text-2xl font-bold mb-4">Pris renovera kök</h3>
                        <div className="text-4xl font-black mb-2 italic tracking-tighter text-white">8 000 – 15 000 SEK/m²</div>
                        <p className="text-orange-100 text-sm mb-6 opacity-90">Ungefärlig arbetskostnad efter ROT. Exakt pris via personlig offert.</p>
                        <div className="space-y-3 border-t border-white/20 pt-6">
                            <p className="flex items-center gap-2 text-sm"><CheckCircle size={16} /> Montering av stommar & inredning</p>
                            <p className="flex items-center gap-2 text-sm"><CheckCircle size={16} /> Auktoriserad rördragning</p>
                            <p className="flex items-center gap-2 text-sm"><CheckCircle size={16} /> Installation av vitvaror</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VÅRA PROJEKT */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 italic">Våra köksprojekt i Stockholm</h2>
                    <div className="w-20 h-1.5 bg-orange-600 mx-auto mb-16 rounded-full"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobs.map((job, i) => (
                            <div key={i} className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-xl bg-slate-200 border-4 border-white transition-transform hover:-translate-y-2">
                                <Image src={job.img} alt={job.title} fill className="object-cover transition duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-8 text-left">
                                    <span className="text-orange-500 font-bold text-xs uppercase mb-2 tracking-widest">{job.loc}</span>
                                    <h3 className="text-white text-2xl font-bold italic leading-tight">{job.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STEPS - Arbetsprocessen */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tighter italic text-slate-900">
                        Vår arbetsprocess för kök
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 transition hover:bg-white hover:shadow-xl group">
                                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mb-6 text-xl shadow-lg transition-transform group-hover:scale-110">
                                    {i + 1}
                                </div>
                                <h3 className="font-bold text-lg mb-3 text-slate-900 uppercase tracking-tight">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed italic">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 italic">Vanliga frågor om kök</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition outline-none"
                                >
                                    <span className="font-bold text-slate-800 italic">{faq.q}</span>
                                    <ChevronDown className={`text-orange-600 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`transition-all duration-300 overflow-hidden ${activeFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 pt-0 text-slate-500 border-t border-slate-50 leading-relaxed italic text-sm">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NY KONTAKTSEKTION MED FORMSPREE */}
            <section id="contact" className="py-32 bg-white px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic text-slate-900">
                        Få din köksoffert idag
                    </h2>
                    <p className="text-slate-500 mb-16 text-lg max-w-2xl mx-auto italic leading-relaxed">
                        Fyll i formuläret nedan så kontaktar vi dig för ett kostnadsfritt hembesök och offert.
                    </p>

                    <ContactForm />

                    <div className="mt-16 flex flex-wrap justify-center gap-12 text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">
                        <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-orange-500" /> Snabba svar</div>
                        <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-orange-500" /> Kostnadsfritt besök</div>
                        <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-orange-500" /> Fasta priser</div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-12 bg-slate-50 text-center border-t border-slate-100">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
                    © 2026 Bygger och Renoverar Stockholm
                </p>
            </footer>
        </main>
    );
}