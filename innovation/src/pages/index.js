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
          salary='£7 p/h'
          location='London'
          favs='3'
        />
        <OpportunityCard
          title='Internship 2'
          desc='Example internship 2.'
          date='June 3rd 2021'
          salary='£10 p/h'
          location='Amsterdam'
          favs='1'
        />
        <OpportunityCard
          title='Internship 3'
          desc='Example Internship 3.'
          date='June 3rd 2021'
          salary='£15 p/h'
          location='Amsterdam'
          favs='2'
        />
      </OpportunityCardGroup>
      <Footer />
    </>
  )
}