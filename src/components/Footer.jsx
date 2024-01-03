import React from 'react';

import { ContainerFooter, LogoContainerFooter, MenuFooter } from './FooterElements';
import { MenuItem, MenuItemLink } from "./NavBarElements";

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
                <MenuItem>
                    <MenuItemLink>
                        <FaFacebook />
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink>
                        <AiOutlineInstagram />
                    </MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink>
                        <FaWhatsapp />
                    </MenuItemLink>
                </MenuItem>
                
                <MenuItem>
                    <MenuItemLink>
                        <MdEmail />
                    </MenuItemLink>
                </MenuItem>
                
            </MenuFooter>

        </ContainerFooter>
    )
}