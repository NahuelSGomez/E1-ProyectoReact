import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerHero, HeroTop, LogoHero, SearchTop, HeroBottom, HeroInfo, HeroCartShop } from "./HeroElements";

import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa'

import Logo from '../img&icons/perro_logo.svg';
import ImgHero from '../img&icons/Rectangle 9.svg'


export const Hero = () => {
    return (
        <ContainerHero>
            <HeroTop>
                <LogoHero>
                    <img src= { Logo } alt="logo" />
                    <h1>El paraiso para tu mejor amigo</h1>
                </LogoHero>
                <SearchTop>
                    <input type="text" placeholder='Buscar productos o categorías'></input>
                    <FaSearch />
                </SearchTop>
            </HeroTop>
            <HeroBottom>
                <HeroInfo>
                    <div>
                    <p>Tu mascota es una parte importante de tu familia, y nosotros queremos que esté feliz y saludable.<br></br>
                    En Pet Paradise encontrarás todo lo que necesitas para que tu mascota tenga una vida plena y llena de amor.</p>
                    </div>
                    <HeroCartShop>
                        <Link to="products">
                            <FaShoppingCart />
                            Ir al Shop
                        </Link>
                    </HeroCartShop>
                </HeroInfo>
                <img src={ImgHero} alt="perros" />
            </HeroBottom>
        </ContainerHero>
    )
}