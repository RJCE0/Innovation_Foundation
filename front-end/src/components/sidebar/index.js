import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarMenu } from './sidebarElements'

export const Sidebar = (props) => {
  return (
    <SidebarContainer isOpen={props.isOpen}>
      <Icon onClick={props.toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>
          Home
        </SidebarLink>
        <SidebarLink to='/internships'>
          Internships
        </SidebarLink>
        <SidebarLink to='/mentorships'>
          Mentorships
        </SidebarLink>
        <SidebarLink to='/student-blog'>
          Student Blog
        </SidebarLink>
        <SidebarLink to='/signin'>
          Sign In
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
}
