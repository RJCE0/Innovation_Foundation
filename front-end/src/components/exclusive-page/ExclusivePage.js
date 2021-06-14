import React from "react";
import { DiscoverNavbar } from "../discover/DiscoverNavbar";
import Footer from "../layout/Footer";
import {
  ExclusivePageContainer,
  ExclusiveHeader,
  ExclusiveImage,
  ExclusiveTitle,
  ExclusiveHeaderLeft,
  ApplyButtonsWrapper,
  ApplyButtons,
  ApplyButtonComponent,
} from "./ExclusiveElements";
import logo from "../../img/innovation-logo.png";
import { useLocation } from "react-router";

export const ExclusivePage = () => {
  const opp = useLocation().state;
  return (
    <>
      <DiscoverNavbar />
      <ExclusivePageContainer>
        <ExclusiveHeader>
          <ExclusiveHeaderLeft>
            <ExclusiveImage src={logo} />
            <ExclusiveTitle>{opp.title}</ExclusiveTitle>
          </ExclusiveHeaderLeft>
          <ApplyButtonsWrapper>
            <ApplyButtons>
              <ApplyButtonComponent backgroundColor="#256de1">
                Apply
              </ApplyButtonComponent>
              <ApplyButtonComponent backgroundColor="#f8c51c">
                Favourite
              </ApplyButtonComponent>
            </ApplyButtons>
          </ApplyButtonsWrapper>
        </ExclusiveHeader>
      </ExclusivePageContainer>
      <Footer />
    </>
  );
};
