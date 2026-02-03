'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import {
    ArrowLeft, CheckCircle, Droplets,
    ShieldCheck, Zap, Hammer, Ruler,
    ChevronDown, Phone, Mail, Bath
} from 'lucide-react';

export default function BadrumPage() {
    const [activeFaq, setActiveFaq] = useState(null);

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

    const portfolio = [
        "Badrumsrenovering i Nacka", "Badrumsrenovering i Täby",
        "Renovering av badrum, Huddinge", "Badrumsrenovering i Solna",
        "Badrumsrenovering i Sundbyberg"
    ];

    return (
        <main className="min-h-screen bg-white text-slate-900 font-sans text-left">
            <Header />
            <ScrollToTop />

            {/* HERO SECTION */}
            <section className="relative h-[65vh] flex items-center justify-center text-white text-center">
                <div className="absolute inset-0 z-0">
                    <Image src="/badrum-hero.jpg" alt="Badrumsrenovering Stockholm" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-slate-900/60" />
                </div>
                <div className="relative z-10 px-6 max-w-4xl">
                    <Link href="/" className="inline-flex items-center text-orange-500 mb-6 font-bold hover:underline">
                        <ArrowLeft size={20} className="mr-2" /> Tillbaka
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">Badrumsrenovering</h1>
                    <p className="text-xl text-slate-200 mb-8 italic">Förvandla ditt badrum – tryggt, snyggt och i tid.</p>
                    <a href="#contact" className="bg-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition shadow-xl">Boka Offertförfrågan</a>
                </div>
            </section>

            {/* INTRO & PRISGUIDE */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Totalrenovering & Prisguide</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Att planera en badrumsrenovering i Stockholm kräver kunskap och en pålitlig entreprenör.
                            Vi hjälper dig att förstå kostnaderna, oavsett om du ska renovera ett litet badrum eller göra en komplett totalrenovering.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 font-bold text-orange-600 underline uppercase tracking-tight">
                                <ShieldCheck /> Certifierad för våtrum (BBV/GVK)
                            </div>
                            <p className="text-sm text-slate-500 italic">Vi minskar risken för fuktskador och höjer ditt bostadsvärde genom korrekt utförda tätskikt och VVS-arbeten.</p>
                        </div>
                    </div>

                    <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
                        <h3 className="text-2xl font-bold mb-4 text-orange-500">Pris per kvm</h3>
                        <div className="text-4xl font-black mb-2 italic">5 000 – 9 000 SEK/m²</div>
                        <p className="text-slate-400 text-sm mb-6">Arbetskostnad (efter ROT-avdrag). Exakt pris får du via personlig offert.</p>
                        <ul className="text-xs space-y-2 opacity-80 uppercase font-bold tracking-widest">
                            <li>• Materialval (Kakel/Klinker)</li>
                            <li>• Rördragning & El</li>
                            <li>• Inbyggda möbler & Golvvärme</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* PROCESS STEPS */}
            <section className="py-24 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-16 text-center italic text-orange-600 underline">Vår arbetsprocess</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition hover:shadow-md">
                                <div className="text-orange-600 font-black text-2xl mb-4">0{i + 1}</div>
                                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VÅRA JOBB / REFERENSER */}
            <section className="py-24 px-6 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight">VÅRA JOBB</h2>
                <div className="w-20 h-1.5 bg-orange-600 mx-auto mb-16"></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { area: "Nacka", title: "Badrumsrenovering i Nacka", img: "/jobb-nacka.jpg" },
                        { area: "Täby", title: "Badrumsrenovering i Täby", img: "/jobb-taby.jpg" },
                        { area: "Huddinge", title: "Renovering av badrum, Huddinge", img: "/jobb-huddinge.jpg" },
                        { area: "Solna", title: "Badrumsrenovering i Solna", img: "/jobb-solna.jpg" },
                        { area: "Sundbyberg", title: "Badrumsrenovering i Sundbyberg", img: "/jobb-sundbyberg.jpg" },
                    ].map((job, i) => (
                        <div key={i} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg bg-slate-100">
                            {/* BILD */}
                            <Image
                                src={job.img}
                                alt={job.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* OVERLAY (visas vid hover) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-left">
                                <span className="text-orange-500 font-bold uppercase text-xs tracking-widest mb-2">{job.area}</span>
                                <h3 className="text-white text-xl font-bold">{job.title}</h3>
                            </div>

                            {/* STATISK TEXT (om man inte hovrar, valfritt) */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm group-hover:opacity-0 transition-opacity">
                                <p className="text-sm font-bold text-slate-800">{job.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 bg-slate-900 text-white px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-orange-500">Vanliga frågor (FAQ)</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition hover:border-white/20">
                                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left outline-none">
                                    <span className="font-bold">{faq.q}</span>
                                    <ChevronDown className={`text-orange-500 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`transition-all duration-300 overflow-hidden ${activeFaq === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="p-6 pt-0 text-slate-400 border-t border-white/5 italic">{faq.a}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER CONTACT */}
            <footer id="contact" className="py-20 bg-slate-50 text-center border-t border-slate-200">
                <h2 className="text-3xl font-bold mb-8 italic">Redo för ditt drömbadrum?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a href="tel:0708399749" className="flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition">
                        <Phone size={20} /> 070-839 97 49
                    </a>
                    <a href="mailto:info@byggochrenoverar.se" className="flex items-center justify-center gap-3 border border-slate-300 px-8 py-4 rounded-full font-bold hover:bg-white transition">
                        <Mail size={20} /> E-post
                    </a>
                </div>
                <p className="mt-12 text-slate-400 text-xs uppercase tracking-widest">© 2026 Bygger och Renoverar Stockholm</p>
            </footer>
        </main>
    );
}