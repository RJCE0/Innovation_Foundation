import React from 'react'
import { OppH2, OppIcon, OppP, OppIconWrapper, OppButtonWrapper, OppButton } from './oppCardElements'
import icon from '../../assets/images/innovation-logo.png'
import { Card } from '../utils/cardElement'

export const OppCard = (props) => {
  return (
    <Card>
      <OppIconWrapper>
        <OppIcon src={icon} />
      </OppIconWrapper>
      <OppH2>{props.title}</OppH2>
      <OppP>{props.description}</OppP>
      <OppP>{props.date}</OppP>
      <OppP>{props.pay}</OppP>
      <OppP>{props.location}</OppP>
      <OppButtonWrapper to="/">
        <OppButton hoverBg='white' hoverFg='#256de1' bg='#256de1' fg='white'>Apply</OppButton>
        <OppButton hoverBg='white' hoverFg='rgb(221, 192, 26)' bg='rgb(225, 160, 45)' fg='white'>Favourite ({props.favs})</OppButton>
      </OppButtonWrapper>
    </Card>
  )
}
