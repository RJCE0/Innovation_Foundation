import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Logo,
    LogoLink
} from './navbarElements';
import logo from '../../assets/images/innovation-logo.png'
export const Navbar = (props) => {
    return (
        <>
            <Nav>
                <LogoLink to='/'>
                    <Logo src={logo} alt='logo' />
                </LogoLink>
                <Bars onClick={props.toggle} />
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/internships">
                        Internships
                    </NavLink>
                    <NavLink to="/mentorships">
                        Mentorships
                    </NavLink>
                    <NavLink to="/student-blog">
                        Student Blog
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login"> Sign in </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};