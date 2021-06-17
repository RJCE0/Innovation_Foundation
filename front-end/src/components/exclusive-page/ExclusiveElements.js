import styled from "styled-components";
import { Link } from "react-router-dom";

export const ExclusivePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Nunito";
  color: black;
  background-color: white;
  width: 100%;
  padding: 20px 0 20px 0;
  align-items: center;
  gap: 0px;
`;

export const ExclusiveHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  align-items: center;
  justify-content: center;
  padding: 30px 30px 30px 30px;
  border-bottom: 3px rgba(0, 0, 0, 0.4) solid;
  gap: 30px;
`;

export const ExclusiveImage = styled.img`
  max-height: 300px;
  max-width: 100%;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.8);
`;

export const ExclusiveTitle = styled.h1`
  text-align: center;
`;

export const ExclusiveBreadCrumbs = styled.div`
  display: flex;
  width: 75%;
  justify-content: center;
  flex-direction: row;
  padding: 30px 30px 30px 30px;
  border-bottom: 3px rgba(0, 0, 0, 0.4) solid;
  gap: 30px;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ExclusiveSummary = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 2;
  height: fit-content;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    flex-direction: row;
  }
`;

export const ExclusiveSummaryItem = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const ApplyButtons = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.8);
  border-radius: 25px;
  padding: 20px 20px 20px 20px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    min-width: 80%;
  }
`;

export const ApplyButtonComponent = styled.button`
  color: white;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 25px;
  min-width: fit-content;
  width: 90%;
  padding: 10px 10px 10px 10px;
  font-weight: bold;
  border: 3px solid ${(props) => props.backgroundColor};

  &:hover {
    background-color: white;
    color: ${(props) => props.backgroundColor};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const ExclusiveBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 30px 30px 30px 30px;
  gap: 10px;
`;
export const ExclusiveBodyItem = styled.div`
  display: block;
`;

export const ExclusiveSummaryTitle = styled.h3``;

export const ExclLink = styled(Link)`
  color: white;
  background-color: ${(props) => props.backgroundcolor};
  border-radius: 25px;
  min-width: fit-content;
  width: 90%;
  padding: 10px 10px 10px 10px;
  font-weight: bold;
  border: 3px solid ${(props) => props.backgroundcolor};
  text-align: center;

  &:hover {
    background-color: white;
    color: ${(props) => props.backgroundcolor};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
