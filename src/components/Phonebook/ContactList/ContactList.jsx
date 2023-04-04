import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ContactItem from '../ContactItem/ContactItem';

import styles from './contact-list.module.css';

const ContactList = ({removeContact}) => {
  const contacts = useSelector(store=> store.contacts)

  const elements = contacts.map(item => <ContactItem key={item.id} {...item} removeContact={removeContact}/>)

      return (
        <ol className={styles.contactList}>
            {elements}
        </ol>
      )
}

export default ContactList;

ContactList.propTypes ={
  removeContact: PropTypes.func.isRequired
}