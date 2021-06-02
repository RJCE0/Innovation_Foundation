import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './navbarElements';
export const Navbar = (props) => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1> Innovation </h1>
                </NavLink>
                <Bars onClick={props.toggle} />
                <NavMenu>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/internships">
                        Internships
                    </NavLink>
                    <NavLink to="/mentoships">
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