import React from 'react'

import styled from 'styled-components'

import { MenuItem, MenuItemLink } from "./NavBarElements";

import { MdEmail } from 'react-icons/md';

const BottomContainer = styled.section`
    display: flex;
    width: 90%;
    margin: auto;
    border-top: 1px solid #593A2E;
`;

const BottomWrapper = styled.div`
    display: flex;
    justify-content: start;
    padding: 40px 0px 80px 0px;
    gap: 70%;
`;

const Nav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    & h3{
        font-size: 18px;
    }
`;

const Email = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    & div{
        display: flex;
    }
`;


export const BottomNav = () => {
  return (
    <BottomContainer>
        <BottomWrapper>
            <Nav>
                <h3>Navegacion</h3>
                <MenuItem>
                    <MenuItemLink to="/products">Productos</MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink to="/about">Nosotros</MenuItemLink>
                </MenuItem>

                <MenuItem>
                    <MenuItemLink to="/contact">Contacto</MenuItemLink>
                </MenuItem>
                </Nav>
            <Email>
                <div>
                    <MdEmail />
                    <h4>E-mail</h4>
                </div>
                <span>Pet.Paradise@petshop.ar</span>
            </Email>
        </BottomWrapper>
    </BottomContainer>
  )
}
