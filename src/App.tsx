import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { BrowserRouter } from "react-router-dom"
import { CoffeesProvider } from "./Hooks/use-Coffees"

/* EM ANDAMENTO
// Alterar icone de carrinho para op~ção de remover tudo. 
// Organizar os caffes mapeados com base na quantidade preenchida, para melhor organização ou criar uma lista de escolhidos. 

// Criar valor do frete com base no CEP && buscar dados pelo cep.

// Colocar para a previsão ser ajustada com base no cep. 
*/

/* RESOLVIDOS

// Arrumar coffee bug com apenas uma unidade { 
  //   O bug pode está ao salvar/buscar no localStorage
  //   Ou
  //   O bug pode está na ... não sei
  // } - RESOLVIDO, a falha estava no localStorage não inciando corretamente.
  // Resolução: Alterar a forma de salvamento do localStorage no else do addCoffees.
  
  // Bloquear envio do form caso não esteja tudo preenchido.
  
  // ajustar responsividade mobile checkout.
  
  
  // Arrmar tamanho do CheckOut__Finalize quando estiver sem COFFEES listados.
  
  // Colcoar cada imagem referente ao seu proprio café
*/

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
