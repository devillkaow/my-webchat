import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset"

const GlobalStyle = createGlobalStyle`
${reset}
html,body,#root{
    height: 100vh;
    width: 100vw;
}
`

export default GlobalStyle