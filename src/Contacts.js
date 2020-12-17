
import { Fragment, useState } from 'react';
import Contact from './Contact.js';
import Alert from './Alert.js';
import NewContact from './NewContact.js';

function Contacts(props){

    const [message, setMessage] = useState(null);
    const [contacts, setContacts] =useState(props.contacts);
    function onAlertClose() {
        setMessage(null);
    }

    function onContactEdit(contact) {
        setMessage(contact.name);
    }

    function onAddContact(contact) {
        if (contact.name === ''){
           setMessage('A name must be provided'); 
           return false;
        }

        if(contacts.find(c => c.name === contact.name)) {
            setMessage('Duplicted contact');
            return false;
        }

        setContacts((prevContacts) => {
            if(!prevContacts.find(c => c.name === contact.name)) {
                return [...prevContacts, contact]
            }else{
                setMessage('Duplicated contact');
                return prevContacts;
            }
        });
        return true;
    }

    return (
        <Fragment>
            <Alert message={message} onClose={onAlertClose}/>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <NewContact onAddContact={onAddContact}/>
                    {contacts.map((contact) =>
                        <Contact key={contact.name} contact={contact} onEdit={onContactEdit}/>
                    )}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Contacts;