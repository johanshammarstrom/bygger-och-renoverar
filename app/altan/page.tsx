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
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const steps = [
        { title: "Planering & design", desc: "Bestäm storlek, placering och eventuella räcken." },
        { title: "Offert & budget", desc: "Vi lämnar en tydlig offert baserat på dina behov." },
        { title: "Markberedning", desc: "Grävning, dränering och plintar för en stabil grund." },
        { title: "Regelverk & golvläggning", desc: "Konstruktion av bärande stomme och läggning av altangolv." },
        { title: "Finish & skydd", desc: "Oljning, målning eller lasering för bästa hållbarhet." },
        { title: "Slutbesiktning", desc: "Vi går igenom resultatet tillsammans så att allt är perfekt." },
    ];

    const faqs = [
        { q: "Vad är bygga altan kostnad?", a: "En normalstor träaltan kostar ofta 1 200–2 500 SEK per m² inklusive material och arbete." },
        { q: "Behöver jag bygglov för altan?", a: "Små altaner kräver sällan bygglov om de håller sig inom vissa mått. Vi hjälper dig att kontrollera vad som gäller för just din fastighet." },
        { q: "Vilket material är bäst för nordiskt klimat?", a: "Tryckimpregnerat trä tål fukt bäst för priset. Lärk och komposit är bra alternativ för den som vill ha mindre underhåll." },
        { q: "Can ni bygga altan på mark snabbt?", a: "Ja, vi planerar effektivt för att minimera byggtiden så att du kan njuta av sommaren på din nya uteplats." }
    ];

    const jobs = [
        { loc: "Nacka", title: "Stor trall med infälld belysning", img: "/jobb-nacka-altan.jpg" },
        { loc: "Täby", title: "Altan i etage med glasräcke", img: "/jobb-taby-altan.jpg" },
        { loc: "Bromma", title: "Klassisk träaltan i lärk", img: "/jobb-bromma-altan.jpg" },
    ];

    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans text-left">
            <Header />
            <ScrollToTop />

            {/* HERO */}
            <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
                <div className="absolute inset-0 z-0">
                    <Image src="/altan-hero.jpg" alt="Bygga altan Stockholm" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-slate-900/60" />
                </div>
                <div className="relative z-10 px-6">
                    <Link href="/" className="inline-flex items-center text-orange-500 mb-6 font-bold hover:underline transition">
                        <ArrowLeft size={20} className="mr-2" /> Tillbaka
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 italic tracking-tight">Bygga Altan & Terrass</h1>
                    <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto italic">
                        Din drömaltan börjar här – vi bygger hållbara uteplatser i Stockholm.
                    </p>
                </div>
            </section>

            {/* INTRO & PRIS */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-orange-600 italic underline decoration-orange-600/30">Experten på träaltaner</h2>
                        <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                            Att bygga altan eller terrass är ett av de mest uppskattade sätten att förlänga sommaren.
                            Vi skapar stabila konstruktioner som tål det nordiska klimatet och höjer värdet på din fastighet.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-5 bg-slate-50 rounded-2xl flex items-center gap-3 border border-slate-100">
                                <Sun className="text-orange-500" /> <span className="font-bold text-sm">Väderbeständigt</span>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-2xl flex items-center gap-3 border border-slate-100">
                                <TreePine className="text-orange-500" /> <span className="font-bold text-sm">Hållbart virke</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-600 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                        <h3 className="text-2xl font-bold mb-4 tracking-tight">Pris för altan</h3>
                        <div className="text-4xl font-black mb-2 italic tracking-tighter">1 200 – 2 500 SEK/m²</div>
                        <p className="text-orange-100 text-sm mb-6 opacity-90">Inklusive material och arbete. Pris varierar beroende på markförhållanden.</p>
                        <div className="space-y-3 border-t border-white/20 pt-6">
                            <p className="flex items-center gap-2 text-sm"><CheckCircle size={16} /> Stabilt grundarbete med plintar</p>
                            <p className="flex items-center gap-2 text-sm"><CheckCircle size={16} /> Tryckimpregnerat eller premiumvirke</p>
                            <p className="flex items-center gap-2 text-sm"><CheckCircle size={16} /> Snygga avslut & dolda skruvskallar</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* VÅRA TIDIGARE JOBB - Återinsatt och stylat */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 italic">Våra altanprojekt i Stockholm</h2>
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
                    <h2 className="text-3xl font-bold mb-16 italic">Bygga altan – steg för steg</h2>
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

            {/* INFO BOX TIPS */}
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <div className="bg-slate-900 text-white p-12 rounded-[3rem] flex flex-col md:flex-row gap-8 items-center text-left shadow-2xl relative">
                    <div className="absolute top-0 left-10 w-20 h-1 bg-orange-600" />
                    <Info size={48} className="text-orange-500 shrink-0" />
                    <div>
                        <h3 className="text-2xl font-bold mb-4 italic text-white">Viktiga tips för din altan</h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">
                            Använd rätt virke för det nordiska klimatet och se till att olja in altanen vartannat år för maximal livslängd.
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed italic">
                            Rätt lutning från huset förhindrar vattenansamling och skyddar både altanen och husets fasad.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 italic text-slate-900">Vanliga frågor om altan</h2>
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

            {/* FOOTER */}
            <footer className="py-24 bg-white text-center border-t border-slate-100">
                <h2 className="text-4xl font-black mb-10 uppercase tracking-tighter italic">Få din altanoffert idag</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="tel:0708399749" className="flex items-center justify-center gap-3 bg-orange-600 text-white px-10 py-5 rounded-full font-bold hover:bg-orange-700 transition shadow-xl hover:-translate-y-1">
                        <Phone size={22} /> 079-018 71 24
                    </a>
                    <a href="mailto:info@byggochrenoverar.se" className="flex items-center justify-center gap-3 border-2 border-slate-900 px-10 py-5 rounded-full font-bold hover:bg-slate-900 hover:text-white transition hover:-translate-y-1">
                        <Mail size={22} /> Skicka e-post
                    </a>
                </div>
                <p className="mt-16 text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">
                    Bygger och Renoverar Stockholm – © 2026
                </p>
            </footer>
        </main>
    );
}