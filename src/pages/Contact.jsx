import React from 'react'
import styled from 'styled-components';

import { CategoryContainer } from "../components/CategoriesElements";
import { AddButton } from "../components/FeaturedElements";

import { FaWhatsapp } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const ContactContainer = styled(CategoryContainer)`
    text-align: center;
    gap: 20px;
`;

const ContactInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const MdEmailStyled = styled(MdEmail)`
    display: inline;
`;

const FaWhatsappStyled = styled(FaWhatsapp)`
    display: inline;
`;

const LogoInfo = styled.div`
    display: flex;
    flex-direction: column;

    & div{
        display: flex;
    }
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-self: center;
    border-radius: 5px;
    width: 60%;
    gap: 16px;
    margin: 30px 0px 20px 0px;

    & input {
        padding: 15px;
    }

    & textarea {
        padding: 15px;
        height: 35vh;
    }

    @media (max-width: 1100px){
        width: 75%;
    }
`;

const SubmitBtn = styled(AddButton)`
    display: flex;
    justify-content: center;
    width: 35%;
    align-self: center;
`;

export const Contact = () => {
    return (
    <ContactContainer>
        <h3>Contacto</h3>
        <ContactInfo>
            <LogoInfo>
                <div>
                    <MdEmailStyled /><h4>E-mail</h4>
                </div>
                <span>Pet.Paradise@petshop.ar</span>
            </LogoInfo>
            <LogoInfo>
                <div>
                    <FaWhatsappStyled /><h4>WhatsApp</h4>
                </div>
                <span>(011)99999999</span>
            </LogoInfo>
        </ContactInfo>
        <ContactForm>
            <input type="text" name="name" id="" placeholder='Nombre' />
            <input type="email" name="email" id="" placeholder='E-mail' />
            <input type="phone" name="phone" id="" placeholder='Teléfono' />
            <textarea name="message" id="" cols={30} rows={5} placeholder='Mensaje' />
            <SubmitBtn type='submit'>Enviar</SubmitBtn>
        </ContactForm>

    </ContactContainer>
    )
}
