import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="kontakt" className="bg-white py-16 sm:py-24 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold tracking-wide text-[#006900] uppercase mb-1">
            Kontakt
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Hör av dig till oss
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Kontakta oss om du vill veta mer om priser och allmän information om vitvaror och installationer. Vi återkopplar så snart vi kan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded bg-gray-100 text-[#006900] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium block">Telefon</span>
                  <a
                    href="tel:087491640"
                    className="text-base font-semibold text-gray-900 hover:text-[#006900] transition-colors"
                  >
                    08-749 16 40
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded bg-gray-100 text-[#006900] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium block">E-post</span>
                  <a
                    href="mailto:kontoret@langsjoel.se"
                    className="text-base font-semibold text-gray-900 hover:text-[#006900] transition-colors"
                  >
                    kontoret@langsjoel.se
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded bg-gray-100 text-[#006900] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium block">Adress</span>
                  <p className="text-sm font-semibold text-gray-900">
                    Cementvägen 6, 136 50 Jordbro
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Verksamhetsområde: Hela Storstockholm
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded bg-gray-100 text-[#006900] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 font-medium block">Öppettider</span>
                  <p className="text-sm font-semibold text-gray-900">
                    Måndag – Fredag: 08:00 – 14:00
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 leading-relaxed">
              Långsjö El AB är ett auktoriserat elinstallationsföretag med ansvarsförsäkring och F-skatt.
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-lg border border-gray-200 bg-white">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Kontaktformulär
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-6">
                Fyll i formuläret nedan så hör vi av oss till dig.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-gray-50 border border-gray-200 rounded text-center space-y-3">
                  <h4 className="text-base font-bold text-gray-900">
                    Tack för ditt meddelande
                  </h4>
                  <p className="text-sm text-gray-700">
                    Vi har tagit emot din förfrågan och återkommer till dig så snart vi kan.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', message: '' });
                    }}
                    className="inline-block mt-2 text-xs font-semibold text-[#006900] hover:underline"
                  >
                    Skicka ett nytt meddelande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                        Namn *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#006900] focus:ring-1 focus:ring-[#006900]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
                        Telefonnummer *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#006900] focus:ring-1 focus:ring-[#006900]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                      E-postadress *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#006900] focus:ring-1 focus:ring-[#006900]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
                      Meddelande *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Beskriv vad du vill ha hjälp med..."
                      className="w-full px-3.5 py-2.5 rounded border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#006900] focus:ring-1 focus:ring-[#006900] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded bg-[#006900] hover:bg-[#005200] text-white font-semibold text-sm transition-colors"
                  >
                    Skicka meddelande
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
