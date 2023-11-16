import styled from "styled-components";

interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS
}

const STATUS_COLORS = {
    location: 'purple',
    timer: 'yellow',
    dinheiro: 'yellowDark'
} as const


export const MainDelivery = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;

    @media (max-width: 1000px) {
        flex-direction: column-reverse;
        gap: 2rem;
    }
`

export const HeaderDelivery = styled.header`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 5rem 0rem 0rem 4rem;

    h1 {
        color: ${props => props.theme.yellowDark};
        /* Title/Title L */
        font-family: 'Baloo 2';
        font-size: 32px;
        font-style: normal;
        font-weight: 800;
        line-height: 130%; /* 41.6px */
    }

    span {
        max-width: 552px;
        color: var(--base-subtitle, #403937);
        /* Text/Regular L */
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 26px */
    }
`
export const DivNegrito = styled.div`
    color: ${props => props.theme.baseText};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;

    text-transform: capitalize;
`

export const DivNegritoPayment = styled(DivNegrito)`
    text-transform: none;

`


export const SpanNegrito = styled.span`
    color: ${props => props.theme.baseText};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
`

export const InfosDelivery = styled.div`
    display: flex;
    width: 526px;
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    border-radius: 6px 36px;
    border: 1px solid #DBAC2C;

    @media (max-width: 1000px) {
        width: 90%;
    }
`
export const DeliveryTimeAndOthers = styled.div`
   display: flex;
   gap: .5rem;
   padding: 0rem;

   align-items: center;
`

export const SpanUF = styled.span`
    text-transform: uppercase;
`


export const ImgBG = styled.div<StatusProps>`
    background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
    width: 30px;
    height: 30px;

    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content:  center;
`

