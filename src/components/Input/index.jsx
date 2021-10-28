import styled from "styled-components";

export const Input = styled.input`
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.25rem 0.5rem;

    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 3px;

    width: 100%;
    display: inline-block;

    &:hover,
    &:focus {
        border-color: ${(props) => props.theme.green};
    }
`;
