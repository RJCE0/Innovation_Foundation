import styled from "styled-components";

/*
  <ExclusivePageContainer>
    <ExclusiveHeader>
      <ExclusiveImage />
      <ExclusiveTitle />
    </ExclusiveHeader>
  </ExclusivePageContainer>
 */

export const ExclusivePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Nunito";
  color: black;
  background-color: white;
  width: 100%;
  padding: 20px 15px 20px 15px;
  align-items: center;
  gap: 40px;
`;

export const ExclusiveHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px 30px 30px 30px;
  overflow: hidden;
  border-bottom: 3px rgba(0, 0, 0, 0.4) solid;
  gap: 30px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ExclusiveHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ExclusiveImage = styled.img`
  height: 150px;
  box-shadow: -10px 10px 15px rgba(0, 0, 0, 0.3);
`;

export const ExclusiveTitle = styled.h2``;

export const ApplyButtonsWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const ApplyButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: -10px 10px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  justify-content: center;

  @media screen and (max-width: 700px) {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);
    border: none;
  }
`;

export const ApplyButtonComponent = styled.button`
  border: none;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  width: 150px;
  height: 40px;
  padding: 2px 2px 2px 2px;
  font-weight: bold;
  border: 3px solid ${(props) => props.backgroundColor};

  &:hover {
    background-color: white;
    color: ${(props) => props.backgroundColor};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
