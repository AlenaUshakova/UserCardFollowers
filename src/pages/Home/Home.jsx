import { HiArrowRight } from 'react-icons/hi';

import { BackLink } from 'components/BackLink/BackLink';

import follow from '../../images/Follow.png';
import following from '../../images/Following.png';
import { HomeContainer } from './Home.styled';
import { ImageContainer } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to the Tweets application</h1>
      <ImageContainer to="/tweets">
        <img src={follow} alt="follow" />
        <img src={following} alt="following" />
      </ImageContainer>
      <BackLink to="/tweets">
        Go to Tweets
        <HiArrowRight size="24" />
      </BackLink>
    </HomeContainer>
  );
};

export default Home;
