import React from 'react';

import { Container, Wrapper, LogoContainer, Menu, MenuItem, MenuItemLink, CartShop, BarsMenu } from './NavBarElements'

import { FaShoppingCart } from 'react-icons/fa';
import { FaBars } from "react-icons/fa6";

export const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                    PET PARADISE
                </LogoContainer>

                <Menu>
                    <MenuItem>
                        <MenuItemLink href="#categories-section">
                            Categorias
                        </MenuItemLink>
                    </MenuItem>
                    
                    <MenuItem>
                        <MenuItemLink href="#featured-section" >
                            Productos destacados
                        </MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink>
                            Contacto
                        </MenuItemLink>
                    </MenuItem>

                    <BarsMenu>
                        <FaBars style={{ fontSize: '30px' }} />
                    </BarsMenu>

                    <CartShop>
                        <FaShoppingCart />
                    </CartShop>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default NavBar