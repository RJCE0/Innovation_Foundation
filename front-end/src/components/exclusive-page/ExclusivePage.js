import React from "react";
import { DiscoverNavbar } from "../discover/DiscoverNavbar";
import Footer from "../layout/Footer";
import {
  ExclusiveTitleWrapper,
  ExclusivePageContainer,
  ExclusiveCompName,
  ExclusiveHeader,
  ExclusiveImage,
  ExclusiveTitle,
  ExclusiveHeaderLeft,
  ApplyButtonsWrapper,
  ApplyButtons,
  ApplyButtonComponent,
} from "./ExclusiveElements";
import logo from "../../img/innovation-logo.png";

export const ExclusivePage = () => {
  return (
    <>
      <DiscoverNavbar />
      <ExclusivePageContainer>
        <ExclusiveHeader>
          <ExclusiveHeaderLeft>
            <ExclusiveImage src={logo} />
            <ExclusiveTitleWrapper>
              <ExclusiveTitle>
                Introduction To Coding{" "}
                <ExclusiveCompName>by Facebook</ExclusiveCompName>
              </ExclusiveTitle>
            </ExclusiveTitleWrapper>
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
