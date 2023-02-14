import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactIem = ({ name, number, id, deleteContact }) => {
  return (
    <>
      <p className={css.contact__list__contact}>
        {name}: {number}
      </p>
      <button
        className={css.contact__btn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </>
  );
};

ContactIem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
