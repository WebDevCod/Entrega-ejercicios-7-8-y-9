import ContactComponent from "./contact_component";
import { useEffect, useState } from 'react';
import ContactForm from "./contact_form";
import { Contact } from "../models/contact.class.js";

const ContactList = () => {

    const defaultContact = new Contact('Pablo', false);
    const [contacts, setContacts] = useState([defaultContact]);

    useEffect(() => {
        return () => {
        };
    }, [contacts]);

    function conectedContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].conected = !tempContacts[index].conected;
        setContacts(tempContacts);
    }

    function deleteContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function addContact(contact) {
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Contactos:
                        </h5>
                    </div>
                    <div className='card-body card text-center' data-mdb-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col' className="pe-2">Nombre</th>
                                    <th scope='col' className="pe-2">Conectado</th>
                                    <th scope='col' className="pe-2">Eliminar contacto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent
                                            key={index}
                                            contact={contact}
                                            conected={conectedContact}
                                            remove={deleteContact} />
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContact} />
        </div>
    );
}

export default ContactList;
