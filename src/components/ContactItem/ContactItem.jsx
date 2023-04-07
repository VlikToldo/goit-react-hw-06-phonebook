import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import {removeContact} from '../../redux/contacts/contacts-slice';
import styles from './contact-item.module.css';

const ContactItem = ({ id, number, name}) => {
  const dispatch = useDispatch();

  const handleRemoveContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <li className={styles.item}>
      {name}: {number}
      <button
        className={styles.buttonRemove}
        onClick={() => handleRemoveContact(id)}
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};
