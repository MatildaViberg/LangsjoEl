import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Startsida', href: '#hero', id: 'hero' },
    { name: 'Vad vi gör', href: '#vad-vi-gor', id: 'vad-vi-gor' },
    { name: 'Om oss', href: '#om-oss', id: 'om-oss' },
    { name: 'Kontakt', href: '#kontakt', id: 'kontakt' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-shadow duration-200 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded bg-[#006900] text-white flex items-center justify-center font-bold text-lg tracking-wider">
              L
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-gray-900 leading-tight">
                LÅNGSJÖ <span className="text-[#006900]">EL</span>
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Installationer i Storstockholm
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-sm font-medium transition-colors py-1 ${
                    isActive
                      ? 'text-[#006900] font-semibold border-b-2 border-[#006900]'
                      : 'text-gray-700 hover:text-[#006900]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Direct Contact & CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:087491640"
              className="text-sm font-semibold text-gray-800 hover:text-[#006900] flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#006900]" />
              <span>08-749 16 40</span>
            </a>

            <a
              href="#kontakt"
              className="bg-[#006900] hover:bg-[#005200] text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
            >
              Kontakta oss
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:087491640"
              className="p-2 text-[#006900] hover:bg-gray-100 rounded"
              aria-label="Ring oss"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded focus:outline-none"
              aria-label="Öppna meny"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded text-base font-medium transition-colors ${
                  isActive
                    ? 'text-[#006900] bg-gray-50 font-semibold'
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 border-t border-gray-200 flex flex-col gap-3">
            <a
              href="tel:087491640"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-800 py-2.5 border border-gray-300 rounded"
            >
              <Phone className="w-4 h-4 text-[#006900]" />
              <span>08-749 16 40</span>
            </a>
            <a
              href="#kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-[#006900] hover:bg-[#005200] text-white font-semibold py-3 rounded text-sm transition-colors"
            >
              Kontakta oss
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
