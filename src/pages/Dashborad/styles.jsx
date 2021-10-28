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

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr;
        grid-template-areas:
            "header"
            "main"
            "main";
    }

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

    .toggle {
        background-color: ${(props) => props.theme.green};
        color: ${(props) => props.theme.light};
        display: grid;
        place-items: center;
        padding: 0.5rem;
        border: none;
        outline: none;
        border-radius: 50%;
        font-size: 1.25rem;
        position: relative;

        transform: ${(props) =>
            props.teste ? "translateX(163px)" : "translateX(0)"};

        @media (min-width: 600px) {
            display: none;
        }
    }
`;

export const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;

    @media (max-width: 600px) {
        position: fixed;
        left: 0;
        top: calc(64px + 2rem);
        bottom: 1rem;

        transition: transform 400ms ease;
        transform: ${(props) =>
            props.active ? "translateX(1rem)" : "translateX(-100%)"};

        padding-right: 4rem;
    }

    > p {
        font-size: 1.125rem;
        font-weight: 600;
        text-align: center;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
    }
`;
