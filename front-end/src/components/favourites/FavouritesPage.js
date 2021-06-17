import React from "react";
import { DiscoverNavbar } from "../discover/DiscoverNavbar";
import Footer from "../layout/Footer";
import { CardsWithFilter } from "../common/CardsWithFilter";
import styled from "styled-components";

const FavouritesContainer = styled.div`
  min-height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px 0px 40px 0px;
  font-family: Nunito;
  align-items: center;
`;

const FavouritesWrapper = styled.div`
  width: 90%;
  height: 100%;
`;

export class FavouritesPage extends React.Component {
  render() {
    return (
      <>
        <DiscoverNavbar />
        <FavouritesContainer>
          <h1 style={{ textAlign: "center" }}>My Favourites</h1>
          <FavouritesWrapper>
            <CardsWithFilter noFilter favPage />
          </FavouritesWrapper>
        </FavouritesContainer>
        <Footer />
      </>
    );
  }
}
