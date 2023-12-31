import Image from 'next/image'
import {
  Container,
  HomeContainer,
  LandingImage,
  Wrapper,
} from '@/styles/pages/home'
import { Product } from '../components/product'
import { Header } from '../components/header'
import { DrinksPictures } from '../components/drinksPictures'
import { ToExperiment } from '../components/ToExperiment'
import { Contact } from '../components/contact'
import background from '../assets/backgroundConecta.png'
import lataGuaraná from '../assets/lata-guarana 1.png'

export default function Home() {
  return (
    <Container>
      <LandingImage
        src={background}
        width={1440}
        height={745}
        quality={100}
        priority={true}
        alt="background"
      />

      <Header />

      <HomeContainer>
        <div>
          <h1>
            Aqui um título <br /> de <br /> duas linhas
          </h1>
          <button>Aqui um CTA</button>
        </div>

        <Image
          src={lataGuaraná}
          width={326}
          height={574}
          quality={100}
          priority={true}
          alt="imagem de uma lata"
        />
      </HomeContainer>
      <Product />
      <DrinksPictures />

      <Wrapper>
        <ToExperiment />
        <Contact />
      </Wrapper>
    </Container>
  )
}
