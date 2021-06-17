import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavAvatar,
  NavAvatarLink,
  OuterLogo,
  InnerLogo,
  LogoLink,
  Avatar,
} from "./navbarElements";
import outerLogo from "../../img/outer-logo.png";
import innerLogo from "../../img/inner-logo.png";
import image_src from "../../img/user.png";
import AvatarDropdown from "./AvatarDropdown";
//import Navbar from 'react-bootstrap/Navbar'

export const DiscoverNavbar = (props) => {
  return (
    <>
        <Nav >
          <LogoLink to="/discover">
            <OuterLogo src={outerLogo} alt="wheel" />
            <InnerLogo src={innerLogo} alt="in" />
          </LogoLink>
          <Bars onClick={props.toggle} />
          <NavMenu>
            <NavLink to="/discover">Home</NavLink>
            <NavLink to="/internships"> Internships</NavLink>
            <NavLink to="/mentorships>">Mentorships</NavLink>
            <NavLink to="/student-blog">Student Blog</NavLink>
          </NavMenu>
          <NavAvatar>
          <NavAvatarLink>
            <AvatarDropdown {...image_src}/>
            </NavAvatarLink>
          </NavAvatar>
        </Nav>
    </>
  );
};