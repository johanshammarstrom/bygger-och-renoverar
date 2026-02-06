'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    // Ditt unika Formspree-ID
    const [state, handleSubmit] = useForm("mjgebdpv");

    if (state.succeeded) {
        return (
            <div className="bg-orange-50 p-10 rounded-3xl border border-orange-200 text-center animate-in fade-in zoom-in duration-300">
                <h3 className="text-2xl font-bold text-orange-600 mb-2 italic">Tack för din förfrågan!</h3>
                <p className="text-slate-600 font-medium">Vi har tagit emot dina uppgifter och återkopplar så snart vi kan.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Namn</label>
                    <input name="name" type="text" required placeholder="Ditt fullständiga namn"
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-orange-500 focus:bg-white outline-none transition-all shadow-sm text-slate-900" />
                </div>
                <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Telefon</label>
                    <input name="phone" type="tel" required placeholder="070-000 00 00"
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-orange-500 focus:bg-white outline-none transition-all shadow-sm text-slate-900" />
                </div>
            </div>

            <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">E-post</label>
                <input name="email" type="email" required placeholder="namn@företag.se"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-orange-500 focus:bg-white outline-none transition-all shadow-sm text-slate-900" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
            </div>

            <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Typ av projekt</label>
                <select name="service" className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-orange-500 focus:bg-white outline-none transition-all shadow-sm appearance-none text-slate-900">
                    <option value="ej-valt">Välj tjänst...</option>
                    <option value="kök">Köksrenovering</option>
                    <option value="altan">Altan / Uteplats</option>
                    <option value="badrum">Badrum</option>
                    <option value="nybyggnation">Nybyggnation / Attefall</option>
                    <option value="annat">Övrigt</option>
                </select>
            </div>

            <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">Beskrivning</label>
                <textarea name="message" required rows={4} placeholder="Skriv lite kort om vad du vill ha hjälp med..."
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-orange-500 focus:bg-white outline-none transition-all shadow-sm text-slate-900" />
            </div>

            <button type="submit" disabled={state.submitting}
                className="w-full bg-orange-600 text-white font-black py-5 rounded-2xl hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-200 uppercase tracking-widest disabled:opacity-50 active:scale-[0.98]">
                {state.submitting ? 'Skickar...' : 'Skicka Offertförfrågan'}
            </button>
        </form>
    );
}