import { Typography, Button } from "@mui/material";

// function ContactList({ contacts, filter, deleteContact }) {
//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <Typography marginTop="25px" variant="h3" contacts={contacts}>
//       Contacts
//       <ul>
//         {filteredContacts.map((contact) => (
//           <li key={contact.id}>
//             {contact.name}: {contact.number}
//             <Button
//               onClick={() => deleteContact(contact.id)}
//               style={{ margin: "20px" }}
//               variant="contained"
//               size="small"
//             >
//               Remove
//             </Button>
//           </li>
//         ))}
//       </ul>
//     </Typography>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";

function ContactList({ contacts, filter, deleteContact }) {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
      >
        <Typography marginTop="25px" variant="h3">
          Contacts
          <ul>
            <AnimatePresence initial={false}>
              {filteredContacts.map((contact) => (
                <motion.li
                  key={contact.id}
                  id={contact.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                >
                  {contact.name}: {contact.number}
                  <Button
                    onClick={() => deleteContact(contact.id)}
                    style={{ margin: "20px" }}
                    variant="contained"
                    size="small"
                  >
                    Remove
                  </Button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </Typography>
      </motion.div>
    </AnimatePresence>
  );
}

export default ContactList;
