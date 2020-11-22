import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getContact = (state) => state.contacts.items;

const getFilteredContact = createSelector(
  [getContact, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export default {
  getContact,
  getLoading,
  getFilter,
  getFilteredContact,
};
