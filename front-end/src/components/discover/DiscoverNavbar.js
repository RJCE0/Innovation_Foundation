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
} from "./navbarElements";
import outerLogo from "../../img/outer-logo.png";
import innerLogo from "../../img/inner-logo.png";
import AvatarDropdown from "./AvatarDropdown";
import { StudentSideLinks, BusinessSideLinks } from "../../constants";

export const DiscoverNavbar = (props) => {
  return (
    <>
      <Nav>
        <LogoLink to={props.student ? "/discover" : "/business-home"}>
          <OuterLogo src={outerLogo} alt="wheel" />
          <InnerLogo src={innerLogo} alt="in" />
        </LogoLink>
        <Bars onClick={props.toggle} />
        <NavMenu>
          {props.links.map(({ text, dest }, index) => (
            <NavLink to={dest} key={index}>
              {text}
            </NavLink>
          ))}
        </NavMenu>
        {/* Change to company logo? */}
        <NavAvatar>
          <NavAvatarLink>
            <AvatarDropdown
              links={props.student ? StudentSideLinks : BusinessSideLinks}
            />
          </NavAvatarLink>
        </NavAvatar>
      </Nav>
    </>
  );
};
