import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import { SocialIcon } from "react-social-icons";

const FooterContainer = styled.footer`
  background-color: #f1f1f1;
  left: 0;
  bottom: 0;
  width: 100%;
  font-family: Nunito;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 15px;
  gap: 15px;
`;

const FooterLinksWraps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 50px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #505050;

  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 400px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  color: #505050;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  transition: 0.1s ease-in-out;
  color: #256de1;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  gap: 10px;
`;

const WebsiteRights = styled.div`
  color: #505050;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2%;
  width: 50%;
`;

const Row = styled.div`
  text-align: center;
`;

const Names = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  width: 25%;
`;

const Name = styled.div`
  position: relative;
  top: 0;
  font-size: 2rem;
  left: 0;
`;

const Name2 = styled.div`
  color: #256de1;
  font-size: 1.3rem;
  position: absolute;
  left: 0;
  top: 30px;

  @media screen and (max-width: 700px) {
    top: 32px;
    left: 25px;
  }
`;

const BottomLineWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export default () => {
  return (
    <FooterContainer id="footerContainer">
      <FooterLinksWraps>
        <FooterLinkItems>
          <FooterLinkTitle>Students</FooterLinkTitle>
          <FooterLink to="/link">Internships</FooterLink>
          <FooterLink to="/link">Mentoring</FooterLink>
          <FooterLink to="/link">Student Blog</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Business </FooterLinkTitle>
          <FooterLink to="/link">Real-time</FooterLink>
          <FooterLink to="/link">Demographic</FooterLink>
          <FooterLink to="/link">Behaviours</FooterLink>
          <FooterLink to="/link">Conversions</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>About Us</FooterLinkTitle>
          <FooterLink to="/link">Our Aims</FooterLink>
          <FooterLink to="/link">Team</FooterLink>
          <FooterLink to="/link">Contact Us</FooterLink>
        </FooterLinkItems>
      </FooterLinksWraps>
      <BottomLineWrap>
        <Names>
          <Name>
            Innovation
            <Name2>Foundation</Name2>
          </Name>
        </Names>
        <WebsiteRights>
          <Row>
            {" "}
            Innovation Foundation is a not-for-profit Foundation under
            Innovation Inc © {new Date().getFullYear()} {"\n"}
          </Row>
          <Row>
            <FooterLink to="/link"> Privacy Policy</FooterLink> {"\n"}|
            <FooterLink to="/link">{" Terms & Conditions"}</FooterLink> {"\n"}
          </Row>
        </WebsiteRights>
        <SocialMediaWrap id="footer-social">
          <SocialIcon
            network="twitter"
            url="https://www.google.co.uk"
            bgColor="#505050"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            network="facebook"
            url="https://www.google.co.uk"
            bgColor="#505050"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            network="instagram"
            url="https://www.google.co.uk"
            bgColor="#505050"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            network="snapchat"
            url="https://www.google.co.uk"
            bgColor="#505050"
            target="_blank"
            rel="noopener noreferrer"
          />
        </SocialMediaWrap>
      </BottomLineWrap>
    </FooterContainer>
  );
};

// In the index page for all the pages, put it in the return statement and remember to import
