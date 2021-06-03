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
                            <FooterLinkTitle>Title1</FooterLinkTitle>
                            <FooterLink to='/link'>link1</FooterLink>
                            <FooterLink to='/link'>link2</FooterLink>
                            <FooterLink to='/link'>link3</FooterLink>
                            <FooterLink to='/link'>link4</FooterLink>
                            <FooterLink to='/link'>link5</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Title2 </FooterLinkTitle>
                            <FooterLink to='/link'>link6</FooterLink>
                            <FooterLink to='/link'>link7</FooterLink>
                            <FooterLink to='/link'>link8</FooterLink>
                            <FooterLink to='/link'>link9</FooterLink>
                            <FooterLink to='/link'>link10</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWraps>
                    <FooterLinksWraps>
                        <FooterLinkItems>
                            <FooterLinkTitle>Title3</FooterLinkTitle>
                            <FooterLink to='/link'>link1</FooterLink>
                            <FooterLink to='/link'>link2</FooterLink>
                            <FooterLink to='/link'>link3</FooterLink>
                            <FooterLink to='/link'>link4</FooterLink>
                            <FooterLink to='/link'>link5</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Title4 </FooterLinkTitle>
                            <FooterLink to='/link'>link6</FooterLink>
                            <FooterLink to='/link'>link7</FooterLink>
                            <FooterLink to='/link'>link8</FooterLink>
                            <FooterLink to='/link'>link9</FooterLink>
                            <FooterLink to='/link'>link10</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWraps>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Innovation
                        </SocialLogo>
                        <WebsiteRights> Innovation Inc © {new Date().getFullYear()} 
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