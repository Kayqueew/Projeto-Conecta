import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  paddingTop: '140px',

  '@media (max-width: 1470px)': {
    img: {
      width: '510px',
      objectFit: 'cover',
    },
  },

  '@media (max-width: 1250px)': {
    img: {
      width: '400px',
    },
  },

  '@media (max-width: 915px)': {
    img: {
      width: '340px',
    },
  },

  '@media (max-width: 730px)': {
    img: {
      width: '550px',
    },
  },

  '@media (max-width: 600px)': {
    img: {
      width: '450px',
    },
  },

  '@media (max-width: 500px)': {
    img: {
      width: '350px',
    },
  },

  '@media (max-width: 375px)': {
    img: {
      width: '300px',
    },
  },
})

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  height: '811px',
  whiteSpace: 'normal',

  div: {
    display: 'inlineBlock',
    position: 'relative',
    p: {
      display: 'flex',
      position: 'absolute',
      top: '190px',
      left: '155px',
      color: 'white',
      fontSize: '2rem',
      fontWeight: '700',
    },

    img: {
      height: '406px',
      width: '566px',
      objectFit: 'cover',
      marginBottom: '-4px',
      filter: 'grayscale(50%)',
    },
  },

  '@media (max-width: 1470px)': {
    div: {
      img: {
        width: '510px',
      },
    },
  },
  '@media (max-width: 1250px)': {
    div: {
      p: {
        fontSize: '1.5rem',
        left: '115px',
      },

      img: {
        width: '400px',
      },
    },
  },

  '@media (max-width: 915px)': {
    div: {
      p: {
        left: '85px',
      },

      img: {
        width: '340px',
      },
    },
  },

  '@media (max-width: 730px)': {
    div: {
      p: {
        left: '180px',
      },
      img: {
        width: '550px',
      },
    },
  },

  '@media (max-width: 600px)': {
    div: {
      p: {
        left: '135px',
      },

      img: {
        width: '450px',
      },
    },
  },

  '@media (max-width: 500px)': {
    div: {
      p: {
        left: '85px',
      },

      img: {
        width: '350px',
      },
    },
  },

  '@media (max-width: 375px)': {
    div: {
      p: {
        left: '55px',
      },
      img: {
        width: '300px',
      },
    },
  },
})

export const NavigationWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '30px',
  fontSize: '10px',
  color: '#fff',
  fontWeight: '500',
  height: '407px',
  width: '566px',
  background: '#1b1f1c',

  '@media (max-width: 1470px)': {
    width: '510px',
  },

  '@media (max-width: 1250px)': {
    width: '400px',
  },

  '@media (max-width: 915px)': {
    width: '340px',
  },

  '@media (max-width: 730px)': {
    width: '550px',
  },

  '@media (max-width: 600px)': {
    width: '450px',
  },

  '@media (max-width: 500px)': {
    width: '350px',
  },

  '@media (max-width: 375px)': {
    width: '300px',
  },
})

export const Numberslide = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '25px',

  h1: {
    fontSize: '1.125rem',
    fontWeight: '400',
  },

  h2: {
    fontSize: '0.87rem',
    fontWeight: '400',
  },

  '@media (max-width: 1250px)': {
    h1: {
      fontSize: '1rem',
      fontWeight: '400',
    },
  },
})

export const Dots = styled('div', {
  display: 'flex',
  padding: '10px 0',
})

export const DotButton = styled('div', {
  border: 'none',
  width: '10px',
  height: '10px',
  background: '#474B48',
  borderRadius: '50%',
  margin: '0 5px',
  padding: '5px',
  cursor: 'pointer',
})

export const ActiveDotButton = styled(DotButton, {
  backgroundColor: '#fff',
})
