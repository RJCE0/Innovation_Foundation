import React, { useState } from 'react'
import { Navbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'
import Footer from '../components/footer';
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
      <div style={{ display: 'flex', height: '500px', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Welcome!</h1>
      </div>
      <Footer />
    </>
  );
}
