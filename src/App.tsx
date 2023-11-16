import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter } from "react-router-dom"
import { CoffeesProvider } from "./Hooks/use-Coffees"

// Arrumar coffee bug com apenas uma unidade { 
//   O bug pode está ao salvar/buscar no localStorage
//   Ou
//   O bug pode está na ... não sei
// }

// Bloquear envio do form caso não esteja tudo preenchido

// ajustar responsividade mobile checkout - RESOLVIDO
// Arrmar tamanho do CheckOut__Finalize quando estiver sem COFFEES listados - RESOLVIDO. 

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeesProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
