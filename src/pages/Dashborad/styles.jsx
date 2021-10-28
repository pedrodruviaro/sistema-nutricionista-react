import styled from "styled-components";

export const Dashboard = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 15rem 1fr;
    grid-template-rows: max-content 1fr;
    grid-template-areas:
        "header header"
        "aside main"
        "aside main";

    padding: 1rem;
    gap: 1rem;

    > * {
        padding: 1rem;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        background-color: ${(props) => props.theme.light};
    }

    header {
        grid-area: header;
    }

    aside {
        grid-area: aside;
    }

    main {
        grid-area: main;
    }
`;
