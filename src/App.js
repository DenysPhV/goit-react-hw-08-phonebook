import React from 'react';

import Section from './components/Section';
import Form from './components/Form';
import ContactList from './components/ContactList';
import ContactsFilter from './components/ContactsFilter';

import s from './App.module.css';

const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <div className={s.container}>
          <ContactsFilter />
          <ContactList />
        </div>
      </Section>
    </>
  );
};

export default App;
