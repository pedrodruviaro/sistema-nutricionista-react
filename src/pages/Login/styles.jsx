import styled from "styled-components";

export const Login = styled.div`
    padding: 1rem;
    background-color: #b64a262b;
    min-height: 100vh;

    > div {
        background-color: ${(props) => props.theme.light};
        padding: 2rem;
        width: min(40rem, 100%);
        margin: 0 auto;
        text-align: center;
        border-radius: 6px;

        p {
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            width: min(30rem, 100%);
            margin-inline: auto;
            font-size: 1.125rem;
            font-weight: 300;

            &::before {
                content: "";
                background-color: rgba(0, 0, 0, 0.15);
                width: 100%;
                height: 1px;
            }

            &::after {
                content: "";
                background-color: rgba(0, 0, 0, 0.1);
                width: 100%;
                height: 1px;
            }
        }
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 2rem auto;
        width: min(30rem, 100%);
    }
`;
