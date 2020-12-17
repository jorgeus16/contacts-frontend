
function Contact(props) {
    return (
        <tr>
            <td>Name: {props.contact.name}</td>
            <td>Phone: {props.contact.phone}</td>
            <td><button className="btn btn-primary">Edit</button></td>
            <td><button className="btn btn-primary">Delete</button></td>
        </tr>
    )
}

export default Contact;