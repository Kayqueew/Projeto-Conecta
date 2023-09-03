/* import garrafa from '../assets/garrafa-guarana 1.png'
import lata from '../assets/lata-guarana 2.png' */
import garrafa from '../assets/lata-guarana 1.png'
import lata from '../assets/lata-guarana 2.png'

interface Itens {
  id: number
  title: string
  image: string
  description: string
}

export const Card: Itens[] = [
  {
    id: 1,
    title: 'Garrafa 350ml',
    image: garrafa.src,
    description: 'Lorem ipsum dolor sit amet',
  },

  {
    id: 2,
    title: 'Garrafa 350ml',
    image: lata.src,
    description: 'Lorem ipsum dolor sit amet',
  },
]
