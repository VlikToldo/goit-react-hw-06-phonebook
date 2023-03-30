import PropTypes from 'prop-types';

import ContactItem from '../ContactItem/ContactItem';

import styles from './contact-list.module.css';

const ContactList = ({items, removeBook}) => {

  const elements = items.map(item => <ContactItem key={item.id} {...item} removeBook={removeBook}/>)

      return (
        <ol className={styles.contactList}>
            {elements}
        </ol>
      )
}

export default ContactList;

ContactList.propTypes ={
  items: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired
}