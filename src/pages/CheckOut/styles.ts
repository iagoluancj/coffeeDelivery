import styled from "styled-components"

export const CheckOutContent = styled.div`
    padding: 5rem 3rem;  

    h1 {
        color: ${props => props.theme.baseSubtitle};
        font-family: Baloo 2;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 23.4px */

        margin: 0rem 0rem 0rem -1rem;
    }
 `
export const CheckOutDiv = styled.div`
    display: flex;
    gap: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`

export const CheckOut__Adress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 3rem;

    max-width: 1200px;
    
    border-radius: 6px;
    background: ${props => props.theme.baseCard};
`
export const HeaderInfos = styled.div`
    header {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        
        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
            flex: 1 0 0;

            h3 {
                align-self: stretch;
                color: ${props => props.theme.baseSubtitle};
                /* Text/Regular M */
                font-family: 'Baloo 2';
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                line-height: 130%; /* 20.8px */
            }

            p {
                display: flex;
                height: 21px;
                flex-direction: column;
                justify-content: center;
                align-self: stretch;
                
                color: ${props => props.theme.baseText};
                /* Text/Regular S */
                font-family: Roboto;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 130%; /* 18.2px */
            }
        }
    }

`

export const Forms = styled.form`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    align-self: stretch;

        input {
            display: flex;
            padding: .8rem;
            align-items: center;
            gap: 4px;
                
            border-radius: 4px;
            border: 1px solid var(--base-button, #E6E5E5);
            background: ${props => props.theme.baseInput};

            ::placeholder {
                flex: 1 0 0;
                color: ${props => props.theme.baseLabel};
                font-family: Roboto;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 130%; /* 18.2px */
            }
        }
`
export const CheckOut__AdressAndPayment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CheckOut__Payment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 3rem;

    max-width: 1200px;
    
    border-radius: 6px;
    background: ${props => props.theme.baseCard};
`

export const HeaderPayment = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;
    margin-bottom: 2rem;

    h3 {
            align-self: stretch;
            color: ${props => props.theme.baseSubtitle};
            /* Text/Regular M */
            font-family: 'Baloo 2';
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 130%; /* 20.8px */
        }
    
        p {
                display: flex;
                height: 21px;
                flex-direction: column;
                justify-content: center;
                align-self: stretch;
                
                color: ${props => props.theme.baseText};
                /* Text/Regular S */
                font-family: Roboto;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 130%; /* 18.2px */
            }
`
export const CheckOut_CardsMethods = styled.div`
    display: flex;
    gap: 2rem;
`


export const Checkout_MethodsPayment = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    align-items: center;
    gap: 12px;
    flex: 1 0 0;
    border-radius: 6px;
    background: ${props => props.theme.baseButton};
    width: 200px;
`

export const AsideCheckout = styled.aside`
    h1 {
        color: ${props => props.theme.baseSubtitle};
        font-family: Baloo 2;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 23.4px */

        margin: 0rem 0rem 1rem 0rem;
    }
`
export const CheckOut__Products = styled.div`
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-radius: 6px 44px;
    background: var(--base-card, #F3F2F2);
`
export const CheckOut__ProductCoffee = styled.div`
    display: flex;

    img {
        width: 64px;
        height: 64px;
    }
`
