import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *,::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-color: ${({ theme }) => theme.colors.downriver};
        font-family: "Nunito", sans-serif;
    }

    #root {
        margin: 0 10px;
        cursor: pointer;
    }
`;
