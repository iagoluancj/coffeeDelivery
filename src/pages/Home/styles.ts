import styled from "styled-components"

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS
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
        font-size: 48px;
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
`
export const ThumbImg = styled.div`
    margin-right: -5rem;
`
export const Status = styled.div<StatusProps>`
    background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};

    width: 30px;
    height: 30px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 16px;
    }
`
export const CoffeesDiv = styled.div`
    color: ${props => props.theme.baseSubtitle};

    h2 {
        font-family: Baloo 2;
        font-size: 32px;
        font-style: normal;
        font-weight: 800;
        line-height: 130%; /* 41.6px */
    }
`

export const Coffee = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: rem;
    text-align: center;
    align-items: center;
    margin: 3rem;

    p {
        color: ${props => props.theme.baseLabel};
        font-family: 'Roboto';
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 130%;
    }
`

export const MainFeature = styled.div`
    display: flex;
    justify-content: center;
    padding: 0rem 0rem .7rem 0rem;

    h5 {
        background-color: ${props => props.theme.yellowLight};
        color: ${props => props.theme.yellowDark};

        font-family: Roboto;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 13px */
        text-transform: uppercase;
        border-radius: 5px;
        padding: .1rem .5rem;
    }
`
export const PriceAndQuantity = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    text-align: justify;

    padding: 1rem 0rem;
`  
export const PriceSpan = styled.span`
    color: ${props => props.theme.baseText};
    font-family: Baloo 2;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    margin: .3rem;
`
export const AddOrRemove = styled.span`
    background: ${props => props.theme.baseButton};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */

    padding: .1rem .5rem;
    border-radius: 6px;
    cursor: pointer;

    img {
        transition: .5s;
    }

    img:hover {
        transform: scale(1.5);
        transition: .2s;
    }
`

export const CartAddOrRemove = styled.span`
    border-radius: 6px;
    background: ${props => props.theme.purpleDark};

    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    img {
        width: 20px;
        transition: .5s;
    }
    
    :hover {
        transform: scale(1.4);
        transition: .2s;
    }
`

