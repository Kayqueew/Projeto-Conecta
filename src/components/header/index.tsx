import Image from 'next/image'
import { Container, SocialImage } from './styles'
import marcaConecta from '../../assets/logoConecta.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'

export function Header() {
  return (
    <Container>
      <Image
        src={marcaConecta}
        width={110}
        quality={100}
        alt="logo da conecta"
      />

      <SocialImage>
        <Image
          src={facebook}
          width={22}
          quality={100}
          alt="imagem do facebook"
        />
        <Image
          src={instagram}
          width={22}
          quality={100}
          alt="imagem do instagram"
        />
      </SocialImage>
    </Container>
  )
}
