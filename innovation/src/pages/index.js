import React, { useState } from 'react'
import { Navbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleIsOpen} />
      <Navbar toggle={toggleIsOpen} />

    </>
  )
}
