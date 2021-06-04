import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'
import Footer from '../components/footer';
import OpportunityCard from '../components/opportunity-card/OpportunityCard';
import { OpportunityCardGroup } from '../components/opportunity-card/cardElements';
import firebase from '../firebase'

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
      <OpportunityCardGroup>
        {internships.map((internship) => (
           <OpportunityCard
           title={internship.title}
           desc={internship.description}
           date={internship.date}
           salary={internship.pay}
           location={internship.location}
           favs={internship.favourites}
         />
        ))}
      </OpportunityCardGroup>
      <Footer />
    </>
  )
}