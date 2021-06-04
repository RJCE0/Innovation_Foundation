import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  border-radius: 50px;
  background: #256de1;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: white;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: white;
    transition: all 0.2s ease-in-out;
    color: #256de1;
    border: 2px #256de1 solid;
  }
`
