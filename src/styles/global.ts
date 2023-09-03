import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    overflowX: 'hidden',
  },

  'body, input, textarea, button': {
    fontWeight: 400,
  },
})
