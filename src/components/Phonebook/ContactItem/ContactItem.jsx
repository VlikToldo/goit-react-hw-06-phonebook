import PropTypes from 'prop-types';

import styles from './contact-item.module.css';

const ContactItem = ({ id, number, name, removeBook }) => {
  return (
    <li className={styles.item}>
      {name}: {number}
      <button
        className={styles.buttonRemove}
        onClick={() => removeBook(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.defaultProps = {
  items: [],
};

ContactItem.propTypes = {
  removeBook: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};
