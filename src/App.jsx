import { useState } from "react";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import { Container, Typography } from "@mui/material";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(initContactsState);
  const [filter, setFilter] = useState("");

  function initContactsState() {
    const contactsLocalStorage = localStorage.getItem("contacts");
    if (contactsLocalStorage) {
      return JSON.parse(contactsLocalStorage);
    } else {
      return [];
    }
  }

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const isDuplicateName = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicateName) {
      return true;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([...contacts, newContact]);
    return false;
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <Container>
      <Typography variant="h3">Phonebook</Typography>
      <ContactForm addContact={addContact} />
      <Filter filter={filter} setFilter={setFilter} />
      <ContactsList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </Container>
  );
}

export default App;
