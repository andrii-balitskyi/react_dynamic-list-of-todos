const API_URL = 'https://mate-api.herokuapp.com';

export const request = endpoint => fetch(`${API_URL}${endpoint}`)
  .then(response => response.json())
  .then(result => result.data);

export const getTodos = () => request('/todos');
export const getUser = userId => request(`/users/${userId}`);
