import { createStitches } from '@stitches/react'
// eslint-disable-next-line camelcase
import { Inter, Lexend_Deca, Roboto } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const lexend = Lexend_Deca({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    fonts: {
      inter: `${inter.style.fontFamily}, sans-serif`,
      roboto: `${roboto.style.fontFamily}, sans-serif`,
      lexend: `${lexend.style.fontFamily}, sans-serif`,
    },
  },
})
