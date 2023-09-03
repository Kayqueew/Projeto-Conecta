import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  padding: '0 10rem',

  '@media (max-width: 1360px)': {
    padding: '0 6.5rem',
  },

  '@media (max-width: 1250px)': {
    padding: '0 5rem',
  },

  '@media (max-width: 980px)': {
    padding: '0 2.5rem',
  },

  '@media (max-width: 830px)': {
    padding: '0 1.5rem',
  },
})
