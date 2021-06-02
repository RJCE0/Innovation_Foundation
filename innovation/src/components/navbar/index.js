import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1> Innovation </h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
            </NavLink>
                    <NavLink to="/opportunities" activeStyle>
                        Opportunities
            </NavLink>
                    <NavLink to="/student-blog" activeStyle>
                        Student Blog
            </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact Us
            </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login"> Login </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};