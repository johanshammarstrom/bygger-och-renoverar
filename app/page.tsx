import React from 'react';
import Image from 'next/image';
import { Phone, Mail, CheckCircle, ShieldCheck } from 'lucide-react'; // Kräver 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        {/* Bakgrundsbild med Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/construction-bg.jpg" // Lägg din bakgrundsbild här
            alt="Byggarbetsplats"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Innehåll Hero */}
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <div className="mb-6 flex justify-center">
            {/* Logotyp */}
            <Image src="/logo.png" alt="Bygger och Renoverar Logo" width={180} height={80} className="brightness-0 invert" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bygger och Renoverar</h1>
          <p className="text-lg md:text-2xl font-light mb-8 text-slate-200">
            Högkvalitativa byggtjänster och totalentreprenad. <br />
            Vi förverkligar dina drömmar, från attefallshus till badrum.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0708399749" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-md font-bold transition">
              Ring oss nu
            </a>
            <a href="#contact" className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-md font-bold transition">
              Begär offert
            </a>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS - Certifieringar */}
      <section className="bg-slate-100 py-12 border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <CheckCircle className="text-orange-600 mb-2" size={32} />
            <h3 className="font-bold">Certifierad för våtrum</h3>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="text-orange-600 mb-2" size={32} />
            <h3 className="font-bold">Ansvarsförsäkrad</h3>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/byggforetagen-logo.png" alt="Medlem i Byggföretagen" width={120} height={40} className="grayscale hover:grayscale-0 transition" />
            <h3 className="font-bold mt-2">Medlem i Byggföretagen</h3>
          </div>
        </div>
      </section>

      {/* KONTAKTSEKTION */}
      <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Redo att starta ditt projekt?</h2>
            <p className="text-slate-400 mb-8">Vi tar hand om hela kedjan från planering till slutbesiktning.</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-orange-600 p-3 rounded-full"><Phone size={20} /></div>
                <div>
                  <p className="text-sm text-slate-400">Aliaksei Patonich</p>
                  <p className="text-xl font-semibold">070-839 97 49</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-orange-600 p-3 rounded-full"><Mail size={20} /></div>
                <div>
                  <p className="text-sm text-slate-400">E-post</p>
                  <p className="text-xl font-semibold">info@byggochrenoverar.se</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 text-slate-900">
            {/* Här kan du lägga in ett enkelt formulär senare */}
            <h3 className="text-xl font-bold mb-4">Bli kontaktad</h3>
            <p className="text-sm text-slate-600 mb-4">Lämna ditt nummer så ringer vi upp dig inom 24 timmar.</p>
            <input className="w-full border p-3 rounded mb-4" placeholder="Ditt namn" />
            <input className="w-full border p-3 rounded mb-4" placeholder="Telefonnummer" />
            <button className="w-full bg-slate-900 text-white py-3 rounded font-bold">Skicka</button>
          </div>
        </div>
      </section>

    </main>
  );
}