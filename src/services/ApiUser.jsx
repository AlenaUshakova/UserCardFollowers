import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export async function fetchUsers() {
  try {
    const { data } = await axios.get('/users');
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateUser(id, obj) {
  try {
    const { data } = await axios.put(`/users/${id}`, obj);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
