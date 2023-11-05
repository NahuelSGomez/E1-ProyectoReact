import styled from 'styled-components';

export const ContainerProducts = styled.section`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 40px;

    & h3{
        font-size: 24px;
        font-family: Monserrat;
    }
`;

export const ProductWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 20px;
    flex-wrap: wrap;
`;


export const ShowMoreBtn = styled.button`
    display: flex;
    margin: auto;
    width: 248px;
    height: 41px;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 2px solid #344029;
    cursor: pointer;
    font-size: 14px;
`;