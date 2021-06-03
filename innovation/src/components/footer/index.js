import React from 'react'
import {
    FooterContainer, FooterWraps, FooterLinksWraps,
    FooterLinkItems, FooterLinkTitle, FooterLink, SocialMediaWrap,
    SocialLogo, WebsiteRights, SocialMediaLink
} from './footerElements';
import logo from '../../assets/images/snapchat-logo.png'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWraps>
                <FooterLinksWraps>
                    <FooterLinkItems>
                        <FooterLinkTitle>Students</FooterLinkTitle>
                        <FooterLink to='/link'>Internships</FooterLink>
                        <FooterLink to='/link'>Mentorships</FooterLink>
                        <FooterLink to='/link'>Student Blog</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Business </FooterLinkTitle>
                        <FooterLink to='/link'>Real-time</FooterLink>
                        <FooterLink to='/link'>Demographic</FooterLink>
                        <FooterLink to='/link'>Behaviours</FooterLink>
                        <FooterLink to='/link'>Conversions</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/link'>Our Aims</FooterLink>
                        <FooterLink to='/link'>Team</FooterLink>
                        <FooterLink to='/link'>Contact Us</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWraps>
                <SocialMediaWrap>
                    <SocialMediaLink>
                        <SocialLogo src={logo} />
                    </SocialMediaLink>
                    <SocialMediaLink>
                        <SocialLogo src={logo} />
                    </SocialMediaLink>
                </SocialMediaWrap>
                <WebsiteRights> Innovation Inc © {new Date().getFullYear()}{"\t"}
                    All rights reserved.
                </WebsiteRights>
            </FooterWraps>
        </FooterContainer>
    )
}

export default Footer
// In the index page for all the pages, put it in the return statement and remember to import