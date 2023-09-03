import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  h1: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'black',
    lineHeight: '180%',
  },

  p: {
    fontWeight: '400',
    fontSize: '1rem',
    fontFamily: '$roboto',
    textAlign: 'center',
  },
})

export const Itens = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  columnGap: '80px',
  paddingTop: '78px',

  '@media (max-width: 950px)': {
    columnGap: '30px',
  },

  '@media (max-width: 720px)': {
    justifyContent: 'center',
    rowGap: '75px',
    paddingTop: '60px',
  },
})

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '360px',
  height: '484px',
  borderRadius: 16,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.30)',
  paddingTop: '40px',

  h1: {
    fontSize: '1.25rem',
    lineHeight: '190%',
  },

  p: {
    fontSize: '1rem',
    lineHeight: '170%',
  },

  div: {
    button: {
      background: '#00ec5b',
      width: '193px',
      height: '56px',
      borderRadius: '50px',
      border: '0',
      marginTop: '60px',

      fontSize: '0.87rem',
      fontWeight: '500',
      fontFamily: '$inter',
      color: 'black',
      cursor: 'pointer',

      '&:hover': {
        background: 'green',
      },
    },
  },

  '@media (max-width: 950px)': {
    width: '320px',
  },

  '@media (max-width: 720px)': {
    width: '400px',
  },

  '@media (max-width: 500px)': {
    width: '326px',
  },

  '@media (max-width: 375px)': {
    width: '280px',
  },
})
