import Image from 'next/image'
import { Conteiner, Footer, SocialMedia } from './styles'
import { FormContact } from './components/FormContact'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'

export function Contact() {
  return (
    <Conteiner>
      <section>
        <SocialMedia>
          <h1>Fale Conosco.</h1>
          <div>
            <Image
              src={facebook}
              width={18}
              height={18}
              quality={100}
              alt="Icone do facebook"
            />
            <Image
              src={instagram}
              width={18}
              height={18}
              quality={100}
              alt="Icone do instagram"
            />
            <h1>| &nbsp;REDES SOCIAS</h1>
          </div>
        </SocialMedia>

        <FormContact />
      </section>

      <Footer>
        <h1>Todos os direitos reservados © 2020 Conecta</h1>
        <h2>
          PROJETADO POR &nbsp;<strong>CONECTA.</strong>
        </h2>
      </Footer>
    </Conteiner>
  )
}
