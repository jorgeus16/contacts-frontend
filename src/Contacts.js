
import { Fragment, useState } from 'react';
import Contact from './Contact.js';
import Alert from './Alert.js';

function Contacts(props){

    const [message, setMessage] = useState(null);

    function onAlertClose() {
        setMessage(null);
    }

    function onContactEdit(contact) {
        setMessage(contact.name);
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
                    {props.contacts.map((contact) =>
                        <Contact key={contact.name} contact={contact} onEdit={onContactEdit}/>
                    )}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Contacts;