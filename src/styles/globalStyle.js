import { createGlobalStyle } from 'styled-components'
import theme from './theme'
import 'bootstrap/dist/css/bootstrap.css'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.fg.default};
  }
`

export default GlobalStyle
