import React, { useState } from 'react'
import { Navbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'
import Footer from '../components/footer';
import OpportunityCard from '../components/opportunity-card/OpportunityCard';
import { OpportunityCardGroup } from '../components/opportunity-card/cardElements';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleIsOpen} />
      <Navbar toggle={toggleIsOpen} />
      <OpportunityCardGroup>
        <OpportunityCard
          title='Internship 1'
          desc='Example internship 1.'
          date='June 3rd 2021'
          salary='£21 p/w'
          location='London'
        />
        <OpportunityCard
          title='Internship 2'
          desc='Example internship 2.'
          date='June 3rd 2021'
          salary='£21 p/w'
          location='Amsterdam'
        />
      </OpportunityCardGroup>
      <Footer />
    </>
  )
}