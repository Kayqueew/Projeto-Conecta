import Image from 'next/image'
import {
  ActiveDotButton,
  Container,
  DotButton,
  Dots,
  NavigationWrapper,
  Numberslide,
  Wrapper,
} from './styles'
import michealDrink from '../../assets/michaelDrink.png'
import ashDrink from '../../assets/ashDrink.png'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import React, { useState } from 'react'

export function DrinksPictures() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <Container>
      <Image
        src={michealDrink}
        width={566}
        height={811}
        quality={100}
        priority={true}
        alt=""
      />

      <Wrapper>
        <NavigationWrapper>
          <div ref={sliderRef} className="keen-slider">
            <Numberslide className="keen-slider__slide">
              <h1>
                “Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Etiam commodo hendrerit.”
              </h1>
              <h2>@danielmaciel</h2>
            </Numberslide>
            <Numberslide className="keen-slider__slide">
              <h1>
                “Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Etiam commodo hendrerit.”
              </h1>
              <h2>@danielmaciel</h2>
            </Numberslide>
            <Numberslide className="keen-slider__slide">
              <h1>
                “Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Etiam commodo hendrerit.”
              </h1>
              <h2>@danielmaciel</h2>
            </Numberslide>
            <Numberslide className="keen-slider__slide">
              <h1>
                “Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Etiam commodo hendrerit.”
              </h1>
              <h2>@danielmaciel</h2>
            </Numberslide>
          </div>

          {loaded && instanceRef.current && (
            <Dots>
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length,
                ).keys(),
              ].map((idx) => {
                return (
                  <React.Fragment key={idx}>
                    {currentSlide === idx ? (
                      <ActiveDotButton
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx)
                        }}
                      />
                    ) : (
                      <DotButton
                        onClick={() => {
                          instanceRef.current?.moveToIdx(idx)
                        }}
                      />
                    )}
                  </React.Fragment>
                )
              })}
            </Dots>
          )}
        </NavigationWrapper>

        <div>
          <Image src={ashDrink} quality={100} priority={true} alt="" />
          <p>Peça para seu bar</p>
        </div>
      </Wrapper>
    </Container>
  )
}
