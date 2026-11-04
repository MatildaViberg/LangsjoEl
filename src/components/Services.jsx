import React from 'react';
import { Refrigerator, Zap, Droplets, Truck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Vitvaruinstallationer',
      description:
        'Inkoppling av spishäll, ugn, kyl, frys, diskmaskin, tvättmaskin och torktumlare. Alltid fackmannamässigt utfört.',
      icon: Refrigerator,
    },
    {
      title: 'Elinstallationer',
      description:
        'Auktoriserade elarbeten för privatpersoner, bostadsrättsföreningar och företag. Från eluttag och belysning till elcentraler.',
      icon: Zap,
    },
    {
      title: 'Vattenanslutningar',
      description:
        'Säker inkoppling av vatten och avlopp för diskmaskin och tvättmaskin med godkända kopplingar och läckageskydd.',
      icon: Droplets,
    },
    {
      title: 'Leverans & bortforsling',
      description:
        'I samarbete med återförsäljare och grossister bistår vi med leverans, inbärning samt bortforsling av gamla maskiner för återvinning.',
      icon: Truck,
    },
  ];

  return (
    <section id="vad-vi-gor" className="bg-white py-16 sm:py-20 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold tracking-wide text-[#006900] uppercase mb-1">
            Våra tjänster
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Vad vi gör
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Vi utför alla typer av vitvaru-, el- och vatteninstallationer i Storstockholm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-200 bg-white"
              >
                <div className="w-10 h-10 rounded bg-[#006900]/10 text-[#006900] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-gray-700">
            Vill du veta mer om priser eller har du frågor om en installation?
          </p>
          <a
            href="#kontakt"
            className="text-sm font-semibold text-[#006900] hover:text-[#005200] underline underline-offset-4 flex-shrink-0"
          >
            Kontakta oss för priser och information →
          </a>
        </div>

      </div>
    </section>
  );
}
