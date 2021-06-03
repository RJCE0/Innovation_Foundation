import styled from "styled-components"

export const OpportunityCardGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 25px;
  padding-bottom: 25px;
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`

export const Button = styled.button`
  padding: 8px;
  border: none;
  border-radius: 18px;
  background-color: ${props => props.backgroundColor};
  color: white;

  &:hover {
    background-color: white;
    color: ${props => props.backgroundColor};
  }
`