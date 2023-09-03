import { Card } from '../../itens/index'
import Image from 'next/image'
import { Container, Itens, Wrapper } from './styles'

interface Itens {
  id: number
  title: string
  image: string
  description: string
}

export const Cards: Itens[] = Card

export function Product() {
  return (
    <Container>
      <h1>Produtos</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris <br />
        semper, tortor sed vehicula.
      </p>

      <Itens>
        {Cards.map((line) => {
          return (
            <Wrapper key={line.id}>
              <Image
                src={line.image}
                width={209}
                height={290}
                quality={100}
                priority={true}
                alt=""
              />
              <h1>{line.title}</h1>
              <p>{line.description}</p>

              <div>
                <button>Aqui um CTA</button>
              </div>
            </Wrapper>
          )
        })}
      </Itens>
    </Container>
  )
}
