import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter } from "react-router-dom"
// import { useHook } from "./Hooks/use-Hook"
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        {/* <useHook> */}
          <Router />
        {/* </useHook> */}
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
