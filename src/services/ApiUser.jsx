import axios from 'axios';

axios.defaults.baseURL = 'https://64381e8cc1565cdd4d66ab00.mockapi.io/users';

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
