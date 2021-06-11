import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  position: relative;
  top: 0;
`;

export const NavAvatarLink = styled(LinkR)`
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: 12px;
  font-weight: bold;
  text-decoration: none;
  position: relative;
`;

export const OuterLogo = styled.img`
  width: 60px;
  height: 60px;
  position: relative;
  top: 0;
  left: 1px;
  animation: rotation 5s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export const InnerLogo = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 2px;
  left: 0px;
`;

export const LogoLink = styled(LinkR)`
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 12px;
  font-weight: bold;
  text-decoration: none;
  position: relative;
`;

export const Nav = styled.nav`
  background: #000;
  height: 75px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  position: sticky;
  width: 100%;
  top: 0;
`;

export const NavLink = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: "Nunito";
  font-size: 1.2rem;

  &:active {
    border-bottom: #256de1 solid;
  }

  &:hover {
    color: #256de1;
    transition: 0.3s ease-out;
  }
`;

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
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -20px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavAvatar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
// export const NavAvatarLink = styled(LinkR)`
//   border-radius: 20px;
//   background: #256de1;
//   padding: 8px 20px;
//   color: #fff;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   transition: all 0.5s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #256de1;
//   }
// `;
