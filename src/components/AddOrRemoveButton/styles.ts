import styled from "styled-components";

export const AddOrRemove = styled.span`
    background: ${props => props.theme.baseButton};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 20.8px */

    padding: .1rem .5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: .2s;


    img {
        transition: .5s;
        max-width: 15px;
        max-height: 15px;
        transition: .2s;
    }

    img:hover {
        transform: scale(1.5);
        transition: .2s;
    }

    span {
        width: 1rem;
    }
`
