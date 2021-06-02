import styled from 'styled-components'
import {
    NavLink as Navlink 
} from 'react-router-dom'
import { FaBars } from 'react-icon'

export const Nav = styled.nav`
    background: #000;
    height: 75px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) /2);
    z-index: 10;
`

export const NavLink = styled(Navlink)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        color: #15cdfc;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and {max-width: 700px} {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.5rem;
        cursor: pointer;
    }
`
