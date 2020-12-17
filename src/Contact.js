
function Contact(props) {
    return (
        <tr>
            <td>Name: {props.contact.name}</td>
            <td>Phone: {props.contact.phone}</td>
            <td><button className="btn btn-primary" onClick={() => props.onEdit(props.contact)}>Edit</button></td>
            <td><button className="btn btn-primary" onClick={() => props.onDelete(props.contact)}>Delete</button></td>
        </tr>
    )
}

export default Contact;