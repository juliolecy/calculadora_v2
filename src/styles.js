import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 528px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 4rem;
    gap: 1rem;
    transition: 0.3s;

    a {
        text-decoration: none;

        svg {
            color: #fff;
            font-size: 2rem;

            &:hover {
                filter: drop-shadow(0px 3px 4px #00b5ff8f);
                transform: scale(1.2);
            }
        }
    }

    @media screen and (max-width: 528px) {
        flex-direction: row;
        margin-right: 0;
    }
`;

export const Calculadora = styled.section`
    max-width: 600px;
    max-height: 700px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    border-radius: 10px;
    border: none;
    box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
`;

export const Line = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    button {
        padding: 20px 25px;
        border: none;
        background-color: transparent;
        color: #ffffff;
        font-size: 24px;
        font-weight: 700;
        flex: 1;

        &.equal {
            background-color: #ababab;
        }

        &:hover {
            background-color: #ffffff61;
            color: white;
        }
    }
`;

export const Input = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: #00b5ff8f;
    padding: 20px;
    color: #fff;
    font-size: 1.6rem;
`;
