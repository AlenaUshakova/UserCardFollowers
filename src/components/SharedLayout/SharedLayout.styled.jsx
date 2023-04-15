import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  background-color: white;
  min-height: 100vh;
  width: 100%;
  font-size: 15px;
  background-color: #e5e9d7;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 100px;
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  left: 0;
  margin: 0 auto;
  z-index: 10;
  width: 100%;
  background-color: #eff0af;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  font-family: inherit;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  transition: color linear 250ms, background-color linear 250ms;

  &.active {
    color: white;
    background-color: #5736a3;
    box-shadow: 1px 11px 11px -4px rgba(54, 80, 228, 0.47);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #5736a3;
  }
`;
