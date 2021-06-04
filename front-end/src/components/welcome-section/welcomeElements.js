import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'

export const WelcomeContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 750px;
  position: relative;
  z-index: 1;
`
export const WelcomeBg = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: white
`

export const WelcomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
`

export const WelcomeH1 = styled.h1`
  color: black;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 40px;
  }

  @media screen and (max-width: 400px) {
    font-size: 32px;
  }
`

export const WelcomeP = styled.p`
  color: black;
  font-weight: 550;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  margin-top: 24px;

  @media screen and (max-width: 700px) {
    font-size: 22px;
  }

  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`

export const WelcomeBtnWrapper = styled.div`
  margin-top: 32px;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
