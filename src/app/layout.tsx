import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UGESM - Union Générale des Étudiants et Stagiaires sénégalais Marocains',
  description: 'Site officiel de l\'UGESM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
