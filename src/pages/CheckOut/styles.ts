import styled from "styled-components"

export const CheckOutContent = styled.div`
    padding: 5rem 2rem; 
    padding-left: 0rem;

    h1 {
        color: ${props => props.theme.baseSubtitle};
        font-family: Baloo 2;
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 130%; /* 23.4px */

        margin: 0rem 0rem 0rem 0rem;
    }
 `
export const CheckOutDiv = styled.div`
    display: flex;
    gap: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    @media (max-width: 1204px) {
        display: block;
    }
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

        div {
            display:  flex;
            gap: 1rem;
            justify-content: space-between;
        }

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

        #cep {width: 300px; margin-right: 10rem;}
        
        #rua {width: 100%;}

        #numero {width: 100px;}
        #complemento {width: 550px;}

        #cidade {width: 45%;}
        #bairro {width: 45%;}
        #uf {width: 15%;}
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

    @media (max-width: 800px) {
        align-items: center;
    }
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
    transition: .2s;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`
export const Checkout_MethodsPayment = styled.div<{ checked: boolean }>`
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
    transition: .2s;

    cursor: pointer;

    transform: scale(${props => (props.checked ? 1.2 : 1.0)});
    background-color: ${props => (props.checked ? '#F1E9C9' : '')};
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
export const CheckOut__Finalize = styled.div`
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-radius: 6px 44px;
    background: var(--base-card, #F3F2F2);

`
export const CheckOut__Products = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
`

export const CheckOut__ProductCoffee = styled.div`
    display: flex;
    padding: .6rem 1rem;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
    gap: 1rem;

    h4 {
        color: ${props => props.theme.baseSubtitle};
        /* Text/Regular M */
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 20.8px */
    }

    img {
        width: 64px;
        height: 64px;
    }

    border-bottom: 1px solid ${props => props.theme.baseButton}; /* Linha */
`
export const CheckOutButtonDiv = styled.div`
    display: flex;
    gap: 1rem;
    margin: .5rem 0rem;
    transition: .2s;
`
export const Remove = styled.div`
    display: flex;
    height: 32px;
    padding: 0px 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 6px;
    background: ${props => props.theme.baseButton};
    cursor: pointer;

    transition: .2s;

    :hover {
        transform: scale(1.3);
        transition: .2s;
    }

    img {
        transition: .5s;
        max-width: 20px;
        max-height: 20px;
    }
`
export const Price = styled.div`
    color: ${props => props.theme.baseText};
    text-align: right;
    /* Text/Bold M */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 20.8px */

    width: 55px;
`

export const Checkout__TotalItens = styled.div`
    tfoot {
        th {
            color: var(--base-subtitle, #403937);
            /* Text/Bold L */
            font-family: Roboto;
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 700;
            line-height: 130%; /* 26px */
        }

        td {
            color: var(--base-subtitle, #403937);
            /* Text/Bold L */
            font-family: Roboto;
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 700;
        }
    }

    th {
        font-size: .9rem;
        color: var(--base-text, #574F4D);
        /* Text/Regular S */
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 18.2px */

        padding-right: 13rem;
        text-align: left;
        padding-bottom: 1rem;
    }

    td {
        font-size: 1rem;
        color: var(--base-text, #574F4D);
        /* Text/Regular S */
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 18.2px */

        text-align: right;
        padding-bottom: 1rem;
    }

    button {
        display: flex;
        padding: 12px 8px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        align-self: stretch;
        width: 100%;
        cursor: pointer;
        
        border: none;
        border-radius: 6px;
        background: ${props => props.theme.yellow};
        
        transition: .1s;

        span {
            /* Components/Button G */
            font-family: Roboto;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 160%; /* 22.4px */
            text-transform: uppercase;
            transition: .1s;

            a {
                color: ${props => props.theme.white};
                text-decoration: none;
            }
        }
    }

    button:hover {
        transform: scale(1.03);
        transition: .1s;
        
        span {
            font-size: 16px;
            transition: .1s;
        }
    }
`