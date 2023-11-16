import styled from "styled-components"

interface StatusProps {
    statuscolor: keyof typeof STATUS_COLORS
}

const STATUS_COLORS = {
    cart: 'yellowDark',
    delivery: 'baseText',
    timer: 'yellow',
    coffe: 'purpleDark'
} as const

export const MainContent = styled.main`
    padding: 5rem 3rem;
 `
export const HeaderContnet = styled.header`
    display: flex;

    h1 {
        margin-bottom: 1rem;

        font-family: Baloo 2;
        font-size: 3rem;
        font-weight: 800;
        line-height: 130%;
        font-style: normal;

        color: ${props => props.theme.baseTitle};
    }

    p {
        font-family: Roboto;
        font-size: 20px;
        font-weight: 400;
        line-height: 130%;
        font-style: normal;

        color: ${props => props.theme.baseSubtitle};
    }

    div {
        ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin-top: 2rem;
            color: ${props => props.theme.baseText};

            li {
                display: flex;
                align-items: center;
                gap: .8rem;

                font-family: Roboto;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;

                margin: .5rem;
            }
        }
    }

    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 5rem;

       div {
            ul {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
       }
    }

    @media (max-width: 500px) {
        h1 {
            font-family: Baloo 2;
            font-size: 1.7rem;
            font-weight: 700;
        }

        p {
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
`
export const ThumbImg = styled.div`
    margin-right: -5rem;

        @media (max-width: 1000px) {
            position: absolute;
            margin-left: 20rem;
            margin-top: 18rem;
        }

    @media (max-width: 735px) {
        position: initial;
        margin: 0;
    }
`
export const Status = styled.div<StatusProps>`
    background-color: ${props => props.theme[STATUS_COLORS[props.statuscolor]]};

    width: 30px;
    height: 30px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 16px;
    }

    @media (max-width: 500px) {
        padding: .2rem;
    }
`
export const CoffeesDiv = styled.div`
    color: ${props => props.theme.baseSubtitle};
    h2 {
        font-family: Baloo 2;
        font-size: 2rem;
        font-style: normal;
        font-weight: 800;
        line-height: 130%; /* 41.6px */
        padding-bottom: 2rem;
    }

`

export const Coffee = styled.div`
`
//TODA ESSA PARTE DE BAIXO FOI PARA RenderCoffee
// export const CoffeeComponent = styled.div``

// export const MainFeature = styled.div`
//     display: flex;
//     justify-content: center;
//     padding: 0rem 0rem .7rem 0rem;

//     h5 {
//         background-color: ${props => props.theme.yellowLight};
//         color: ${props => props.theme.yellowDark};

//         font-family: Roboto;
//         font-size: 10px;
//         font-style: normal;
//         font-weight: 700;
//         line-height: 130%; /* 13px */
//         text-transform: uppercase;
//         border-radius: 5px;
//         padding: .1rem .5rem;
//     }
// `
// export const PriceAndQuantity = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 1rem;
//     text-align: justify;

//     padding: 1rem 0rem;
// `
// export const PriceSpan = styled.span`
//     color: ${props => props.theme.baseText};
//     font-family: Baloo 2;
//     font-size: 24px;
//     font-style: normal;
//     font-weight: 800;
//     line-height: 130%;
//     margin: .3rem;
// `
// export const CartAddOrRemove = styled.span`
//     border-radius: 6px;
//     background: ${props => props.theme.purpleDark};

//     display: flex;
//     padding: 8px;
//     justify-content: center;
//     align-items: center;
//     gap: 8px;
//     cursor: pointer;

//     img {
//         width: 20px;
//         transition: .5s;
//     }
    
//     :hover {
//         transform: scale(1.4);
//         transition: .2s;
//     }
// `

