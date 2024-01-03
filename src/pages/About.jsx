import React from 'react'
import styled from 'styled-components'

import { CategoryContainer } from "../components/CategoriesElements";

import CouplePic from "../img&icons/couple pic.jpg";
import CouplePic2 from '../img&icons/couple pic 2.jpg';
import Pawn from '../img&icons/paws img.jpg';


const AboutContainer = styled(CategoryContainer)`
    margin: 4rem 6rem 4rem 4rem;
    justify-content: space-around;

    & h2 {
        text-align: center;
    }
`;

const AboutWrapper = styled.div`
    display: flex;
    height: 90vh;
    padding: 40px;
    margin-right: 8rem;
    border-radius: 15px;
    background: linear-gradient(180deg, rgba(191, 168, 147, 0.00) 0%, rgba(191, 168, 147, 0.50) 100%);
`;

const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 60%;
    gap: 24px;

    & h3{
        font-family: Pacifico;
        text-align: end;
    }
`;

const AboutImg = styled.div`
    width: 50%;
    overflow-wrap: ;

    & img:first-child{
        position: relative;
        width: 95%;
        left: 5rem;
        top: -3rem;
        z-index: 2;
    }

    & img:nth-child(2) {
        position: relative;
        width: 70%;
        right: -20rem;
        bottom: 5rem;
        z-index: 1;
    }

    & img:last-child{
        position: relative;
        transform: rotate(10deg);
        bottom: 30rem;
        z-index: -1;
    }
`;


export const About = () => {
    return (
        <AboutContainer>
            <h2>Nosotros</h2>
            <AboutWrapper>
                <AboutInfo>
                    <div>
                        <p>Somos Feli y Juani, una pareja que ama los animales. Decidimos crear Pet Paradise para ofrecer a otros dueños de mascotas los mejores productos y servicios.</p>
                        <p>Nos conocimos en la facultad de veterinaria y desde el primer momento supimos que compartíamos la misma pasión por los animales. Después de graduarnos, trabajamos en diferentes lugares, pero siempre soñamos con tener nuestro propio negocio.</p>
                        <p>En 2019, decidimos dar el paso y crear Pet Paradise.</p>
                        <p>Desde entonces, nos hemos dedicado a ofrecer a nuestros clientes una amplia gama de productos y servicios de alta calidad, siempre con el objetivo de que sus mascotas tengan una vida feliz y saludable.</p>
                        <p>Queremos ofrecerte el paraíso para tu mejor amigo.</p>
                    </div>
                    <h3>Feli y Juani</h3>
                </AboutInfo>
                <AboutImg>
                    <img src= { CouplePic } alt="couple_pic" />
                    <img src= { CouplePic2 } alt="couple_pic_2" />
                    <img src= { Pawn } alt="pawn" />
                </AboutImg>
            </AboutWrapper>
        </AboutContainer>
    )
}
