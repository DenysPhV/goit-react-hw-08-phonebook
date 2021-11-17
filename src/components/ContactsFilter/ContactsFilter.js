import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filterContacts } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';
import s from './ContactsFilter.module.css';

const ContactsFilter = () => {
  const valueFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contact by name
      <input
        type="text"
        className={s.input}
        value={valueFilter}
        onChange={(e) => dispatch(filterContacts(e.target.value))}
      />
    </label>
  );
};

export default ContactsFilter;
