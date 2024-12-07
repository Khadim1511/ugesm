'use client'

import { useState } from 'react'
import MainLayout from '@/components/layouts/MainLayout'
import Image from 'next/image'

export default function BourseAMCIPage() {
  const [matricule, setMatricule] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleRedirectToCesam = () => {
    window.open('https://cesamcentrale.org/code-de-bourse/', '_blank')
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#f1af40] to-orange-500 rounded-2xl p-8 mb-12 text-white">
          <h1 className="text-4xl font-bold mb-4">Code de Bourse AMCI</h1>
          <p className="text-xl">
            Accédez à votre code de bourse AMCI en toute simplicité. Un service offert par l'UGESM pour faciliter vos démarches.
          </p>
        </div>

        {/* Instructions Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Comment récupérer votre code ?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#f1af40] rounded-full flex items-center justify-center text-white font-bold">1</span>
                <span className="ml-4">Cliquez sur le bouton "Récupérer Code Bourse AMCI" ci-dessous</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#f1af40] rounded-full flex items-center justify-center text-white font-bold">2</span>
                <span className="ml-4">Vous serez redirigé vers le site officiel CESAM</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#f1af40] rounded-full flex items-center justify-center text-white font-bold">3</span>
                <span className="ml-4">Entrez votre matricule sur le site CESAM</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-[#f1af40] rounded-full flex items-center justify-center text-white font-bold">4</span>
                <span className="ml-4">Votre code de bourse s'affichera immédiatement</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Informations importantes</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f1af40] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                Le code change chaque 2 mois
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f1af40] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                Conservez votre code en lieu sûr
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f1af40] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                Le code est personnel et confidentiel
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#f1af40] mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                En cas de problème, contactez l'AMCI
              </li>
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={handleRedirectToCesam}
            className="bg-[#f1af40] hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105"
          >
            Récupérer Code Bourse AMCI
            <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center text-gray-600">
          <p>Besoin d'aide ? Contactez le support UGESM :</p>
          <p className="font-semibold">ugesmmarrakech@gmail.com</p>
        </div>
      </div>
    </MainLayout>
  )
}
