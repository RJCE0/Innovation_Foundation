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

export const Button = styled.button`
  padding: 15px 5px 15px 5px;
  background: ${(props) => props.bg};
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  border: 1px solid ${(props) => props.bg};
  border-radius: 10px;
  width: 75%;
  margin-bottom: 10px;

  &:hover {
    color: ${(props) => props.bg};
    background: white;
  }
`;

export const ApplicationsCard = styled.div`
  width: 90%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: row;
  transition: all 0.2s ease-in-out;
  gap: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 20px;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const LinkL = styled(Link)`
  text-decoration: none;
  user-select: none;
  color: inherit;
  height: 100%;
  width: 25%;
  align-self: center;
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 100%;
    border-bottom: 2px solid rgba(0, 0, 0, 1);
    height: 50%;
  }

  &:hover {
    color: inherit;
  }
`;

export const LinkR = styled(Link)`
  text-decoration: none;
  user-select: none;
  color: inherit;
  height: 100%;

  &:hover {
    color: inherit;
  }
`;

export const ApplicationsCardLogo = styled.img`
  width: 100%;
  height: 90%;
  max-height: 200px;

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
