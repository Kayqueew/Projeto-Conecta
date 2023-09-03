import { Container, Image1, Image2, Image3 } from './styles'
import lataOpaco from '../../assets/lataOpaco.png'
import lata4 from '../../assets/lata-guarana 4.png'
import lata5 from '../../assets/lata-guarana 5.png'

export function ToExperiment() {
  return (
    <Container>
      <Image1
        src={lataOpaco}
        width={152}
        height={207}
        quality={100}
        priority={true}
        alt=""
      />

      <Image2
        src={lata4}
        width={279}
        height={383}
        quality={100}
        priority={true}
        alt=""
      />

      <div>
        <h1>Quer experimentar?</h1>
        <button>Aqui um CTA</button>
      </div>

      <Image3
        src={lata5}
        width={408}
        height={561}
        quality={100}
        priority={true}
        alt=""
      />
    </Container>
  )
}
