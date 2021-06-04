import styled from 'styled-components'

export const Card = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  transition: 0.15s ease-in-out;

  &:hover {
    transform: scale(1.07);
    transition: 0.15s ease-in-out;
  }
`