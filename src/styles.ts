import { createGlobalStyle } from 'styled-components'

const cores = {
  principal: '#E66767',
  secundaria: '#FFEBD9',
  fundo: '#FFF8F1'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.fundo}
  }
`
