import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';
import { getVisibleContact } from 'redux/contacts/contacts-selectors';

import s from './ContactList.module.css';

import ContactItem from '../ContactItem';

const ContactList = () => {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      <ContactItem
        contacts={contacts}
        deleteContact={(id) => dispatch(deleteContact(id))}
      />
    </ul>
  );
};

export default ContactList;
