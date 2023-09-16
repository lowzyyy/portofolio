export type TProjectItem = {
  title: string
  technologies: string[]
  image: string
  text: string
  link: string
}

export const projects: TProjectItem[] = [
  {
    title: 'Solo mining pool',
    technologies: ['ReactJS', 'NextJS', 'ChartJS', 'FB Realtime DB'],
    image: '../../../assets/img/projectImgs/solopool.png',
    text: "This is my first project, displaying hashrate from a private solopool on Alephium. The graph update time interval is 10 minutes. Data is logged from the backend to Firebase's realtime database.",
    link: 'https://alph-solopool-nextjs.vercel.app/'
  },
  {
    title: 'Smederevo weather',
    technologies: ['ReactJS', 'NextJS', 'Tailwind', 'Puppeteer', 'ExpressJS'],
    image: '../../../assets/img/projectImgs/sd-weather.png',
    text: 'Personal project that displays current weather and forecast information, including radar and infrared images for a detailed view. The backend stores Danube river levels for up to 1 year.',
    link: 'https://sd-vreme.vercel.app/'
  },
  {
    title: 'Alephium rich list',
    technologies: [
      'ReactJS',
      'NextJS',
      'TypeScript',
      'Redux',
      'Tailwind',
      'PostgreSQL',
      'ExpressJS'
    ],
    image: '../../../assets/img/projectImgs/alph-richlist.png',
    text: "My largest project displays extensive information about Alephium coin holders, including the number of active addresses and coin distribution. The backend utilizes Alephium's provided backend explorer, which features a database exceeding 100GB, alongside my custom table tailored specifically for this website. This project marks my first adventure with TypeScript.",
    link: 'https://alph-richlist.vercel.app/'
  },
  {
    title: 'FindAnime',
    technologies: ['ReactJS', 'AstroJS', 'TypeScript', 'Tailwind', 'MPA'],
    image: '../../../assets/img/projectImgs/findanime.png',
    text: 'Exploring the world of AstroJS 🚀, a multipage application framework that ships zero JavaScript by default. It features file-based routing and provides a very pleasant experience.',
    link: 'https://findanime.vercel.app/'
  }
]

interface ITechColors {
  [propName: string]: string
}

export const techColors: ITechColors = {
  ReactJS: 'bg-cyan-500',
  NextJS: 'bg-cyan-800',
  ChartJS: 'bg-orange-400',
  Tailwind: 'bg-indigo-500',
  Redux: 'bg-indigo-300',
  Puppeteer: 'bg-green-500',
  ExpressJS: 'bg-gray-400',
  PostgreSQL: 'bg-teal-600',
  TypeScript: 'bg-rose-400',
  AstroJS: 'bg-amber-200',
  MPA: 'bg-slate-200',
  'FB Realtime DB': 'bg-yellow-400'
}
