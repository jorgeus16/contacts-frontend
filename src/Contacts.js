import Contact from './Contact.js';

function Contacts(props){
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {props.contacts.map((contact) =>
                    <Contact key={contact.name} contact={contact}/>
                )}
            </tbody>
        </table>
    )
}

export default Contacts;