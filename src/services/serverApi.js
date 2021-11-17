import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//get contacts api
export async function getContactsFromApi() {
  const { data } = await axios.get('/contacts');
  return data;
}
//delete contact
export async function deleteContactsFromApi(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
//add contact
export async function addContactsInApi(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}
