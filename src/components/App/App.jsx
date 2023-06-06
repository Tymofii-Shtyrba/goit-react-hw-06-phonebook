import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
export const App = () => {
  return (
    <div>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </div>
  );
};
