import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <label className={css.filter__label}>
      <span>Find contact by name</span>
      <input
        className={css.filter__input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
