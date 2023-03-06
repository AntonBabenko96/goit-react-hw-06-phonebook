import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Box } from './Box/Box';

import css from '../components/App.module.css';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <Box title="Phonebook">
        <ContactForm />
      </Box>
      <Box title="Contacts">
        <Filter />
        <ContactList className={css.contacts} />
      </Box>
    </div>
  );
};
