import { styled } from '@/styles'

export const Conteiner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: '1',

  width: '100%',
  padding: '0 9rem',

  backgroundColor: '#1B1F1C',

  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1250,
    margin: '0 auto',
    marginTop: '100px',
  },

  '@media (max-width: 1360px)': {
    padding: '0 6.5rem',
  },

  '@media (max-width: 1250px)': {
    padding: '0 4rem',
  },

  '@media (max-width: 1050px)': {
    section: {
      flexDirection: 'column',
    },
  },

  '@media (max-width: 980px)': {
    padding: '0 2.5rem',
  },

  '@media (max-width: 830px)': {
    padding: '0 1.5rem',
  },
})

export const SocialMedia = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '110px',

  h1: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: 'White',
    marginBottom: '19px',
  },

  div: {
    display: 'flex',
    gap: '10px',

    h1: {
      fontSize: '0.75rem',
      fontFamily: '$inter',
      fontWeight: '400',
      color: 'White',
      marginTop: '2px',
    },
  },

  '@media (max-width: 1050px)': {
    alignItems: 'center',
    paddingBottom: '60px',
  },
})

export const Footer = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 1250,
  margin: '0 auto',

  padding: '131px 0 40px',
  h1: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.75rem',
    fontFamily: '$inter',
    fontWeight: '400',
    color: '#5F6260',
  },
  h2: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.56rem',
    fontFamily: '$inter',
    fontWeight: '400',
    color: '#fff',

    strong: {
      fontSize: '1rem',
      fontFamily: '$roboto',
      fontWeight: '700',
    },
  },

  '@media (max-width: 1050px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '35px',
  },

  '@media (max-width: 640px)': {
    margin: '100px 0 40px',
  },
})
