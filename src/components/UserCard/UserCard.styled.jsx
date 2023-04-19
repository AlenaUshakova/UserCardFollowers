import styled from 'styled-components';

import bigIm from '../../images/bgIm@1x.png';
import bigIm2 from '../../images/bgIm@2x.png';

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ImgContainer = styled.div`
  height: 214px;
  width: 100%;
  padding-top: 20px;
  padding-left: 20px;

  background-image: url(${bigIm});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 308px 168px;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${bigIm2});
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 85.9232px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  img {
    background-color: #5736a3;
    border-radius: 85.9232px;
    transition: transform linear 250ms;

    :hover,
    :focus {
      transform: scale(1.1);
    }
  }
`;

export const TweetsContainer = styled.div`
  height: 238px;
  padding-top: 62px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;
  color: #ebd8ff;

  p:first-of-type {
    margin-bottom: 16px;
  }
  p:last-of-type {
    margin-bottom: 26px;
  }
`;

export const TweetsBtn = styled.button`
  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background: ${props => (props.following ? '#5CD3A8' : ' #ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  padding: 14px 28px;
  width: 196px;

  transition: transform linear 250ms;

  :hover {
    transform: scale(1.1);
  }
`;
