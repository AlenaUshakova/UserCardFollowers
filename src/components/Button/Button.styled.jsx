import styled from 'styled-components';

export const LoadMore = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #5736a3;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 25px auto;
  color: #fff;
  border: 0;
  text-decoration: none;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    scale: 1.1;
  }
`;