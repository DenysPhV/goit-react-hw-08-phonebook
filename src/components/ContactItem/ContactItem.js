import React from 'react';

import s from './ContactItem.module.css';

const ContactListItem = ({ contacts, deleteContact }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={s.item}>
        <span className={s.text}>{name}:</span>
        <span className={s.text}>{number}</span>
        <button
          onClick={() => deleteContact(id)}
          type="button"
          className={s.button}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ContactListItem;
