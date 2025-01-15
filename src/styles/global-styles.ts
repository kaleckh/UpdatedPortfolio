import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 62.5%; // 1rem = 10px
}


body {
    font-family: 'Poppins', sans-serif;
    background-color: #0a0a0a
}

/* Typography */

h1 {
    font-size: 3.5rem;
    color:#fff;
    font-weight: 800;

    @media screen and (min-width: 480px) {
        font-size: 5rem;
    }
    @media screen and (min-width: 768px) {
        font-size: 8rem;
    }
}

h2 {
    font-weight: 800;
    color: #fff;
    font-size: 3rem;

    
    @media screen and (min-width: 480px) {
        font-size: 4rem;
    }
    @media screen and (min-width: 768px) {
        font-size: 5.5rem;
        line-height: 10rem;
    }
}

p {
    font-size: 1.6rem;
    line-height: 3rem;
    color: #C6CADF;
}

`;

export default GlobalStyles;
