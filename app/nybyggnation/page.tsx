'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import {
    CheckCircle, ArrowLeft, Home, Ruler,
    Zap, Droplets, HardHat, Construction,
    Phone, Mail, ShieldCheck, Leaf
} from 'lucide-react';

export default function ConstructionPage() {
    const steps = [
        { title: "Projektering & bygglov", desc: "Vi analyserar tomten, tar fram ritningar och hjälper till med bygglovsansökan." },
        { title: "Markarbete & grundläggning", desc: "En stabil grund är nyckeln. Vi använder moderna metoder för dränering och isolering." },
        { title: "Stomme & väggar", desc: "Huset byggs med högkvalitativa material och fokus på energieffektivitet." },
        { title: "Takarbete & isolering", desc: "Taket anpassas efter klimatet – hållbart, tätt och estetiskt." },
        { title: "El, VVS & ventilation", desc: "Allt installeras enligt gällande säkerhetsstandarder." },
        { title: "Ytskikt & finish", desc: "Vi avslutar med målning, golvläggning och detaljarbete – redo för inflyttning." },
    ];

    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans">
            <Header /> {/*
            {/* HERO */}
            <section className="relative h-[65vh] flex items-center justify-center text-white text-center">
                <div className="absolute inset-0 z-0">
                    <Image src="/new-build-hero.jpg" alt="Nybyggnation Stockholm" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-slate-900/70" />
                </div>
                <div className="relative z-10 px-6 max-w-4xl">
                    <Link href="/" className="inline-flex items-center text-orange-500 mb-6 font-bold hover:text-orange-400 transition">
                        <ArrowLeft size={20} className="mr-2" /> Tillbaka till startsidan
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">Nybyggnation & Attefallshus</h1>
                    <p className="text-xl text-slate-200 mb-8 leading-relaxed">Bygg ditt drömhus med oss – moderna hus och nyckelfärdiga Attefallshus i Stockholm med fokus på kvalitet och hållbarhet.</p>
                    <a href="#contact" className="bg-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition shadow-xl">Få offert idag</a>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start text-left">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Experter på hållbart och nyckelfärdigt byggande</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Att planera en nybyggnation eller bygga ett Attefallshus nyckelfärdigt är en investering som kräver rätt kunskap och precision.
                            Som byggfirma i Stockholm hjälper vi dig från första skiss till inflyttningsklart hem.
                        </p>
                        <div className="space-y-4">
                            <h4 className="font-bold text-orange-600 uppercase text-sm tracking-widest">Varför välja oss?</h4>
                            {[
                                "Helhetslösningar – från markarbete till färdig stomme",
                                "Certifierade hantverkare (snickare, elektriker, VVS)",
                                "Trygghet – fasta priser, tydliga avtal och försäkring",
                                "Lokal byggfirma som kan alla byggnormer i Stockholm"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle size={20} className="text-orange-600 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
                        <h3 className="text-2xl font-bold mb-6">Kvm pris nybyggnation</h3>
                        <p className="text-slate-600 mb-6 text-sm">Priset per kvadratmeter i Stockholm ligger normalt mellan <strong>25 000 – 40 000 SEK/m²</strong>. Faktorer som påverkar är:</p>
                        <ul className="space-y-2 text-slate-700 mb-8 font-medium">
                            <li>• Typ av hus (enplans, tvåplans, suterräng)</li>
                            <li>• Materialval och energiklass</li>
                            <li>• Tomtens förutsättningar (berg, lutning)</li>
                            <li>• Byggstandard (Standard, Premium, Passivhus)</li>
                        </ul>
                        <div className="p-4 bg-orange-50 rounded-xl border border-orange-100 flex items-center gap-4">
                            <ShieldCheck className="text-orange-600" size={32} />
                            <p className="text-xs text-orange-900 font-bold uppercase">Alltid fast prisoffert & ansvarsförsäkring</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-24 bg-slate-900 text-white px-6">
                <div className="max-w-7xl mx-auto text-left">
                    <h2 className="text-3xl font-bold mb-16 text-center">Nybyggnation av hus – Steg för steg</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {steps.map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="text-5xl font-black text-white/10 absolute -top-8 -left-2">0{i + 1}</div>
                                <h3 className="text-xl font-bold mb-4 text-orange-500 relative z-10">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ATTEFALL SECTION */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center text-left">
                    <div className="order-2 md:order-1">
                        <Image src="/attefall-house.jpg" width={600} height={400} alt="Attefallshus" className="rounded-3xl shadow-2xl" />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold mb-6">Attefallshus – Smart & Nyckelfärdigt</h2>
                        <p className="text-slate-600 mb-8">Ett perfekt komplement som gästhus, kontor eller uthyrningsdel. Kräver oftast inget bygglov (upp till 30 m²) och höjer fastighetsvärdet direkt.</p>
                        <div className="bg-slate-50 p-6 rounded-2xl mb-8">
                            <h4 className="font-bold mb-4 italic">Vad ingår i nyckelfärdigt?</h4>
                            <p className="text-sm text-slate-600">• Design, ritningar, grundläggning, stomresning, el, VVS och komplett inredning.</p>
                            <p className="mt-4 font-bold text-orange-600 italic">Kostnad: 550 000 – 950 000 SEK</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ENVIRONMENT */}
            <section className="bg-orange-600 py-16 px-6 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <Leaf className="mx-auto mb-6" size={48} />
                    <h2 className="text-3xl font-bold mb-4">Miljövänlig nybyggnation</h2>
                    <p className="text-orange-100 italic">Vi använder energieffektiva isoleringsmaterial, ventilationssystem med värmeåtervinning och solcellsförberedda tak för att minska klimatpåverkan.</p>
                </div>
            </section>

            <footer id="contact" className="py-20 bg-slate-50 text-center">
                <h2 className="text-3xl font-bold mb-8">Redo att ta första steget?</h2>
                <a href="tel:0708399749" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition">
                    <Phone size={20} /> Kontakta Aliaksei på 070-839 97 49
                </a>
            </footer>
        </main>
    );
}