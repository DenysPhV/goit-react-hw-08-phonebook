import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import s from './ContactList.module.css';

import { deleteContact } from 'redux/contacts/contacts-actions';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter),
  );
};

const ContactList = () => {
  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getVisibleContacts(items, filter),
  );
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <span className={s.text}>{name}:</span>
          <span className={s.text}>{number}</span>

          <button
            onClick={() => {
              dispatch(deleteContact(id));
            }}
            type="button"
            className={s.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  // contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactList;
