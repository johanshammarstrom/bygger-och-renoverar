'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importera Imageeeeeeeee
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Ändra bakgrundsfärg när man skrollar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Hem', href: '/' },
        { name: 'Nybyggnation', href: '/nybyggnation' },
        { name: 'Altan', href: '/altan' },
        { name: 'Badrum', href: '/badrum' },
        { name: 'Kök', href: '/kok' },
        { name: 'Kontakt', href: '/#contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* LOGO - Bild istället för text */}
                <Link href="/" className="relative h-10 w-40 md:h-12 md:w-52 transition-all duration-300">
                    <Image
                        src="/logo.png"
                        alt="Bygger och Renoverar Stockholm"
                        fill
                        className={`object-contain transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'
                            }`}
                        priority
                    />
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-bold text-xs uppercase tracking-widest hover:text-orange-600 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="tel:0708399749" className="bg-orange-600 text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-orange-700 transition whitespace-nowrap">
                        <Phone size={16} /> 070-839 97 49
                    </a>
                </nav>

                {/* MOBILE MENU BUTTON */}
                <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
                    ) : (
                        <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* MOBILE NAV OVERLAY */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 flex flex-col items-center gap-6 lg:hidden border-t">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-slate-900 font-bold uppercase tracking-widest hover:text-orange-600 transition"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="tel:079-018 71 24" className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2">
                        <Phone size={18} /> Ring oss
                    </a>
                </div>
            )}
        </header>
    );
}