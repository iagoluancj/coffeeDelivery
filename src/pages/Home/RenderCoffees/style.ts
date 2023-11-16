import styled from "styled-components";

export const RenderCoffee = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
    align-items: center;

    p {
        color: ${props => props.theme.baseLabel};
        font-family: 'Roboto';
        font-size: 14px;
        font-style: normal;
        font-weight: 300;
        line-height: 130%;
    }

    @media (max-width: 1001px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

export const ImgCoffee = styled.img`
    max-width: 120px;
    margin-top: -4rem;
    padding: .5rem 0rem;
`


export const CoffeeComponent = styled.div`
    padding: 2rem .8rem 0rem .8rem;
    margin: 1rem;
    border-radius: 6px 36px;
    background: var(--base-card, #F3F2F2);
    transition: .2s;
`

export const MainFeature = styled.div`
    display: flex;
    justify-content: center;
    gap: .3rem;
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

