import React, { Component } from "react";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handelChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
    e.carentTarget.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  atSubmit = (e) => {
    e.preventDefault();
    const { onAddContact } = this.props;
    const { name, number } = this.state;

    onAddContact(name, number);
    e.carentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.atSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            onChange={this.handelChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.label}>
          Number
          <input
            onChange={this.handelChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
