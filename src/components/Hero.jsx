import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="bg-white py-16 sm:py-24 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold tracking-wide text-[#006900] uppercase">
            Långsjö El AB
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Leverans och installation av vitvaror i Storstockholm
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            Vi har sedan uppstart levererat och installerat vitvaror i Storstockholm och samarbetar med ett antal vitvaruåterförsäljare och grossister. Kontakta oss om du vill veta mer om priser och allmän information om vitvaror och installationer.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-[#006900] hover:bg-[#005200] text-white font-semibold px-6 py-3.5 rounded text-base transition-colors"
            >
              <span>Kontakta oss</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:087491640"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-5 py-3.5 rounded text-base border border-gray-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#006900]" />
              <span>08-749 16 40</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
