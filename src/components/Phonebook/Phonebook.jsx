import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactcForm';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactList from './ContactList/ContactList';


import styles from './phonebook.module.css';

const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    return contacts ? contacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isDublicate = (name, number) => {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const result = contacts.find(({ name, number }) => {
      return (
        name.toLowerCase() === normalizedName ||
        number.toLowerCase() === normalizedNumber
      );
    });
    return Boolean(result);
  };

  const addContact = ({ name, number }) => {
    if (isDublicate(name, number)) {
      alert(`${name}: ${number} is already ixist`);
      return false;
    }

    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return [newContact, ...prevContacts];
    });
    return true;
  };

  const removeBook = id => {
    setContacts(prevContacts => prevContacts.filter(item => item.id !== id));
  };

  const handleFilter = ({ target }) => {
    setFilter(target.value);
  };

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
      );
    });
    return result;
  };

  const items = filterContacts();
  const isContacts = Boolean(items.length);

  return (
    <div className={styles.contactBox}>
      <div className={styles.block}>
        <h3>Pnonebook</h3>
        <ContactForm onSubmit={addContact} />
      </div>
      <div className={styles.block}>
        <h3>Contacts</h3>
        <div className={styles.listBox}>
          <ContactFilter handleChange={handleFilter} />
          {isContacts && (
            <ContactList items={items} removeBook={removeBook}/>
          )}
          {!isContacts && 'You dont have a contacts'}
        </div>
      </div>
    </div>
  );
};

// class Phonebook extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'))
//     if (contacts?.length) {
//       this.setState({contacts})
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const {contacts} = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts))
//     }

//   }

//   removeBook = id => {
//     this.setState(({ contacts }) => {
//       const newContact = contacts.filter(contact => contact.id !== id);
//       return { contacts: newContact };
//     });
//   };

//   addContact = ({ name, number }) => {
//     if (this.isDublicate(name, number)) {
//       alert(`${name}: ${number} is already ixist`);
//       return false;
//     }

//     this.setState(prevState => {
//       const { contacts } = prevState;

//       const newContact = {
//         id: nanoid(),
//         name,
//         number,
//       };

//       return { contacts: [newContact, ...contacts] };
//     });
//     return true;
//   };

//   handleFilter = ({ target }) => {
//     this.setState({ filter: target.value });
//   };

//   isDublicate(name, number) {
//     const { contacts } = this.state;
//     const normalizedName = name.toLowerCase();
//     const normalizedNumber = number.toLowerCase();
//     const result = contacts.find(({ name, number }) => {
//       return (
//         name.toLowerCase() === normalizedName ||
//         number.toLowerCase() === normalizedNumber
//       );
//     });
//     return Boolean(result);
//   }

//   filterContacts = () => {
//     const { filter, contacts } = this.state;
//     if (!filter) {
//       return contacts;
//     }

//     const normalizedFilter = filter.toLowerCase();
//     console.log(normalizedFilter);
//     const result = contacts.filter(({ name, number }) => {
//       return (
//         name.toLowerCase().includes(normalizedFilter) ||
//         number.toLowerCase().includes(normalizedFilter)
//       );
//     });
//     return result;
//   };

//   render() {
//     const { addContact, handleFilter, removeBook } = this;
//     const items = this.filterContacts();
//     const isContacts = Boolean(items.length);

//     return (
//       <div className={styles.contactBox}>
//         <div className={styles.block}>
//           <h3>Pnonebook</h3>
//           <ContactForm onSubmit={addContact} />
//         </div>
//         <div className={styles.block}>
//           <h3>Contacts</h3>
//           <div className={styles.listBox}>
//             <ContactFilter handleChange={handleFilter} />
//             {isContacts &&
//             <ContactList >
//               <ContactItem items={items} removeBook={removeBook}/>
//            </ContactList>
//             }
//             {!isContacts && 'You dont have a contacts'}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Phonebook;
