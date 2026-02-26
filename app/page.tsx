'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollToTop from './components/ScrollToTop';
import ContactForm from './components/ContactForm';
import {
  Phone, Mail, CheckCircle, ShieldCheck,
  Droplets, Utensils, Home, TreePine
} from 'lucide-react';

export default function LandingPage() {
  // Uppdaterad lista för att undvika TypeScript-fel vid deploy
  const services = [
    { title: "Badrumsrenovering", desc: "Vi skapar moderna och hållbara badrum med certifierade hantverkare och fast prisoffert.", icon: Droplets, href: "/badrum" },
    { title: "Köksrenovering", desc: "Få ett funktionellt och stilrent kök, skräddarsytt efter dina behov och önskemål.", icon: Utensils, href: "/kok" },
    { title: "Bygga altan & terrass", desc: "Vi designar och bygger altaner som förvandlar din uteplats till ett stilfullt extra vardagsrum.", icon: TreePine, href: "/altan" },
    { title: "Nybyggnation & Attefallshus", desc: "Vi bygger moderna hus och nyckelfärdiga Attefallshus med fokus på kvalitet och trygghet.", icon: Home, href: "/nybyggnation" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <ScrollToTop />

      {/* FLYTANDE HEADER MED LOGO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="relative h-10 w-48 transition hover:opacity-80">
            <Link href="/">
              <Image src="/logo.png" alt="Bygger och Renoverar Stockholm" fill className="object-contain" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600">
            <a href="#services" className="hover:text-orange-600 transition">Tjänster</a>
            <a href="#about" className="hover:text-orange-600 transition">Varför oss?</a>
            <a href="#contact" className="bg-orange-600 text-white px-6 py-2.5 rounded-full hover:bg-orange-700 transition shadow-md active:scale-95">
              Få Offert
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/construction-bg.jpg" alt="Bygg Stockholm" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center mt-20">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 italic tracking-tighter">
            Bygg & Renovering i Stockholm
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto italic text-balance">
            Kvalitet, trygghet och personlig service för ditt nästa hemprojekt.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a href="#contact" className="bg-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition shadow-xl active:scale-95">
              Boka Offertförfrågan
            </a>
            <a href="#services" className="bg-white/10 backdrop-blur-sm border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition">
              Våra tjänster
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 italic uppercase tracking-tighter text-slate-900">Våra Tjänster</h2>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {services.map((s, i) => (
            <Link key={i} href={s.href}>
              <div className="p-8 border border-slate-100 rounded-[2rem] hover:shadow-2xl transition duration-500 bg-white group h-full cursor-pointer relative overflow-hidden">
                <div className="mb-6 p-4 bg-orange-50 w-fit rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <s.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 italic text-slate-800">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{s.desc}</p>
                <span className="text-orange-600 text-sm font-black uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Läs mer <span className="text-xl">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* INFO & CONTACT SUMMARY */}
      <section id="about" className="py-20 bg-slate-900 text-white px-6 text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic text-orange-500 uppercase tracking-tight">Varför välja oss?</h2>
            <div className="space-y-6">
              {[
                "Certifierade hantverkare för alla moment",
                "Fast pris och tydlig tidsplan",
                "Totalentreprenad – vi sköter allt",
                "Ansvarsförsäkring och lämnad garanti"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-lg font-medium">
                  <CheckCircle className="text-orange-500 shrink-0" size={24} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 bg-white/5 p-10 rounded-[3rem] border border-white/10 shadow-inner">
            <h3 className="text-2xl font-bold italic mb-4 uppercase tracking-tighter">Snabbkontakt</h3>

            <div className="flex items-center gap-6">
              <div className="p-4 bg-orange-600 rounded-2xl shadow-lg shadow-orange-600/20 transition hover:scale-105">
                <Phone size={28} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] mb-1 text-left">Ring Aliaksei</p>
                <a href="tel:0790187124" className="text-2xl font-bold hover:text-orange-500 transition tracking-tighter block text-left">079-018 71 24</a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="p-4 bg-orange-600 rounded-2xl shadow-lg shadow-orange-600/20 transition hover:scale-105">
                <Mail size={28} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em] mb-1 text-left">Skicka förfrågan</p>
                <a
                  href="#contact"
                  className="text-xl font-bold hover:text-orange-500 transition border-b border-transparent hover:border-orange-500 pb-1 italic block text-left"
                >
                  Öppna kontaktformulär
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-32 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter italic text-slate-900 leading-none">
            Boka en kostnadsfri offert
          </h2>
          <p className="text-slate-500 mb-16 text-lg max-w-2xl mx-auto italic leading-relaxed">
            Vi kommer ut till dig i hela Stockholm, mäter och ger ett fast prisförslag.
            Fyll i dina uppgifter nedan så hörs vi inom kort!
          </p>

          <ContactForm />

          <div className="mt-16 flex flex-wrap justify-center gap-12 text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">
            <div className="flex items-center gap-2 transition hover:text-orange-600"><ShieldCheck size={16} className="text-orange-500" /> Snabba svar</div>
            <div className="flex items-center gap-2 transition hover:text-orange-600"><ShieldCheck size={16} className="text-orange-500" /> Kostnadsfritt besök</div>
            <div className="flex items-center gap-2 transition hover:text-orange-600"><ShieldCheck size={16} className="text-orange-500" /> Fasta priser</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t bg-white flex flex-col items-center px-6">
        <div className="relative h-14 w-56 mb-8 transition hover:scale-105 duration-300">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div>
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em] text-center leading-relaxed opacity-60">
          © 2026 Bygger och Renoverar Stockholm. <br className="md:hidden" />
          Alla rättigheter förbehållna.
        </p>
      </footer>
    </main>
  );
}