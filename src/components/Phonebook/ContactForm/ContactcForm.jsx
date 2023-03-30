import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './contact-form.module.css'
import initialState from './initialState';

const ContactForm = ({onSubmit}) => {
  const [state, setState] = useState({...initialState});

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState(prevState=> {
     return {...prevState, [name]: value}
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({...state});
    setState({...initialState})
  }

  const {name, number} = state;

  return (
    <form className={styles.boxForm} action="" onSubmit={handleSubmit}>
    <div className={styles.boxInput}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
    <div className={styles.boxInput}>
      <label>Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </div>
    <button className={styles.buttonAdd}>Add contact</button>
  </form>
)

}

export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}