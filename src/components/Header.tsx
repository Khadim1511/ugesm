import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white">
      <div className="flex items-center gap-4">
        <Image
          src="logo.png"
          alt="UGESM Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <h1 className="text-[#F4A460] text-3xl font-bold">UGESM MARRAKECH</h1>
          <p className="text-black text-sm uppercase">Union Générale des Étudiants et Stagiaires Sénégalais au Maroc</p>
        </div>
      </div>
      
      <nav className="flex gap-4">
        <Link href="/publication" className="bg-[#F4A460] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
          PUBLICATION
        </Link>
        <Link href="/bourse-amci" className="bg-[#F4A460] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
          BOURSE AMCI
        </Link>
        <Link href="/a-propos" className="bg-[#F4A460] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
          A PROPOS
        </Link>
      </nav>
    </header>
  )
}
