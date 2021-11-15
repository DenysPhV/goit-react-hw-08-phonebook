import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';

import s from './ContactsFilter.module.css';

import { changeFilter } from 'redux/contacts/contacts-actions';

const filterId = shortid.generate();

const ContactsFilter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const onChangeFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <label htmlFor={filterId} className={s.label}>
      <span>Filter contacts by name</span>
      <input
        type="text"
        value={filter}
        onChange={onChangeFilter}
        id={filterId}
        className={s.input}
      />
    </label>
  );
};

export default ContactsFilter;
