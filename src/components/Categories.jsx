import React from 'react';
import { CategoryContainer, CategoryCardContainer, CategoriesWrapper, CategoryImg, CategoryButton } from './CategoriesElements';

import PicDog from '../img&icons/pic_dog.jpg'
import PicCat from '../img&icons/pic_cat.jpg'
import PicBird from '../img&icons/pic-bird.jpg'
import PicMore from '../img&icons/pic_more.jpg'

export const Categories = () =>{
    return (
        <CategoryContainer id="categories-section" >
            <h3>Categorias</h3>
            
            <CategoriesWrapper>
            
            <CategoryCardContainer>
                <CategoryImg>
                    <img src= { PicDog } alt="" />
                    <h3>PERROS</h3>
                </CategoryImg>
                <CategoryButton>Ver</CategoryButton>
            </CategoryCardContainer>
            
            <CategoryCardContainer>
                <CategoryImg>
                    <img src= { PicCat } alt="" />
                    <h3>GATOS</h3>
                </CategoryImg>
                <CategoryButton>Ver</CategoryButton>
            </CategoryCardContainer>
            
            <CategoryCardContainer>
                <CategoryImg>
                    <img src= { PicBird } alt="" />
                    <h3>AVES</h3>
                </CategoryImg>
                <CategoryButton>Ver</CategoryButton>
            </CategoryCardContainer>
            
            <CategoryCardContainer>
                <CategoryImg>
                    <img src= { PicMore } alt="" />
                    <h3>Y MÁS...</h3>
                </CategoryImg>
                <CategoryButton>Ver</CategoryButton>
            </CategoryCardContainer>

            </CategoriesWrapper>
            

        </CategoryContainer>
    )
}