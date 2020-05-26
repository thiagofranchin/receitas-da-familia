import { createGlobalStyle } from 'styled-components'

const primary = "#45725A"
// const secondary = "#DACEC2"
// const success = "#FE8340"
const light = "#FCF9F4"

const GlobalStyle = createGlobalStyle`
  body {
    background: ${light};
    color: ${primary};
  }
`

export default GlobalStyle