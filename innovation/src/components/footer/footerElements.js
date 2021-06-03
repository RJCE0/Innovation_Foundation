import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: #101522;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
`

export const FooterWraps = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

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
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 400px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover {
        color: #256de1;
        transition: 0.3s ease-out
    }
`

export const SocialMedia = styled.section`
    position: fixed;
    margin-left: 10px;
    left: 0;
    bottom: 0;
    margin-bottom: 10px;
    max-width: 270px;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 700px){
        flex-direction: column;
    }
`
export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    font-size: 1.5rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 5px;
    font-weight: bold;
`
export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 0px;
`







