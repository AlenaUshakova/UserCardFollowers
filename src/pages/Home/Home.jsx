import { HomeContainer } from './Home.styled';
import { BackLink } from 'components/BackLink/BackLink';
import { ImageContainer } from './Home.styled';
import { HiArrowRight } from 'react-icons/hi';
import follow from '../../images/Follow.png';
import following from '../../images/Following.png';

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
