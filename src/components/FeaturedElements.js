import styled from 'styled-components';

import { CategoryButton } from './CategoriesElements';

export const ContainerFeatured = styled.section`
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 40px;
    padding: 40px;
    
    & h3{
        font-size: 24px;
        font-family: "Monserrat";
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    //flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: auto;
    gap: 20px;

    @media (max-width: 1000px){
        flex-wrap: wrap;
    }
`;

export const ContainerCardProduct = styled.div`
    display: flex;
    padding: 18px;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
    gap: 18px;
    border-radius: 19px;
    border: 1.8px solid #593A2E;

    & img{
        width: 100%;
    }
`;

export const ProductTitle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const AddButton = styled(CategoryButton)`
    padding: 15px 50px;
    width: 100%;
`;