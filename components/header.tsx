'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    // كنقلبو واش حنا في الصفحة الرئيسية، حيت scrollToSection كتخدم غير تما
    if (window.location.pathname !== '/') {
        window.location.href = '/#' + id;
        return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">APOLLO IPTV</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition font-semibold">Home</button>
            
            {/* زدت رابط الـ Blog هنا */}
            <Link href="/blog" className="text-foreground hover:text-primary transition font-semibold">Blog</Link>
            
            <button onClick={() => scrollToSection('installation')} className="text-foreground hover:text-primary transition font-semibold">Installation</button>
            <button onClick={() => scrollToSection('pricing')} className="text-foreground hover:text-primary transition font-semibold">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition font-semibold">FAQ</button>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/212707711512?text=I%20want%20the%20Free%203%20Hour%20Trial%20Apollo%20IPTV"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition"
            >
              Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition font-semibold">Home</button>
            
            {/* زدت رابط الـ Blog للموبايل */}
            <Link href="/blog" className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition font-semibold">Blog</Link>
            
            <button onClick={() => scrollToSection('installation')} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition font-semibold">Installation</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition font-semibold">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-4 py-2 text-foreground hover:text-primary transition font-semibold">FAQ</button>
            <a
              href="https://wa.me/212707711512?text=I%20want%20the%20Free%203%20Hour%20Trial%20Apollo%20IPTV"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-primary text-white font-bold rounded-lg text-center hover:bg-blue-700 transition mt-4"
            >
              Free Trial
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}