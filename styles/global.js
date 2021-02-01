import { createGlobalStyle } from 'styled-components'

import { normalize } from 'polished'

import { vars } from './vars'

export const GlobalStyle = createGlobalStyle`
    ${normalize()}

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
    }

    *::before,
    *::after {
        display: block;
    }       

    body {
        font-family: ${vars.font_main};
        font-weight: 400;
        font-size: 12px;
        color: ${vars.colorBlack};
    }
 

    h1, h2, h3, h4, h5, h6, p {
        line-height: 1em;
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
    }  

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    ul, li, ol {
        list-style: none;   
}
`
