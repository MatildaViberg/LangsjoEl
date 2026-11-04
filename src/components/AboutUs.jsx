import React from 'react';

export default function AboutUs() {
  return (
    <section id="om-oss" className="bg-white py-16 sm:py-20 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold tracking-wide text-[#006900] uppercase">
            Om Långsjö El AB
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Ett etablerat installationsföretag i Storstockholm
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            <p>
              Långsjö El AB är ett installationsföretag med lång erfarenhet av leverans och installation av vitvaror. Vi samarbetar nära med ett antal etablerade vitvaruåterförsäljare och grossister för att ge våra kunder en trygg och smidig helhetslösning.
            </p>

            <p>
              Vårt verksamhetsområde omfattar hela Storstockholm. Vi utför uppdrag åt privatpersoner, bostadsrättsföreningar, fastighetsbolag och företag. Oavsett om det gäller byte av en enstaka diskmaskin eller en komplett installation av vitvaror i samband med renovering, utförs arbetet med fackmannamässig noggrannhet.
            </p>

            <p className="text-gray-600 text-base">
              Företaget är auktoriserat för elinstallationer och följer gällande branschregler för både el och vattenanslutningar. Vi värdesätter personlig kontakt, punktlighet och tydliga överenskommelser.
            </p>
          </div>

          {/* Key Facts Summary in simple, quiet text list */}
          <div className="pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
            <div>
              <span className="font-semibold text-gray-900 block">Verksamhetsområde</span>
              <span>Storstockholm och kranskommuner</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900 block">Behörighet</span>
              <span>Auktoriserat elinstallationsföretag</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900 block">Kunder</span>
              <span>Privatpersoner, företag, BRF & återförsäljare</span>
            </div>
            <div>
              <span className="font-semibold text-gray-900 block">Samarbeten</span>
              <span>Vitvaruåterförsäljare och grossister</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
