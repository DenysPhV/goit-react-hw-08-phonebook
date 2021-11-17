import React, { Component } from 'react';

import Section from 'components/Section';
import ContactList from 'components/ContactList';
import ContactsFilter from 'components/ContactsFilter';
import Form from 'components/ContactForm';

class ContactsView extends Component {
  render() {
    return (
      <div>
        <Section title="Phone book">
          <Form />
        </Section>
        <Section title="Contact list">
          <ContactsFilter />
          <ContactList />
        </Section>
      </div>
    );
  }
}

export default ContactsView;
