'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollToTop from './components/ScrollToTop';
import {
  Phone, Mail, CheckCircle, ShieldCheck,
  Droplets, Utensils, BrickWall,
  Home, TreePine, Paintbrush, HardHat
} from 'lucide-react';

export default function LandingPage() {
  const services = [
    { title: "Badrumsrenovering", desc: "Vi skapar moderna och hållbara badrum med certifierade hantverkare och fast prisoffert.", icon: <Droplets size={32} /> },
    { title: "Köksrenovering", desc: "Få ett funktionellt och stilrent kök, skräddarsytt efter dina behov och önskemål.", icon: <Utensils size={32} /> },
    { title: "Bygga altan & terrass", desc: "Vi designar och bygger altaner som förvandlar din uteplats till ett stilfullt extra vardagsrum.", icon: <TreePine size={32} /> },
    { title: "Nybyggnation & Attefallshus", desc: "Vi bygger moderna hus och nyckelfärdiga Attefallshus med fokus på kvalitet och trygghet.", icon: <Home size={32} /> },
    /* De dolda tjänsterna sparas nedannnn:
    { title: "Väggarbeten", desc: "Vi bygger, renoverar och putsar väggar för att ge ditt hem rätt form, stil och finish.", icon: <BrickWall size={32} /> },
    { title: "Lerputs", desc: "Naturlig skönhet med lerputs. Ge dina väggar ett varmt och levande utseende – även för spisar.", icon: <Paintbrush size={32} /> },
    */
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/construction-bg.jpg" alt="Bygg Stockholm" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">Bygg & Renovering i Stockholm</h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a href="#contact" className="bg-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition">Offertförfrågan</a>
            <a href="#services" className="bg-white/10 backdrop-blur-sm border border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition">Våra tjänster</a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        {/* DET ÄR DENNA DEL DU SKA UPPDATERA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Våra Tjänster</h2>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => {
            const content = (
              <div className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition duration-300 bg-white group h-full cursor-pointer">
                <div className="mb-4 p-3 bg-orange-50 w-fit rounded-lg group-hover:bg-orange-600 group-hover:text-white transition">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>

                {/* Denna rad visar nu "Läs mer" på ALLA kort */}
                <span className="text-orange-600 text-sm font-bold mt-4 block group-hover:translate-x-2 transition-transform">
                  Läs mer →
                </span>
              </div>
            );

            // Din befintliga länk-logik
            let href = "";
            if (s.title === "Nybyggnation & Attefallshus") href = "/nybyggnation";
            if (s.title === "Bygga altan & terrass") href = "/altan";
            if (s.title === "Badrumsrenovering") href = "/badrum";
            if (s.title === "Köksrenovering") href = "/kok";

            return href ? (
              <Link key={i} href={href}>{content}</Link>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24 bg-slate-50 px-4 md:px-6 text-left">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl">

          {/* VÄNSTER DEL (Svart bakgrund) */}
          <div className="p-8 md:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 italic text-orange-500">Kontakta oss</h2>
            <div className="space-y-8">

              {/* TELEFON */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-600 rounded-full shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Aliaksei Patonich</p>
                  <a href="tel:0708399749" className="text-lg md:text-xl font-bold hover:text-orange-500 transition break-words">
                    070-839 97 49
                  </a>
                </div>
              </div>

              {/* E-POST */}
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-600 rounded-full shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">E-post</p>
                  <a href="mailto:info@byggochrenoverar.se" className="text-lg md:text-xl font-bold hover:text-orange-500 transition block truncate sm:overflow-visible sm:whitespace-normal">
                    info@byggochrenoverar.se
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* HÖGER DEL (Vit bakgrund) */}
          <div className="p-8 md:p-12 bg-white">
            <h3 className="text-xl md:text-2xl font-bold mb-6 italic underline decoration-orange-600">Begär offert</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Namn"
                className="w-full p-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-600 text-sm md:text-base"
              />
              <textarea
                placeholder="Beskriv ditt projekt..."
                rows={4}
                className="w-full p-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-600 text-sm md:text-base"
              ></textarea>
              <button
                type="button"
                className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl hover:bg-orange-700 transition shadow-lg active:scale-95"
              >
                Skicka förfrågan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t bg-white flex flex-col items-center px-6">
        <div className="relative h-12 w-48 mb-6 opacity-80 grayscale">
          <Image
            src="/logo.png"
            alt="Bygger och Renoverar Stockholm"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-slate-500 text-xs md:text-sm font-medium text-center max-w-xs leading-relaxed">
          © 2026 Bygger och Renoverar Stockholm. <br className="md:hidden" />
          Alla rättigheter förbehållna.
        </p>
      </footer>
    </main>
  );
}