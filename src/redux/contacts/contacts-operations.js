import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import * as serverApi from '../../services/serverApi';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    const data = await serverApi.addContactsInApi(contact);
    return data;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id) => {
    await serverApi.deleteContactsFromApi(id);
    return id;
  },
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await serverApi.getContactsFromApi();
    return contacts;
  },
);
