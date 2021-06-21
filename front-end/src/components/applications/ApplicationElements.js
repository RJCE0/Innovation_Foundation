import styled from "styled-components";
import { Link } from "react-router-dom";

export const ApplicationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-family: "Nunito";
  padding: 40px 0 40px 0;
  gap: 40px;
`;

export const ApplicationsH1 = styled.h1`
  text-align: center;
`;

export const ApplicationsCardsWrapper = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  row-gap: 20px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const ApplicationsCard = styled(Link)`
  width: 90%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  padding: 5% 5% 5% 5%;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  user-select: none;
  color: inherit;
  transition: all 0.2s ease-in-out;
  height: 300px;
  gap: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 20px;
    height: 400px;
  }

  &:hover {
    color: inherit;
    transform: scale(1.02);
  }
`;

export const ApplicationsCardLogoContainer = styled.div`
  width: 25%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    border-bottom: 2px solid rgba(0, 0, 0, 1);
    height: 50%;
  }
`;

export const ApplicationsCardLogo = styled.img`
  width: 100%;
  height: 90%;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const ApplicationsCardInfo = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    align-items: center;
    height: 50%;
    width: 100%;
    text-align: center;
  }
`;
