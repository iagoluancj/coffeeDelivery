import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: 0;
    box-sizing: 0 0 0 2px ${props => props.theme['green-500']};
}

body {
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.baseTitle};
    -webkit-font-smoothing: antialiased; 
}

body, input, textarea, button {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

ul  {
    list-style: none;
    padding: 0;
    margin: 0;
}
`;
