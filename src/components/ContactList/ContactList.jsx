import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactIem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contact__list__item}>
          <ContactIem
            name={name}
            number={number}
            id={id}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
