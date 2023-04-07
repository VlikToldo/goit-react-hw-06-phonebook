import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contacts;
const selectFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
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
  }
);
