import { ListItem } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

import React from 'react';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const onClick = id => {
    dispatch(deleteContact(id));
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

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
