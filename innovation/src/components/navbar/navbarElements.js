import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Logo = styled.img`
    width: 55px;
    height: 55px;
`

export const LogoLink = styled(LinkR)`
    height:100%
`

export const Nav = styled.nav`
    background: #000;
    height: 75px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) /2);
    z-index: 10;
`

export const NavLink = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active {
        border-bottom: #256de1 solid;
    }

    &:hover {
        color: #256de1;
        transition: 0.3s ease-out
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 700px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.5rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -20px;

    @media screen and (max-width: 700px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 20px;

    @media screen and (max-width: 700px) {
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius: 20px;
    background: #256de1;
    padding: 8px 20px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #256de1;
    }
`
