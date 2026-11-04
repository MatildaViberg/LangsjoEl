import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 text-sm text-gray-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-gray-200">

          <div>
            <span className="text-base font-bold text-gray-900 block">
              LÅNGSJÖ <span className="text-[#006900]">EL AB</span>
            </span>
            <p className="text-xs text-gray-500 mt-1">
              Leverans och installation av vitvaror i Storstockholm
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <a href="#hero" className="hover:text-[#006900] transition-colors">
              Startsida
            </a>
            <a href="#vad-vi-gor" className="hover:text-[#006900] transition-colors">
              Vad vi gör
            </a>
            <a href="#om-oss" className="hover:text-[#006900] transition-colors">
              Om oss
            </a>
            <a href="#kontakt" className="hover:text-[#006900] transition-colors">
              Kontakt
            </a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            Cementvägen 6, 136 50 Jordbro • Tel: <a href="tel:087491640" className="hover:text-gray-900">08-749 16 40</a> • <a href="mailto:kontoret@langsjoel.se" className="hover:text-gray-900">kontoret@langsjoel.se</a>
          </div>
          <div>
            © {new Date().getFullYear()} Poducerad av Wiberg&Co. Långsjö El AB etbl. 2001.
          </div>
        </div>
      </div>
    </footer>
  );
}
