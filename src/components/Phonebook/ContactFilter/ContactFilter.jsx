import PropTypes from 'prop-types';

import styles from './contact-filter.module.css';

const ContactFilter = ({ handleChange, value }) => {
  return (
    <div className={styles.filterBox}>
      <label className={styles.labelFilter}>Find contacts bu name</label>
      <input className={styles.inputFilter} type="text" value={value} name="filter" onChange={handleChange} />
    </div>
  );
};

export default ContactFilter;

ContactFilter.propTypes = {
    handleChange: PropTypes.func.isRequired
}
