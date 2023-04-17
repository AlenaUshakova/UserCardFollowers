export const pagination = (page, users) => {
  const perPage = 12;
  return users.slice(0, page * perPage);
};
