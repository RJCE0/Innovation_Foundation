import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';
export const Navbar = () => {
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
                    <NavLink to="/internships" activeStyle>
                        Internships
                    </NavLink>
                    <NavLink to="/mentoships" activeStyle>
                        Mentorships
                    </NavLink>
                    <NavLink to="/student-blog" activeStyle>
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