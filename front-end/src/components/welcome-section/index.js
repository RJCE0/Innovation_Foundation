import React, { useState } from 'react'
import Video from '../../assets/videos/video.mp4'
import {
  WelcomeContainer,
  WelcomeBg,
  VideoBg,
  WelcomeBtnWrapper,
  WelcomeContent,
  WelcomeP,
  WelcomeH1,
  ArrowForward,
  ArrowRight
} from './welcomeElements'
import { Button } from '../utils/buttonElement'

export const WelcomeSection = () => {
  const [hoverInternship, setHoverInternship] = useState(false);
  const onHoverIntern = () => {
    setHoverInternship(!hoverInternship)
  }

  const [hoverMentorship, setHoverMentorship] = useState(false);
  const onHoverMentor = () => {
    setHoverMentorship(!hoverMentorship)
  }

  return (
    <WelcomeContainer id="home">
      <WelcomeBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </WelcomeBg>
      <WelcomeContent>
        <WelcomeH1>Good Afternoon!</WelcomeH1>
        <WelcomeP>
          It is nice to see you again.
      </WelcomeP>
        <WelcomeBtnWrapper>
          <Button to="/internships" onMouseEnter={onHoverIntern} onMouseLeave={onHoverIntern} fontBig>
            View Internships {hoverInternship ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <Button to="/mentorships" onMouseEnter={onHoverMentor} onMouseLeave={onHoverMentor} fontBig>
            View Mentorships  {hoverMentorship ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </WelcomeBtnWrapper>
      </WelcomeContent>
    </WelcomeContainer>
  );
}