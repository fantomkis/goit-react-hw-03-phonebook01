import React from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <p className={s.title}>
              {name}:<span className="">{number}</span>
            </p>

            <button className={s.btn} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
export default ContactList;
