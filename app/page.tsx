'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // För snygga animationer
import { ArrowRight, Droplets, Utensils, Home, TreePine } from 'lucide-react';

export default function UpgradedLandingPage() {
  const services = [
    { title: "Badrum", desc: "Certifierad lyx i våtrum.", icon: <Droplets />, size: "md:col-span-2", img: "/badrum-bg.jpg" },
    { title: "Kök", desc: "Ditt hems hjärta, optimerat.", icon: <Utensils />, size: "md:col-span-1", img: "/kok-bg.jpg" },
    { title: "Altan", desc: "Svensk sommar på din terrass.", icon: <TreePine />, size: "md:col-span-1", img: "/altan-bg.jpg" },
    { title: "Nybygge", desc: "Från vision till verklighet.", icon: <Home />, size: "md:col-span-2", img: "/nybygge-bg.jpg" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#0f172a]">

      {/* 1. MINIMALISTISK PREMIUM HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-black text-xl tracking-tighter italic">
            S<span className="text-orange-600">.</span>RENOVERING
          </div>
          <nav className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.2em]">
            <a href="#services" className="hover:text-orange-600 transition">Tjänster</a>
            <a href="#about" className="hover:text-orange-600 transition">Om oss</a>
            <a href="#contact" className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-black transition shadow-lg shadow-orange-200">
              Boka Offert
            </a>
          </nav>
        </div>
      </header>

      {/* 2. CINEMATIC HERO SECTION */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image src="/construction-bg.jpg" alt="Bygg" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl w-full px-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Stockholms Ledande Entreprenad
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
              VI BYGGER <br /> <span className="text-orange-600">DRÖMMAR.</span>
            </h1>
            <p className="text-slate-300 text-lg mb-10 font-light leading-relaxed">
              Vi kombinerar skandinavisk minimalism med kompromisslös kvalitet.
              Totalentreprenad för dig som kräver det lilla extra.
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-600 text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition transform active:scale-95">
                Våra Projekt
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. BENTO GRID SERVICES */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">Vad vi gör<span className="text-orange-600">.</span></h2>
          <div className="h-1.5 w-20 bg-orange-600 mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={i}
              className={`${s.size} group relative h-[400px] rounded-[2.5rem] overflow-hidden bg-slate-100`}
            >
              {/* Bakgrundsbild som syns vid hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-orange-600/80 mix-blend-multiply z-10" />
                {/* Här lägger du s.img i en Image component */}
                <div className="bg-slate-300 w-full h-full" />
              </div>

              <div className="relative z-20 p-10 h-full flex flex-col justify-between">
                <div className="p-4 bg-white w-fit rounded-2xl text-orange-600 shadow-sm group-hover:bg-transparent group-hover:text-white group-hover:border group-hover:border-white transition-all">
                  {React.cloneElement(s.icon as React.ReactElement, { size: 32 })}
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors tracking-tight">{s.title}</h3>
                  <p className="text-slate-500 group-hover:text-white/80 transition-colors mb-6 font-medium italic">{s.desc}</p>
                  <Link href={`/${s.title.toLowerCase()}`} className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest text-orange-600 group-hover:text-white">
                    Läs mer <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}