import React, { useState } from 'react'
import { Navbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'
import Footer from '../components/footer';
import { WelcomeSection } from '../components/welcome-section/index'
// import firebase from "../firebase"

export const NewHome = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleIsOpen} />
      <Navbar toggle={toggleIsOpen} />
      <WelcomeSection />
      <Footer />
    </>
  );
}
