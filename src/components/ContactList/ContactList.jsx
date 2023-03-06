import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slise';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(normalizedFilter) ||
      number.includes(normalizedFilter)
  );
  const elements = result.map(({ id, name, number }) => (
    <li key={id} className={css.item}>
      {name}: {number}
      <button type="button" onClick={() => dispatch(deleteContact({ id }))}>
        delete
      </button>
    </li>
  ));
  return <ol className={css.contacts}>{elements}</ol>;
};
