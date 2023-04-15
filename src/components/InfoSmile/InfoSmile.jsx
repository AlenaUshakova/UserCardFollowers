import { StyledIncomeSmile, StyledIncomeSmileText } from './InfoSmile.styled';
import logo from '../../images/Sad.png';

export const InfoSmile = () => {
  return (
    <StyledIncomeSmile>
      <img src={logo} alt="logo" width={200} />
      <StyledIncomeSmileText>
        You haven't tracked anyone yet
      </StyledIncomeSmileText>
    </StyledIncomeSmile>
  );
};