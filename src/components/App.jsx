import { useState, useEffect } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { useDispatch } from 'react-redux';

import { Filter } from './Filter/Filter';
import { Box } from './Box/Box';
import { nanoid } from 'nanoid';

import css from '../components/App.module.css';

export const App = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  // const handleFilter = ({ target }) => setFilter(target.value);

  // const onAddContact = ({ name, number }) => {
  //   if (isDublicate({ name })) {
  //     return alert(`${name} is alraedy exist`);
  //   }
  //   setContacts(prevState => {
  //     const newContact = {
  //       id: nanoid(),
  //       name,
  //       number,
  //     };
  //     return [...prevState, newContact];
  //   });
  // };

  // const isDublicate = ({ name }) => {
  //   const normalizedName = name.toLowerCase();

  //   const dublicate = contacts.find(contact => {
  //     return contact.name.toLowerCase() === normalizedName;
  //   });

  //   return Boolean(dublicate);
  // };

  const onDeleteContact = id => {
    // setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const getFilteredContacts = () => {
    // if (!filter) {
    //   return contacts;
    // }
    // const normalizedFilter = filter.toLowerCase();
    // const result = contacts.filter(({ name, number }) => {
    //   return (
    //     name.toLowerCase().includes(normalizedFilter) ||
    //     number.includes(normalizedFilter)
    //   );
    // });
    // return result;
  };

  // const items = getFilteredContacts();

  return (
    <div className={css.wrapper}>
      <Box title="Phonebook">
        <ContactForm onSubmit={onAddContact} />
      </Box>
      <Box title="Contacts">
        {/* <Filter filter={filter} onChange={handleFilter} /> */}
        <ContactList
          className={css.contacts}
          // onDeleteContact={onDeleteContact}
        />
      </Box>
    </div>
  );
};
