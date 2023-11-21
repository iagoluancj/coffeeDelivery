import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { HashRouter } from "react-router-dom"
import { CoffeesProvider } from "./Hooks/use-Coffees"

/* EM ANDAMENTO
// Organizar os caffes mapeados com base na quantidade preenchida, para melhor organização ou criar uma lista de escolhidos. 


// Buscar dados pelo CEP - RESOLVIDO.
// A FUNÇÃO DE {VALOR DO FRETE, PREVISÃO DE ENTREGA} NÃO SERÁ POSSIVEL POIS ESTÁ ALGUNS NIVEIS ALÉM DA MINHA CAPACIDADE
// Criar valor do frete com base no CEP 
// Colocar para a previsão ser ajustada com base no CEP. 
*/

/* RESOLVIDOS

// Alterar icone de carrinho para opção de remover tudo

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
        <HashRouter>
          <Router />
        </HashRouter>
      </CoffeesProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
