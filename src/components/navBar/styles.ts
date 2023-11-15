import styled from "styled-components"

export const NavContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;

    position: sticky;
    top: 1rem;
    transition: 1s;
    background: #FAFAFA;
    border-radius: 10px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    
    div {
        display: flex;
        align-items: center;
    }

    a {
        width: 3rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${props => props.theme["gray-100"]};

        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;

        &:hover {
            border-bottom: 3px solid ${props => props.theme["green-500"]};
        }

        &.active {
            color: ${props => props.theme["green-500"]};
        }
    }
 `;

export const NavSeparator = styled.div`
    border-radius: 5px;
    padding: .5rem;
`

export const NavItens_Andress = styled(NavSeparator)`
    background-color: ${props => props.theme.purpleLight};
    color: ${props => props.theme.purpleDark};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 18.2px */ 
    margin-right: 10px;
`
export const NavItens_Cart = styled(NavSeparator)`
    background-color: ${props => props.theme.yellowLight};
    cursor: pointer;
    margin: 0rem .2rem;

   img {
        width: 20px;
        transition: .5s;
    }
    
    :hover {
        transform: scale(1.1);
        transition: .2s;
    }

    a {
        width: inherit;
        height: inherit;
        text-decoration: none;
        border-radius: 50%;
    }
`

export const TotalQuantityDiv = styled.div`  
    display: flex;
    justify-content: center;
    position: absolute;
    
    margin-right: -2rem;
    margin-top: -2rem;
    z-index: 3;
    
    padding: .7rem;
    width: 10px;
    height: 10px;
        
    border-radius: 50%;
    background: ${props => props.theme.yellowDark};
    color: ${props => props.theme.white};
    
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
`