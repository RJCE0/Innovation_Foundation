import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #000;
    left: 0;
    bottom: 0;
    width: 100%;
`

export const FooterWraps = styled.div`
    display: flex;
    padding-top: 25px;
    padding-bottom: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

    @media screen and (max-width: 700px){
        padding-top: 32px;
    }
`
export const FooterLinksWraps = styled.div`
    display: flex;

    @media screen and (max-width: 700px){
        flex-direction: column;

    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 150px;
    color: #fff;

    @media screen and (max-width: 700px) {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 400px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    transition: 0.15s ease-in-out;

    &:hover {
        color: #256de1;
        transition: 0.15s ease-in-out
    }
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 25px auto 25px auto;
    gap: 10px;
`

export const SocialMediaLink = styled(Link)``

export const WebsiteRights = styled.small`
    color: #fff;
`







