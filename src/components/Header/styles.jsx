import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > * {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: 6px;

        svg {
            font-size: 1.25rem;
        }
    }

    .header-input-container {
        background-color: ${(props) => props.theme.bodyBg};
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

        > input {
            border: none;
            outline: none;
            font-size: 1rem;
            padding: 0;
            background-color: transparent;
        }
    }

    .header-user {
        border-radius: 6px;
        background-color: ${(props) => props.theme.green};
        color: white;
        cursor: pointer;
    }
`;
