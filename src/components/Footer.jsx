import React from 'react';
import { ContainerFooter, LogoContainerFooter, MenuFooter } from './FooterElements';

import { FaFacebook } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { AiOutlineInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';


export const Footer = () => {
    return (
        <ContainerFooter>
            <LogoContainerFooter>
                PET PARADISE
                <p>© 2023</p>
            </LogoContainerFooter>

            <MenuFooter>
                <FaFacebook />
                <AiOutlineInstagram />
                <FaWhatsapp />
                <MdEmail />
            </MenuFooter>

        </ContainerFooter>
    )
}