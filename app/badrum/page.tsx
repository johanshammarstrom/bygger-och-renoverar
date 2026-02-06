'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import {
    ArrowLeft, CheckCircle, Droplets,
    ShieldCheck, Zap, Hammer, Ruler,
    ChevronDown, Phone, Mail, Bath, Info
} from 'lucide-react';

export default function BadrumPage() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const steps = [
        { title: "Konsultation & offert", desc: "Vi gör en platsbesiktning och ger en detaljerad offert." },
        { title: "Design & materialval", desc: "Du väljer stil, färger och inredning som passar din smak." },
        { title: "Rivning & förberedelser", desc: "Noggrann rivning och kontroll av fukt för en säker grund." },
        { title: "VVS och el", desc: "Certifierade installatörer utför allt enligt svenska branschregler." },
        { title: "Tätskikt & ytskikt", desc: "Kakel, klinker och målning utförs med högsta precision." },
        { title: "Slutbesiktning & garanti", desc: "Projektet avslutas först när du är 100% nöjd." },
    ];

    const faqs = [
        { q: "Vad är genomsnittlig kostnad för badrumsrenovering?", a: "I Stockholm ligger badrumsrenovering pris ofta mellan 120 000–220 000 SEK beroende på storlek och materialval." },
        { q: "Kan ni ge en fast offert badrum?", a: "Ja, efter ett kostnadsfritt hembesök får du ett fast pris med en tydlig specifikation så att du slipper överraskningar." },
        { q: "Vad kostar det att bygga badrum från grunden?", a: "Att bygga badrum kostnad varierar, men räkna med 30 000–40 000 SEK per kvm inklusive VVS, el och certifierat tätskikt." },
        { q: "Hur lång tid tar en totalrenovering badrum?", a: "Normalt tar en totalrenovering mellan 3 till 5 veckor, beroende på badrummets storlek och torktider för tätskikt." }
    ];

    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans text-left">
            <Header />
            <ScrollToTop />

            {/* HERO - Matchar Altan-stilen */}
            <section className="relative h-[60vh] flex items-center justify-center text-white text-center">
                <div className="absolute inset-0 z-0">
                    <Image src="/badrum-hero.jpg" alt="Badrumsrenovering Stockholm" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-slate-900/60" />
                </div>
                <div className="relative z-10 px-6">
                    <Link href="/" className="inline-flex items-center text-orange-500 mb-6 font-bold hover:underline">
                        <ArrowLeft size={20} className="mr-2" /> Tillbaka
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Badrumsrenovering</h1>
                    <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto italic">
                        Förvandla ditt badrum – vi skapar trygga och stilrena våtrum i Stockholm.
                    </p>
                </div>
            </section>

            {/* INTRO - Matchar Altan-stilen */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-orange-600">Experten på våtrum och badrum</h2>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Att planera en badrumsrenovering kräver kunskap och en pålitlig entreprenör.
                            Vi hjälper dig att förstå kostnaderna och guidar dig genom hela processen,
                            från rivning till sista silikonfogen.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-3">
                                <ShieldCheck className="text-orange-500" /> <span className="font-bold text-sm">Behörig våtrum</span>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl flex items-center gap-3">
                                <Droplets className="text-orange-500" /> <span className="font-bold text-sm">Säkert tätskikt</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-600 text-white p-10 rounded-3xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">Pris för badrum</h3>
                        <div className="text-4xl font-black mb-2 italic">5 000 – 9 000 SEK/m²</div>
                        <p className="text-orange-100 text-sm mb-6">Arbetskostnad efter ROT-avdrag. Exakt pris ges via offert.</p>
                        <ul className="text-xs space-y-2 opacity-90">
                            <li>• Certifierade VVS-arbeten & El</li>
                            <li>• Rivning och fuktkontroll</li>
                            <li>• Tätskikt enligt branschregler</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* STEPS - Matchar Altan-stilen (Cards med runda nummer) */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-16 text-center italic">Renovera badrummet – steg för steg</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
                                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                                    {i + 1}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MAINTENANCE / INFO TIPS - Matchar Altan-stilen */}
            <section className="py-20 px-6 max-w-5xl mx-auto">
                <div className="bg-slate-900 text-white p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
                    <Info size={48} className="text-orange-500 shrink-0" />
                    <div className="text-left">
                        <h3 className="text-2xl font-bold mb-4">Viktigt att veta om våtrum</h3>
                        <p className="text-slate-400 text-sm italic mb-4">
                            Vi följer alltid BBV (Byggkeramikrådets branschregler) för att garantera ett godkänt resultat för försäkringsbolag.
                        </p>
                        <p className="text-slate-400 text-sm italic">
                            Ett korrekt utfört tätskikt är hjärtat i ett hållbart badrum och skyddar ditt hem mot fuktskador.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ - Matchar Altan-stilen (Ljus bakgrund, tydliga ramar) */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Vanliga frågor om badrum</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition outline-none"
                                >
                                    <span className="font-bold">{faq.q}</span>
                                    <ChevronDown className={`text-orange-600 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`transition-all duration-300 overflow-hidden ${activeFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 pt-0 text-slate-600 border-t border-slate-50 leading-relaxed italic">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER - Matchar Altan-stilen */}
            <footer className="py-12 bg-slate-50 text-center border-t">
                <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
                    Bygger och Renoverar Stockholm – 079-018 71 24
                </p>
            </footer>
        </main>
    );
}