import { useEffect } from "react";
import { Contact } from "../models/contact.class.js";
import PropTypes from 'prop-types';
import '../styles/styleContact.css';

const ContactComponent = ({ contact, conected, remove }) => {

    useEffect(() => {
        return () => {
        };
    }, [contact]);

    function contactConectedIcon() {
        if (contact.conected) {
            return (<i onClick={() => conected(contact)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={() => conected(contact)} className='bi-toggle-off task-action' style={{ color: 'grey' }}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                {contactConectedIcon()}
            </td>
            <td>
                <i onClick={() => remove(contact)} className='bi-trash task-action' style={{ color: 'tomato' }}></i>
            </td>
        </tr>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    conected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default ContactComponent;
