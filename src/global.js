import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box;
}
html{
    font-size: 62,5%;
    scroll-behavior:smooth;
    width: 100%;
    height: 100%;
}

body{
    width: 100vw;
    height: 100vh;
    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif;
    background-image: url('/background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
}

button{
    cursor: pointer;
}

a{
    color: inherit;
    text-decoration: none;
}
`;
