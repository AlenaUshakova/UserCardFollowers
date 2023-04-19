import { useEffect, useState } from 'react';
import { useMemo } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import Select from 'react-select';
import { toast } from 'react-toastify';

import useLocalStorage from 'Hooks/useLocalStorage';
import { BackLink } from 'components/BackLink/BackLink';
import { Button } from 'components/Button/Button';
import { InfoSmile } from 'components/InfoSmile/InfoSmile';
import { Loader } from 'components/Loader/Loader';
import { UserCard } from 'components/UserCard/UserCard';
import { fetchUsers, updateUser } from 'services/ApiUser';
import { filterUsers } from 'utils/filterUsers';
import { pagination } from 'utils/pagination';

import { CardList, OptionContainer, TweetsContainer } from './Tweets.styled';

const options = [
  { value: 'showall', label: 'show all' },
  { value: 'follow', label: 'follow' },
  { value: 'followings', label: 'followings' },
];

const LS_KEY = 'showUsers';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [followingStates, setFollowingStates] = useState({});
  const [selectedOption, setSelectedOption] = useLocalStorage(LS_KEY, {
    value: 'showall,',
    label: 'show all',
  });
  const { value } = selectedOption;

  useEffect(() => {
    const storedStates =
      JSON.parse(localStorage.getItem('followingStates')) || {};

    async function fetchAllUsers() {
      try {
        setIsLoading(true);
        const data = await fetchUsers();
        const updatedUsers = data.map(user => {
          const isFollowing = storedStates[user.id] || false;
          return { ...user, isFollowing };
        });
        setUsers(updatedUsers);
        setFollowingStates(prevStates => ({ ...prevStates, ...storedStates }));
      } catch (error) {
        toast.error('Something went wrong, please try again later');
      } finally {
        setIsLoading(false);
      }
    }
    fetchAllUsers();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'followingStates',
      JSON.stringify({ ...followingStates })
    );
  }, [followingStates]);

  const onUpdateUser = async (id, followers) => {
    const isFollowing = followingStates[id] || false;

    if (!isFollowing) {
      try {
        followers = followers + 1;
        const data = await updateUser(id, { followers });
        const updatedUsers = users.map(oldUser => {
          if (oldUser.id === id) {
            return { ...data, isFollowing: true };
          }
          return oldUser;
        });

        setUsers(updatedUsers);
        setFollowingStates(prevStates => ({ ...prevStates, [id]: true }));
      } catch (error) {
        toast.error('Something went wrong, please try again later');
      }
    } else {
      try {
        followers = followers - 1;
        const data = await updateUser(id, { followers });
        const updatedUsers = users.map(oldUser => {
          if (oldUser.id === id) {
            return { ...data, isFollowing: false };
          }
          return oldUser;
        });

        setUsers(updatedUsers);
        setFollowingStates(prevStates => ({ ...prevStates, [id]: false }));
      } catch (error) {
        toast.error('Something went wrong, please try again later');
      }
    }
  };

  const selected = value => {
    setSelectedOption(value);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const filteredUsers = useMemo(
    () => pagination(page, filterUsers(value, users)),
    [page, value, users]
  );

  return (
    <TweetsContainer>
      <OptionContainer>
        <BackLink to="/">
          <HiArrowLeft size="24" />
          Back Home
        </BackLink>
        <Select
          defaultValue={selectedOption}
          onChange={selected}
          options={options}
          styles={{
            container: (baseStyles, state) => ({
              ...baseStyles,
              width: '150px',
              marginLeft: 'auto',
              fontFamily: 'inherit',
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: !state.isFocused && '#5736a3',
              backgroundColor: '#eff0af',
            }),
            indicatorSeparator: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: '#5736a3',
            }),
          }}
        />
      </OptionContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CardList>
            {filteredUsers.length > 0 ? (
              filteredUsers.map(item => (
                <UserCard
                  key={item.id}
                  users={item}
                  onUpdateUser={onUpdateUser}
                />
              ))
            ) : (
              <InfoSmile />
            )}
          </CardList>
          {filterUsers(value, users).length / 12 > page && (
            <Button onClick={loadMore} />
          )}
        </>
      )}
    </TweetsContainer>
  );
};

export default Tweets;
