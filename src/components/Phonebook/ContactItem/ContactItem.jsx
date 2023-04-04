import PropTypes from 'prop-types';

import styles from './contact-item.module.css';

const ContactItem = ({ id, number, name, removeContact }) => {
  return (
    <li className={styles.item}>
      {name}: {number}
      <button
        className={styles.buttonRemove}
        onClick={() => removeContact(id)}
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
  removeContact: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};
