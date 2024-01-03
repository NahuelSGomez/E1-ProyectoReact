import React from 'react';

import { Container, Wrapper, LogoContainer, Menu, MenuItem, CartShop, BarsMenu, MenuItemLink } from './NavBarElements'

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
                        <MenuItemLink to="/">Inicio</MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink to="/products">Productos</MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink to="/about">Nosotros</MenuItemLink>
                    </MenuItem>

                    <MenuItem>
                        <MenuItemLink to="/contact">Contacto</MenuItemLink>
                    </MenuItem>

                    <BarsMenu>
                        <FaBars style={{ fontSize: '30px' }} />
                    </BarsMenu>

                    <CartShop>
                        <FaShoppingCart />
                        <span>Carrito</span>
                    </CartShop>
                </Menu>
            </Wrapper>
        </Container>
    )
}
