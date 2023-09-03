import { styled } from '@/styles'

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  width: '555px',
  gap: '20px',

  div: {
    display: 'flex',
    gap: '33px',

    'label:first-of-type': {
      width: '160px',
    },

    label: {
      width: '100%',
    },
  },

  label: {
    display: 'flex',
    flexDirection: 'column',

    fontSize: '12px',
    color: '#5E615F',
    fontFamily: '$roboto',
    fontWeight: '400',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#00ec5b',
    width: '193px',
    height: '56px',
    borderRadius: '50px',
    border: '0',
    marginTop: '20px',

    fontSize: '0.87rem',
    fontFamily: '$inter',
    fontWeight: '500',
    color: 'black',
    cursor: 'pointer',

    '&:hover': {
      background: 'green',
    },
  },

  'label:focus-within': {
    color: '#00EC5B',
  },

  '@media (max-width: 1050px)': {
    button: {
      width: '100%',
    },
  },

  '@media (max-width: 640px)': {
    width: '100%',

    div: {
      display: 'flex',
      flexDirection: 'column',

      'label:first-of-type': {
        width: '100%',
      },
    },
  },
})

export const Input = styled('input', {
  height: '46px',
  backgroundColor: 'transparent',
  border: '0',
  borderTop: '1px solid #fff',
  borderRight: '1px solid #fff',
  marginTop: '9px',

  fontWeight: '400',
  fontFamily: '$inter',
  fontSize: '16px',
  color: '#5E615F',

  '&:focus': {
    backgroundColor: '#494C49',
    outline: 'none',
    borderTop: '2px solid #00EC5B',
    borderRight: '2px solid #00EC5B',

    color: '#fff',
    paddingLeft: '15px',
  },
})

export const Select = styled('select', {
  height: '46px',
  backgroundColor: 'transparent',
  border: '0',
  borderTop: '1px solid #fff',
  borderRight: '1px solid #fff',
  marginTop: '9px',
  fontSize: '16px',
  color: '#5E615F',

  '&:focus': {
    backgroundColor: '#494C49',
    borderTop: '2px solid #00EC5B',
    borderRight: '2px solid #00EC5B',

    color: '#fff',
    paddingLeft: '15px',
  },
})

export const Textarea = styled('textarea', {
  height: '131px',
  backgroundColor: 'transparent',
  border: '0',
  borderTop: '1px solid #fff',
  borderRight: '1px solid #fff',
  marginTop: '9px',
  resize: 'none',
  fontSize: '16px',
  color: '#5E615F',

  '&:focus': {
    backgroundColor: '#494C49',
    borderTop: '2px solid #00EC5B',
    borderRight: '2px solid #00EC5B',

    outline: 'none',

    color: '#fff',
    paddingLeft: '15px',
  },
})
