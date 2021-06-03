import React from 'react'
import {
    FooterContainer, FooterWraps, FooterLinksContainer, FooterLinksWraps,
    FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap,
    SocialLogo, WebsiteRights
} from './footerElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWraps>
                <FooterLinksContainer>
                    <FooterLinksWraps>
                        <FooterLinkItems>
                            <FooterLinkTitle>Students</FooterLinkTitle>
                            <FooterLink to='/link'>internships</FooterLink>
                            <FooterLink to='/link'>mentorships</FooterLink>
                            <FooterLink to='/link'>student Blog</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Business </FooterLinkTitle>
                            <FooterLink to='/link'>real-time</FooterLink>
                            <FooterLink to='/link'>demographic</FooterLink>
                            <FooterLink to='/link'>behaviours</FooterLink>
                            <FooterLink to='/link'>conversions</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/link'>our aims</FooterLink>
                            <FooterLink to='/link'>team</FooterLink>
                            <FooterLink to='/link'>contact us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWraps>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Innovation
                        </SocialLogo>
                        <WebsiteRights> Innovation Inc © {new Date().getFullYear()}{"\t"}
                             All rights reserved.
                        </WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWraps>
        </FooterContainer>
    )
}

export default Footer
// In the index page for all the pages, put it in the return statement and remember to import