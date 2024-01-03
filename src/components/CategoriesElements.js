import styled from 'styled-components';


export const CategoryImg = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    
    & img{
        display: flex;
        justify-content: center;
        margin: auto;
        width: 100%;
    }

    & h3{
        display: flex;
        padding: 12px 47px;
        justify-content: center;
        align-items: center;
        background: #593A2E;
        color: #fff;
    }
`;

export const CategoryContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin: auto;
    gap: 40px;
    padding: 40px;

    & h3{
        font-size: 24px;
        font-family: Monserrat;
    }
`;

export const CategoriesWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 630px){
        flex-direction: column;
        justify-content: center;
    }
`;

export const CategoryCardContainer = styled.div`
    display: flex;
    max-width: 250px;
    padding: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13px;
    border-radius: 10px;
    background: #BFA893;
`;

export const CategoryButton = styled.button`
    display: flex;
    width: 95%;
    height: 41px;
    padding: 15px 48px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    border-radius: 5px;
    background: #344029;
    color: #fff;
    cursor: pointer;
`;