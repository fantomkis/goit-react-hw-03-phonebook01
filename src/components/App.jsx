import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  componentDidMount() {
    const date = localStorage.getItem("contacts");
    console.log(date);
    const parseData = JSON.parse(date);

    if (parseData) {
      return this.setState({ contacts: [...parseData] });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      const data = JSON.stringify(contacts);
      localStorage.setItem("contacts", data);
    }
  }
  onAddContact = (name, number) => {
    const repeatOfNames = this.state.contacts.find(
      (el) => el.name.toLowerCase() === name.toLowerCase()
    );
    if (repeatOfNames) {
      alert(`${name} is already is in contacts.`);
      return;
    }
    this.setState((prev) => ({
      contacts: [
        ...prev.contacts,
        { id: nanoid(), name: name, number: number },
      ],
    }));
  };

  filterChang = (e) => {
    this.setState({ filter: e.target.value });
  };
  onFilterContacts = () => {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  };
  onDeleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) => el.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20,
          color: "#010101",
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.onAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} filterChang={this.filterChang} />
        <ContactList
          contacts={this.onFilterContacts()}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
