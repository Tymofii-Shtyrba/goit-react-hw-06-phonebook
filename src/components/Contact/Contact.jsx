import { ListItem } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import React from 'react';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const onClick = id => {
    dispatch(deleteContact(id));
    console.log(id);
  };
  return (
    <ListItem>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={() => onClick(id)}>
        Delete
      </button>
    </ListItem>
  );
}
