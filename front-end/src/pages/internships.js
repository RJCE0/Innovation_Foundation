import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'
import Footer from '../components/footer';
import firebase from '../firebase';
import { OppCard } from '../components/opportunity-card/opportunityCard';
import { OppContainer, OppWrapper, OppH1 } from '../components/opportunity-card/oppCardElements'

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const [internships, setInternships] = useState([]);
  const ref = firebase.firestore().collection("opportunities");
  console.log(ref);
  
  function getInternships(){
      ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
          items.push(doc.data());
      });
      setInternships(items);
      });
  }

  useEffect(() => {
      getInternships();
  });

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleIsOpen} />
      <Navbar toggle={toggleIsOpen} />
      <OppContainer>
        <OppH1>Opportunities</OppH1>
        <OppWrapper>
        {internships.map((internship) => (
          <OppCard
           title={internship.title}
           description={internship.description}
           date={internship.date}
           pay={internship.pay}
           location={internship.location}
           favs={internship.favourites}
          />))}
        </OppWrapper>
      </OppContainer>
      <Footer />
    </>
  )
}