'use client'

import MainLayout from '@/components/layouts/MainLayout'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden mb-12">
          <Image
            src="/images/p1.png"
            alt="UGESM Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl sm:text-5xl font-bold text-center px-4">
              À Propos de l&apos;UGESM Marrakech
            </h1>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#f1af40] mb-4">Notre Mission</h2>
            <p className="text-gray-700">
            L’union générale des étudiants et stagiaires sénégalais au Maroc, créée en mai 2004,
             s’appuie sur une vision collective, où la force réside dans les initiatives et réalisations communes. 
             Elle met en avant l’importance de la contribution de chacun pour surmonter les défis avec efficacité.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#f1af40] mb-4">Notre Vision</h2>
            <p className="text-gray-700">
            Pour répondre aux besoins des étudiants et stagiaires sénégalais au Maroc, 
            l’organisation a mis en place un site internet. Cet outil vise à accompagner 
            ces derniers tout au long de leur parcours, offrant un soutien avant, pendant, 
            et après leur séjour dans le royaume
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-center mb-12">BUREAU 2024/2025</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                name: 'CISS Rokhaya',
                role: 'Secrétaire Général',
                image: '/images/team/president.jpg'
              },
              {
                name: 'NIANG Youssoufa',
                role: 'Secrétaire Général Adjoints',
                image: '/images/team/vice.jpg'
              }
            ].map((member, index) => (
              <div key={index} className="group relative overflow-hidden bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-80 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#f1af40] font-medium">{member.role}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#f1af40] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Les Autres Membres Du Bureau</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Académique et Social */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-[#f1af40] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800">Académique et Social</h3>
              </div>
              <div className="space-y-2 pl-11">
                <p className="text-gray-600">THIOUNE Gora</p>
                <p className="text-gray-600">DIALLO Amadou</p>
              </div>
            </div>

            {/* Relations Extérieures */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-[#f1af40] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800">Relations Extérieures</h3>
              </div>
              <div className="space-y-2 pl-11">
                <p className="text-gray-600">DIALLO Mamadou</p>
                <p className="text-gray-600">SEYDI Mansour</p>
                <p className="text-gray-600">TANDIANG Marieme Soda</p>
              </div>
            </div>

            {/* Communication */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-[#f1af40] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800">Communication</h3>
              </div>
              <div className="space-y-2 pl-11">
                <p className="text-gray-600">SEYDI Ibrahima</p>
                <p className="text-gray-600">THIANE Saliou</p>
                <p className="text-gray-600">BOYE Cheikh Ahmadou</p>
                <p className="text-gray-600">SEYE Khadim</p>
              </div>
            </div>

            {/* Finances */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-[#f1af40] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800">Finances</h3>
              </div>
              <div className="space-y-2 pl-11">
                <p className="text-gray-600">DIA Sokhna Astou</p>
                <p className="text-gray-600">TOURE Serigne Abdoulaye</p>
                <p className="text-gray-600">Sarr Amadou</p>
              </div>
            </div>

            {/* Culturel */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-[#f1af40] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800">Culturel</h3>
              </div>
              <div className="space-y-2 pl-11">
                <p className="text-gray-600">MALOU Jean Francois</p>
                <p className="text-gray-600">CISSE khadija</p>
                <p className="text-gray-600">DIOUF Malika</p>
              </div>
            </div>

            {/* Commission Féminine */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-[#f1af40] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M12 2a2 2 0 012 2c0 .74-.4 1.38-1 1.72V7h2a1 1 0 011 1v1h3a1 1 0 011 1v3h1a2 2 0 110 4h-1v3a1 1 0 01-1 1h-3v1a1 1 0 01-1 1h-2v1.28c.6.34 1 .98 1 1.72a2 2 0 01-4 0c0-.74.4-1.38 1-1.72V20H8a1 1 0 01-1-1v-1H4a1 1 0 01-1-1v-3H2a2 2 0 110-4h1V7a1 1 0 011-1h3V5a1 1 0 011-1h2V3.72A2 2 0 0112 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800">Commission Féminine</h3>
              </div>
              <div className="space-y-2 pl-11">
                <p className="text-gray-600">CISSE Rokhy</p>
              </div>
            </div>

            {/* Sport */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-[#f1af40] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800">Sport</h3>
              </div>
              <div className="space-y-2 pl-11">
                <p className="text-gray-600">NIASSE Mouhamed</p>
                <p className="text-gray-600">Diouf Fallou</p>
              </div>
            </div>

            {/* Organisation */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-[#f1af40] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800">Organisation</h3>
              </div>
              <div className="space-y-2 pl-11">
                <p className="text-gray-600">GUEYE Alssane</p>
                <p className="text-gray-600">THIAW Cheikh Tidiane</p>
                <p className="text-gray-600">DIOUF Khadim</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  )
}
