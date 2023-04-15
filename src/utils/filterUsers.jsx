export const filterUsers = (value, users) => {
  switch (value) {
    case 'follow':
      return users.filter(user => user.isFollowing === false);
    case 'followings':
      return users.filter(user => user.isFollowing === true);
    default:
      return users;
  }
};
