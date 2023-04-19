import logo from '../../images/Sad.png';
import { StyledInfoSmile, StyledInfoSmileText } from './InfoSmile.styled';

export const InfoSmile = () => {
  return (
    <StyledInfoSmile>
      <img src={logo} alt="logo" width={200} />
      <StyledInfoSmileText>You haven't tracked anyone yet</StyledInfoSmileText>
    </StyledInfoSmile>
  );
};
