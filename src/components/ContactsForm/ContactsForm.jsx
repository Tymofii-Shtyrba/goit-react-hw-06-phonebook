import React from 'react';
import { Form } from './ContactsForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export default function ContactsForm() {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    dispatch(addContact({ name, number }));
    e.target.reset();
  };

  return (
    <Form onSubmit={onSubmit}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label htmlFor="">
        Number
        <input type="text" name="number" required />
      </label>
      <button type="submit">Add contact</button>
    </Form>
  );
}
