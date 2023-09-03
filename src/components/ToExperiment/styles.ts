import { styled } from '@/styles'
import Image from 'next/image'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '290px',
  marginTop: '126px',
  backgroundColor: '#00EC5B',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    padding: '0 4rem 0 3.5rem',

    h1: {
      fontSize: '1.5rem',
      fontWeight: '700',
      whiteSpace: 'nowrap',
    },

    button: {
      width: '193px',
      height: '56px',
      borderRadius: '50px',
      border: '0',
      fontSize: '0.87rem',
      fontWeight: '500',
      fontFamily: '$inter',
      color: 'White',
      backgroundColor: '#1B1F1C',
      cursor: 'pointer',
    },
  },

  '@media (max-width: 700px)': {
    flexDirection: 'column-reverse',
    height: '370px',

    div: {
      padding: '0',
      marginBottom: '130px',
    },
  },
})

export const Image1 = styled(Image, {
  display: 'flex',
  position: 'relative',
  top: '-115px',
  left: '95px',

  '@media (max-width: 1100px)': {
    left: '125px',
  },

  '@media (max-width: 950px)': {
    left: '195px',

    width: '140px',
    height: '190px',
  },

  '@media (max-width: 700px)': {
    display: 'none',
  },
})

export const Image2 = styled(Image, {
  display: 'flex',
  position: 'relative',
  top: '60px',

  '@media (max-width: 1100px)': {
    left: '50px',
  },

  '@media (max-width: 950px)': {
    left: '105px',

    width: '268px',
    height: '370px',
  },

  '@media (max-width: 700px)': {
    display: 'none',
  },
})

export const Image3 = styled(Image, {
  display: 'flex',
  position: 'relative',
  top: '26px',

  '@media (max-width: 1100px)': {
    right: '80px',
  },

  '@media (max-width: 950px)': {
    right: '130px',

    width: '390px',
    height: '540px',
  },

  '@media (max-width: 700px)': {
    width: '200px',
    height: '300px',
    right: '0px',
    top: '-5px',
    transform: 'rotate(-15deg)',
  },
})
