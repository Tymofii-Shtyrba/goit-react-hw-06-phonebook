import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { Phonebook } from './App.styled';

export const App = () => {
  return (
    <Phonebook>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </Phonebook>
  );
};
