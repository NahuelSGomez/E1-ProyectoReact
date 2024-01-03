import React from 'react';
import { Link } from 'react-router-dom'
import { ContainerProducts, ProductWrapper, ShowMoreBtn, CardProduct } from './ProductsElements';

import { ProductTitle, AddButton } from "../components/FeaturedElements";

import DogJacket from '../img&icons/small-dog-with-warm-jacket-6224.jpg'
import SkinBed from '../img&icons/skin-bed.jpg'
import FishBowl from '../img&icons/fish-bowl.jpg'
import Gretel from '../img&icons/gretel-cat.jpg'

export const Products = () =>{
    return (
            <ContainerProducts id="product-section" >
                <h3>Todos los productos</h3>
                <ProductWrapper>
                    <CardProduct>
                        <img src= { DogJacket } alt="" />
                        <ProductTitle>
                            <h4>Abrigo Tom</h4>
                            <span>$8.000</span>
                        </ProductTitle>
                        <AddButton>Comprar</AddButton>
                    </CardProduct>
                        
                    <CardProduct>
                        <img src= { SkinBed } alt="" />
                        <ProductTitle>
                            <h4>Cama Piel</h4>
                            <span>$25.000</span>
                        </ProductTitle>
                        <AddButton>Comprar</AddButton>
                    </CardProduct>

                    <CardProduct>
                        <img src= { FishBowl } alt="" />
                        <ProductTitle>
                            <h4>Pecera Bob</h4>
                            <span>$9.000</span>
                        </ProductTitle>
                        <AddButton>Comprar</AddButton>
                    </CardProduct>

                    <CardProduct>
                        <img src= { Gretel } alt="" />
                        <ProductTitle>
                            <h4>Camino Gretel</h4>
                            <span>$57.000</span>
                        </ProductTitle>
                        <AddButton>Comprar</AddButton>
                    </CardProduct>
                    <CardProduct>
                        <img src= { DogJacket } alt="" />
                        <ProductTitle>
                            <h4>Abrigo Tom</h4>
                            <span>$8.000</span>
                        </ProductTitle>
                        <AddButton>Comprar</AddButton>
                    </CardProduct>
                        
                    <CardProduct>
                        <img src= { SkinBed } alt="" />
                        <ProductTitle>
                            <h4>Cama Piel</h4>
                            <span>$25.000</span>
                        </ProductTitle>
                        <AddButton>Comprar</AddButton>
                    </CardProduct>

                    <CardProduct>
                        <img src= { FishBowl } alt="" />
                        <ProductTitle>
                            <h4>Pecera Bob</h4>
                            <span>$9.000</span>
                        </ProductTitle>
                        <AddButton>Comprar</AddButton>
                    </CardProduct>

                    <CardProduct>
                        <img src= { Gretel } alt="" />
                        <ProductTitle>
                            <h4>Camino Gretel</h4>
                            <span>$57.000</span>
                        </ProductTitle>
                        <AddButton>Comprar</AddButton>
                    </CardProduct>
                </ProductWrapper>
                <ShowMoreBtn>Cargar más</ShowMoreBtn>
            </ContainerProducts>
    )   
}