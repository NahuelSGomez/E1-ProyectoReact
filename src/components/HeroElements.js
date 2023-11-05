import styled from 'styled-components';

import { CartShop } from "./NavBarElements";

export const ContainerHero = styled.section`
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
    gap: 48px;
    padding: 56px 40px 40px 40px;
`;

export const HeroTop = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    align-items: center;
`;

export const LogoHero = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    & h1{
        font-size: 28px;
        font-family: Pacifico;
    }

    @media (max-width: 800px){
        h1{
            font-size: 24px;
        }
    }
`;

export const SearchTop = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    & input{
        border-radius: 4px;
        border: 1px solid #000;
        padding: 7px
    }

    @media (max-width: 600px){
        display: none;
    }
`;

export const HeroBottom = styled.div`
    display: flex;
    width: 100%;
    gap: 40px;

    & img{
        width: 55%;
    }

    @media (max-width: 800px){
            flex-direction: column;

            & img{
                width: 90%;
                margin: auto;
            }
        }
`;

export const HeroInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;


    & p{
        font-family: Montserrat;
        align-self: stretch;
        line-height: normal;
        width: 100%;
        font-size: 20px;
        text-align: justify;

        @media (min-width: 1200px) {
            font-size: 24px;
        }

        @media (min-width: 800px){
            font-size: 18px;
        }
    }
`;

export const HeroCartShop = styled(CartShop)`
    width: 100%;
`;