import Image from 'next/image'
import { styled } from '..'

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1250,
  margin: '0 auto',
})

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100vh',
  minHeight: '750px',
  paddingBottom: '95px',

  div: {
    width: '100%',
    h1: {
      fontWeight: '700',
      fontSize: '4rem',
      color: 'white',
      paddingBottom: '20px',

      'br:nth-child(2)': {
        display: 'none',
      },
    },

    button: {
      background: '#00ec5b',
      width: '188px',
      height: '56px',
      borderRadius: '50px',
      border: '0',
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

  '@media (max-width: 970px)': {
    div: {
      h1: {
        fontSize: '3rem',
      },
    },

    img: {
      width: '296px',
      height: '522px',
    },
  },

  '@media (max-width: 700px)': {
    div: {
      h1: {
        fontSize: '2.37rem',
      },

      button: {
        width: '160px',
        height: '50px',
      },
    },

    img: {
      width: '246px',
      height: '472px',
    },
  },

  '@media (max-width: 570px)': {
    flexDirection: 'column-reverse',
    paddingBottom: '155px',

    div: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      h1: {
        fontSize: '2.37rem',
        textAlign: 'center',
        paddingBottom: '70px',

        'br:nth-child(1)': {
          display: 'none',
        },

        'br:nth-child(2)': {
          display: 'block',
        },
      },

      button: {
        width: '100%',
        height: '56px',
      },
    },

    img: {
      width: '212px',
      height: '372px',

      marginTop: '60px',
    },
  },

  '@media (max-width: 425px)': {
    div: {
      h1: {
        fontSize: '2rem',
        paddingBottom: '60px',
      },

      button: {
        width: '100%',
        height: '56px',
      },
    },

    img: {
      width: '200px',
    },
  },
})

export const LandingImage = styled(Image, {
  height: '100vh',
  width: '100vw',
  position: 'absolute',
  minHeight: '750px',
  objectFit: 'cover',
  objectPosition: 'center',
  left: '0',
  zIndex: -1,
})

export const Wrapper = styled('div', {
  position: 'absolute',
  left: '0',
  right: '0',
})
