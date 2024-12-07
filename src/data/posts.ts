// Types
export interface Attachment {
  type: 'image' | 'video' | 'pdf'
  url: string
  title: string
  thumbnailUrl?: string
}

export interface Author {
  name: string
  image: string
  role?: string
  linkedin?: string
  twitter?: string
  email?: string
}

export interface Post {
  id: string
  title: string
  content: string
  excerpt: string
  imageUrl: string
  date: string
  category: 'Actualités' | 'Événements' | 'Blog' | 'Vidéos'
  videoUrl?: string
  attachments?: Attachment[]
  author?: Author
  likes: number
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Nemekou TOUR 2024',
    excerpt: 'L’UGESM remercie les étudiants pour leur engagement lors du Nemekou Tour. Leurs suggestions guideront la réalisation d’un programme innovant et adapté à leurs besoins',
    content: `
     Le Bureau Exécutif de l’Union Générale des Étudiants et Stagiaires Sénégalais au Maroc (UGESM) souhaite exprimer sa profonde gratitude pour l’accueil chaleureux, l’engagement et la participation active dont vous avez fait preuve lors de l’activité Nemekou Tour.

Ces moments de partage et d’échange ont été riches en enseignements et nous ont permis de mieux comprendre vos attentes, vos préoccupations et vos aspirations. Vos propositions et suggestions, si pertinentes et constructives, sont un véritable guide pour nous. Soyez assurés qu’elles seront minutieusement étudiées et intégrées dans la mise en œuvre du programme que nous vous avons présenté.

Votre mobilisation et votre soutien renforcent notre conviction qu’ensemble, nous pouvons construire une UGESM plus innovante, plus inclusive et à l’écoute de chacun de ses membres.

Merci encore pour votre engagement et votre contribution précieuse à cette dynamique collective. Continuons à avancer main dans la main vers des objectifs communs.

Ensemble, pour une UGESM innovante !
    `,
    imageUrl: '/images/posts/nt.jpg',
    date: '2024-12-05',
    category: 'Événements',
    attachments: [
      {
        type: 'video',
        url: 'https://www.instagram.com/reel/DC4wvnjNR9A/?igsh=MWwwaTc2MDJkbG8zNw==',
        title: 'Video Nemekou tour 2024'
      },

    ],
    likes: 0
  }  
]
