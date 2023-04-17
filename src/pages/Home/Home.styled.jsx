import styled, { keyframes } from 'styled-components';
import { StyledLink } from 'components/BackLink/BackLink.styled';
import { NavLink } from 'react-router-dom';

const zoomInOut = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
  
`;

export const HomeContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: #5736a3;
  ${StyledLink} {
    font-size: 30px;
    color: #5736a3;
    transition: transform linear 250ms;

    :hover,
    :focus {
      transform: scale(1.1);
    }
  }
`;

export const ImageContainer = styled(NavLink)`
  margin-top: 80px;
  margin-bottom: 50px;

  img {
    animation: ${zoomInOut} 5s linear infinite;
  }

  img:first-child {
    animation-delay: 0s;
  }

  img:last-child {
    animation-delay: 2.5s;
  }
`;
