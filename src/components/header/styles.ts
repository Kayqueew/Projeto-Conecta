import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '2.5rem',
})

export const SocialImage = styled('div', {
  display: 'flex',
  gap: '22px',

  img: {
    cursor: 'pointer',
  },
})
