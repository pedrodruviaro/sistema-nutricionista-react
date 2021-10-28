import styled from "styled-components";

export const Button = styled.button`
    font-size: 1rem;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;

    color: ${(props) => props.theme.light};
    background-color: ${(props) =>
        props.primary ? props.theme.green : props.theme.brown};

    transition: all 300ms ease-in-out;

    &:hover,
    &:focus {
        filter: brightness(1.1);
    }
`;
