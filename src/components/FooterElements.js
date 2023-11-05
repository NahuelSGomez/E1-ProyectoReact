import styled from 'styled-components';
import { LogoContainer, Menu } from './NavBarElements';


export const ContainerFooter = styled.footer`
    border-top: 3px solid #BFA893;
    background-color: white;
    width: 100%;
    min-height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
`;

export const MenuFooter = styled(Menu)`
    gap: 10px;
`;

export const LogoContainerFooter = styled(LogoContainer)`
    margin: 2px;
    font-size: 20px;
    height: 14px;
    display: flex;
    align-items: center;

    & p{
        font-size: 12px;
    }
`;