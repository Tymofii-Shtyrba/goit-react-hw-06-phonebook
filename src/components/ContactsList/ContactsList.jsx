import React from 'react';
import { List } from './ContactslList.styled';
import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getfilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact => contact.name.includes(filter));
};

export default function ContactsList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getfilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <List>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </List>
  );
}
