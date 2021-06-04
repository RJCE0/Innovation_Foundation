import styled from "styled-components";

export const OppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 750px;
  background: white;

  @media screen and (max-width: 700px) {
    height: 1100px;
  }

  @media screen and (max-width: 400px) {
    height: 1300px;
  }
`
export const OppWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 50px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const OppIconWrapper = styled.div`
  padding: 10px 10px;
  border-bottom: 2px white solid;
  margin-bottom: 10px;
  border-color: #256de1;
`

export const OppIcon = styled.img`
  height: 160px;
  width: 160px;
`

export const OppH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const OppH2 = styled.h2`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 10px;
`

export const OppP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: white;
`

export const OppButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  bottom: 0;
  margin-top: 10px;
  cursor: pointer;
  gap: 10px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const OppButton = styled.button`
  padding: 15px;
  border-radius: 50px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.fg};
  border: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.hoverFg};
    background-color: ${(props) => props.hoverBg};
  }
`