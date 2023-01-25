import { useRef } from "react";
import { Contact } from "../models/contact.class";

const ContactForm = ({ add }) => {

    const nameRef = useRef('');

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(nameRef.current.value, false);
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4 pt-2'>
            <div className='form-outline flex-fill'>
                <input
                    ref={nameRef}
                    id='inputName'
                    type='text'
                    className='form-control form-control-lg'
                    required
                    autoFocus
                    placeholder='Nombre de contacto' />
            </div>
            <button type='submit' className='btn btn-primary btn ms-2'>Agregar Contacto</button>
        </form>
    );
}

export default ContactForm;
