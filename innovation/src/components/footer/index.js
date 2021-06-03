import React from 'react'
import {
    FooterContainer, FooterWraps, FooterLinksWraps,
    FooterLinkItems, FooterLinkTitle, FooterLink, SocialMediaWrap,
    WebsiteRights, SocialMediaLink
} from './footerElements';
// import snapLogo from '../../assets/images/snapchat-logo.png';
// import instaLogo from '../../assets/images/instagram-logo.png';
// import twitterLogo from '../../assets/images/twitter-logo.png';
// import gPlusLogo from '../../assets/images/google-plus-logo.png';
// import { FiTwitter } from 'react-icons/fi'
// import { AiFillAlert } from "react-icons/ai";
import { SocialIcon } from 'react-social-icons';

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
                        <SocialIcon network="snapchat" bgColor="white" />
                    </SocialMediaLink>
                    <SocialMediaLink>
                        <SocialIcon network="twitter" bgColor="white" />
                    </SocialMediaLink>
                    <SocialMediaLink>
                        <SocialIcon network="instagram" bgColor="white" />
                    </SocialMediaLink>
                    <SocialMediaLink>
                        <SocialIcon network="google" bgColor="white" />
                    </SocialMediaLink>
                </SocialMediaWrap>
                <WebsiteRights> Innovation Inc © {new Date().getFullYear()}{"\t"} All rights reserved.
                </WebsiteRights>
            </FooterWraps>
        </FooterContainer>
    )
}

export default Footer
// In the index page for all the pages, put it in the return statement and remember to import