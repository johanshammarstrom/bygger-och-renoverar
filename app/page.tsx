import React from 'react';
import Image from 'next/image';
import {
  Phone, Mail, CheckCircle, ShieldCheck,
  Hammer, Droplets, Utensils, BrickWall,
  Home, TreePine, Paintbrush, HardHat,
  ChevronRight
} from 'lucide-react';

export default function LandingPage() {
  const services = [
    { title: "Badrumsrenovering", desc: "Vi skapar moderna och hållbara badrum med certifierade hantverkare och fast prisoffert.", icon: <Droplets className="text-orange-600" /> },
    { title: "Köksrenovering", desc: "Få ett funktionellt och stilrent kök, skräddarsytt efter dina behov och önskemål.", icon: <Utensils className="text-orange-600" /> },
    { title: "Väggarbeten", desc: "Vi bygger, renoverar och putsar väggar för att ge ditt hem rätt form, stil och finish.", icon: <BrickWall className="text-orange-600" /> },
    { title: "Bygga altan & terrass", desc: "Vi designar och bygger altaner som förvandlar din uteplats till ett stilfullt extra vardagsrum.", icon: <TreePine className="text-orange-600" /> },
    { title: "Lerputs", desc: "Naturlig skönhet med lerputs. Ge dina väggar ett varmt och levande utseende – även för spisar.", icon: <Paintbrush className="text-orange-600" /> },
    { title: "Nybyggnation & Attefallshus", desc: "Vi bygger moderna hus och nyckelfärdiga Attefallshus med fokus på kvalitet och trygghet.", icon: <Home className="text-orange-600" /> },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/construction-bg.jpg"
            alt="Byggarbetsplats Stockholm"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Bygg & Renovering i Stockholm <br />
            <span className="text-orange-500 text-3xl md:text-5xl tracking-wide uppercase block mt-2">Bygger och Renoverar</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-slate-100 max-w-3xl mx-auto leading-relaxed">
            Vi utför allt från badrums- och köksrenovering till altanbyggen, tillbyggnader och nybyggnation.
            Våra certifierade hantverkare levererar kvalitet i Stockholm med omnejd.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg transition shadow-lg">
              Offertförfrågan
            </a>
            <a href="#services" className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold text-lg transition">
              Våra tjänster
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-slate-100 py-8 border-b">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-bold uppercase tracking-widest text-slate-600">
          <div className="flex items-center gap-2"><CheckCircle size={20} className="text-orange-600" /> Certifierad för våtrum</div>
          <div className="flex items-center gap-2"><ShieldCheck size={20} className="text-orange-600" /> Ansvarsförsäkrad</div>
          <div className="flex items-center gap-2"><HardHat size={20} className="text-orange-600" /> Totalentreprenad</div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Våra Tjänster</h2>
          <div className="w-20 h-1.5 bg-orange-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition duration-300 bg-white group">
              <div className="mb-4 p-3 bg-orange-50 w-fit rounded-lg group-hover:bg-orange-600 group-hover:text-white transition">
                {React.cloneElement(s.icon as React.ReactElement, { size: 32, className: "group-hover:text-white" })}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US - 3 COLUMNS */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Kvalitet</h3>
            <p className="text-slate-400">Vi säkerställer kvalitet genom noggrannhet, professionalism och skräddarsydda lösningar som uppfyller dina unika behov.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Flexibilitet</h3>
            <p className="text-slate-400">Alla jobb anpassas efter dina specifika behov och önskemål. Vi skapar precis efter era önskemål.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-500">Nöjd kund-garanti</h3>
            <p className="text-slate-400">Vi siktar alltid på att nå alla förväntningar och åtgärda eventuella bekymmer så att varje kund är 100% nöjd.</p>
          </div>
        </div>
      </section>

      {/* DEEP DIVE TEXT SECTION */}
      <section className="py-24 px-6 max-w-4xl mx-auto leading-relaxed">
        <h2 className="text-3xl font-bold mb-6">Bygg & Renovering i Stockholm med omnejd</h2>
        <p className="text-lg text-slate-700 mb-8">
          Att bygga om eller renovera sitt hem är ett av de största projekten man kan ta sig an.
          <strong> Bygger och Renoverar</strong> är en erfaren byggfirma som hjälper privatpersoner och företag
          i Stockholm att förverkliga sina byggdrömmar med kvalitet och trygghet.
        </p>

        <div className="bg-orange-50 p-8 rounded-2xl border-l-4 border-orange-600 mb-12">
          <h3 className="text-xl font-bold mb-4 italic">Helhetsansvar från idé till färdigt resultat</h3>
          <p>Vi arbetar som totalentreprenör. Det betyder att du har <strong>en kontaktperson</strong> och en tydlig tidsplan, oavsett projektets storlek.</p>
        </div>

        <h3 className="text-2xl font-bold mb-6 text-center">Vårt arbetssätt i fem steg</h3>
        <div className="space-y-4 mb-16">
          {[
            "Kostnadsfri rådgivning – vi besöker platsen och diskuterar stil och material.",
            "Detaljerad offert – transparent kostnadsberäkning utan dolda avgifter.",
            "Noggrann planering – ritningar, materialplan och bygglovshandlingar.",
            "Utförande med kvalitet – certifierade hantverkare enligt svenska standarder.",
            "Slutbesiktning och garanti – vi avslutar först när du är helt nöjd."
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <span className="bg-orange-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">{i + 1}</span>
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
            <div className="p-12 bg-slate-900 text-white">
              <h2 className="text-3xl font-bold mb-8">Kontakta oss</h2>
              <p className="mb-8 text-slate-400">Vi finns här för dig! Kontakta oss för en kostnadsfri offert eller rådgivning.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-600 rounded-full"><Phone size={24} /></div>
                  <div>
                    <p className="text-sm text-slate-400">Aliaksei Patonich</p>
                    <a href="tel:0708399749" className="text-xl font-bold hover:text-orange-500 transition">070-839 97 49</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-600 rounded-full"><Mail size={24} /></div>
                  <div>
                    <p className="text-sm text-slate-400">E-post</p>
                    <a href="mailto:info@byggochrenoverar.se" className="text-xl font-bold hover:text-orange-500 transition">info@byggochrenoverar.se</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12">
              <h3 className="text-2xl font-bold mb-6">Begär offert</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Namn" className="w-full p-4 bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600" />
                <input type="email" placeholder="E-post" className="w-full p-4 bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600" />
                <textarea placeholder="Beskriv ditt projekt..." rows={4} className="w-full p-4 bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-600"></textarea>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition shadow-lg">Skicka förfrågan</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t text-center text-slate-500 text-sm">
        <p>© 2026 Bygger och Renoverar Stockholm. Alla rättigheter förbehållna.</p>
      </footer>
    </main>
  );
}