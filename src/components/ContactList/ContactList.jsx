import { useSelector } from 'react-redux';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem/ContactItem';

import styles from './contact-list.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const elements = contacts.map(item => (
    <ContactItem key={item.id} {...item} />
  ));

  return <ol className={styles.contactList}>{elements}</ol>;
};

export default ContactList;
