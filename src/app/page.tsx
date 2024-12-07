import Image from 'next/image'
import Link from 'next/link'
import { posts } from '@/data/posts'
import PostCard from '@/components/posts/PostCard'
import MainLayout from '@/components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/home/p1.png"
            alt="UGESM Marrakech"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bienvenue à l'UGESM Marrakech
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-8">
              Union Générale des Étudiants et Stagiaires sénégalais au Maroc
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="bg-[#f1af40] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                En savoir plus
              </Link>
              <Link
                href="/actualites"
                className="bg-white text-[#f1af40] px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Actualités
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Recent Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Dernières Actualités</h2>
            <Link
              href="/actualites"
              className="text-[#f1af40] hover:text-orange-600 font-semibold"
            >
              Voir tout →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Guide du Nouvel Étudiant
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Grâce à l'engagement de notre bureau, nous vous proposons un guide complet pour toutes vos démarches administratives durant votre séjour au Maroc. Conscients des défis auxquels les étudiants font face, nous mettons à votre disposition toutes les informations nécessaires, sans besoin de déplacement ni frais supplémentaires pour les transferts de documents.
            </p>
            <Link 
              href="/guide"
              className="inline-block bg-[#f1af40] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Consulter le Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Bourse AMCI Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Bourse AMCI
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Vous êtes étudiant sénégalais au Maroc ? Accédez à toutes les informations nécessaires pour récupérer votre bourse AMCI et suivez les étapes pour compléter vos démarches administratives.
            </p>
            <Link 
              href="/bourse-amci"
              className="inline-block bg-[#f1af40] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all"
            >
              Récupérer votre bourse
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Principes 
            </h2>
            <p className="text-xl text-gray-600">
              Travailler, encore travailler, toujours travailler.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Soutien aux Étudiants',
                description: 'Même si nous sommes hors de notre pays, nous continuons de vivre avec nos valeurs',
                icon: '/images/home/icon1.png'
              },
              {
                title: 'Vie Étudiante',
                description: 'Organisation d\'événements culturels et sportifs pour la communauté',
                icon: '/images/home/icon2.png'
              },
              {
                title: 'Information & Orientation',
                description: 'Conseils sur les bourses, le logement et la vie à Marrakech',
                icon: '/images/home/icon3.png'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl 
                         transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 mb-4 relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nos Sponsors
            </h2>
            <p className="text-xl text-gray-600">
              Ils nous font confiance et nous soutiennent
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="w-40 h-24 relative hover:scale-105 transition-transform">
              <Image
                src="/images/sponsors/sponsor1.png"
                alt="Sponsor 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-40 h-24 relative hover:scale-105 transition-transform">
              <Image
                src="/images/sponsors/sponsor2.png"
                alt="Sponsor 2"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-40 h-24 relative hover:scale-105 transition-transform">
              <Image
                src="/images/sponsors/sponsor3.png"
                alt="Sponsor 3"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-40 h-24 relative hover:scale-105 transition-transform">
              <Image
                src="/images/sponsors/sponsor4.png"
                alt="Sponsor 4"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}