import {
  CardContainer,
  ImgContainer,
  Line,
  AvatarContainer,
  TweetsContainer,
  TweetsBtn,
} from './UserCard.styled';
import logo from '../../images/logo.png';

export const UserCard = ({ users, onUpdateUser }) => {
  
  const styleFollowers = followers => {
    return new Intl.NumberFormat('en-US').format(followers);
  };

  return (
    <CardContainer>
      <ImgContainer>
        <img src={logo} alt="logo" width={76} height={22} />
      </ImgContainer>
      <Line />
      <AvatarContainer>
        <img src={users.avatar} alt="avatar" width={62} height={62} />
      </AvatarContainer>
      <TweetsContainer>
        <p>{users.tweets} tweets</p>
        <p>{styleFollowers(users.followers)} Followers</p>
        <TweetsBtn
          following={users.isFollowing}
          onClick={() => onUpdateUser(users.id, users.followers)}
        >
          {users.isFollowing ? 'Following' : 'Follow'}
        </TweetsBtn>
      </TweetsContainer>
    </CardContainer>
  );
};
