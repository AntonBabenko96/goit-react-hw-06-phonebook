import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(state => state.contacts.contacts);
  const elements = contacts.map(({ id, name, number }) => (
    <li key={id} className={css.item}>
      {name}: {number}{' '}
      {/* <button onClick={() => onDeleteContact(id)}>delete</button> */}
    </li>
  ));
  return <ol className={css.contacts}>{elements}</ol>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
