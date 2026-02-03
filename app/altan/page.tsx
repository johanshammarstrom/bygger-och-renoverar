'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import {
    ArrowLeft, CheckCircle, TreePine, Sun,
    Ruler, Hammer, Shovel, Droplets,
    ChevronDown, Phone, Mail, Info
} from 'lucide-react';

export default function AltanPage() {
    const [activeFaq, setActiveFaq] = useState(null);

    const steps = [
        { title: "Planering & design", desc: "Bestäm storlek, placering och eventuella räcken." },
        { title: "Offert & budget", desc: "Vi lämnar en tydlig offert baserat på dina behov." },
        { title: "Markberedning", desc: "Grävning, dränering och plintar för en stabil grund." },
        { title: "Regelverk & golvläggning", desc: "Konstruktion av bärande stomme och läggning av altangolv." },
        { title: "Finish & skydd", desc: "Oljning, målning eller lasering för bästa hållbarhet." },
    ];

    const faqs = [
        { q: "Vad är bygga altan kostnad?", a: "En normalstor träaltan kostar ofta 1 200–2 500 SEK per m² inklusive material och arbete." },
        { q: "Behöver jag bygglov för altan?", a: "Små altaner kräver sällan bygglov om de håller sig inom vissa mått. Vi hjälper dig att kontrollera vad som gäller för just din fastighet." },
        { q: "Vilket material är bäst för nordiskt klimat?", a: "Tryckimpregnerat trä tål fukt bäst för priset. Lärk och komposit är bra alternativ för den som vill ha mindre underhåll." },
        { q: "Kan ni bygga altan på mark snabbt?", a: "Ja, vi planerar effektivt för att minimera byggtiden så att du kan njuta av sommaren på din nya uteplats." }
    ];

    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans text-left">
            <Header /> {/*
            {/* HERO */}
            <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
                <div className="absolute inset-0 z-0">
                    <Image src="/altan-hero.jpg" alt="Bygga altan Stockholm" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-slate-900/60" />
                </div>
                <div className="relative z-10 px-6">
                    <Link href="/" className="inline-flex items-center text-orange-500 mb-6 font-bold hover:underline">
                        <ArrowLeft size={20} className="mr-2" /> Tillbaka
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Bygga Altan & Terrass</h1>
                    <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto italic">Din drömaltan börjar här – vi bygger hållbara träaltaner och terrasser i Stockholm.</p>
                </div>
            </section>

            {/* INTRO */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-orange-600">Experten på träaltan och uteplats</h2>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Att bygga altan eller terrass är ett av de mest uppskattade sätten att förlänga sommaren och höja värdet på din bostad.
                            Med en vackert designad träaltan får du ett extra vardagsrum utomhus.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-3">
                                <Sun className="text-orange-500" /> <span className="font-bold text-sm">Naturlig känsla</span>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-3">
                                <TreePine className="text-orange-500" /> <span className="font-bold text-sm">Hållbart virke</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-600 text-white p-10 rounded-3xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">Kostnad för altan</h3>
                        <div className="text-4xl font-black mb-2 italic">1 200 – 2 500 SEK/m²</div>
                        <p className="text-orange-100 text-sm mb-6">Priset inkluderar material och arbete (inkl. hantverkare pris).</p>
                        <ul className="text-xs space-y-2 opacity-90">
                            <li>• Storlek och form</li>
                            <li>• Val av träslag (Lärk, Komposit, Tryckimpregnerat)</li>
                            <li>• Grundarbete och markberedning</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* STEPS */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-16 text-center italic">Bygga altan på mark – steg för steg</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
                                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mb-4">{i + 1}</div>
                                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MAINTENANCE TIPS */}
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <div className="bg-slate-900 text-white p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
                    <Info size={48} className="text-orange-500 shrink-0" />
                    <div className="text-left">
                        <h3 className="text-2xl font-bold mb-4">Viktiga tips för en hållbar altan</h3>
                        <p className="text-slate-400 text-sm italic mb-4">Använd rätt virke för nordiskt klimat och se till att olja in altanen vartannat år.</p>
                        <p className="text-slate-400 text-sm italic">Rätt lutning förhindrar vattenansamling och förlänger träets liv.</p>
                    </div>
                </div>
            </section>

            {/* FAQ SEKTION */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Vanliga frågor om altan</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition outline-none">
                                    <span className="font-bold">{faq.q}</span>
                                    <ChevronDown className={`text-orange-600 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`transition-all duration-300 overflow-hidden ${activeFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 pt-0 text-slate-600 border-t border-slate-50 leading-relaxed italic">{faq.a}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-12 bg-slate-50 text-center border-t">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Bygger och Renoverar Stockholm – 070-839 97 49</p>
            </footer>
        </main>
    );
}