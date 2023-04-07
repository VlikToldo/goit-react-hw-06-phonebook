import { useSelector, useDispatch } from 'react-redux';

import styles from './contact-filter.module.css';
import {setFilter} from '../../redux/filter/filter-slice';
import { getFilter } from '../../redux/filter/filter-selectors';

const ContactFilter = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={styles.filterBox}>
      <label className={styles.labelFilter}>Find contacts bu name</label>
      <input className={styles.inputFilter} type="text" value={filter} name="filter" onChange={handleFilter} />
    </div>
  );
};

export default ContactFilter;

