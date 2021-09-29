import React from "react";

const Contacts = ({contacts}) => {
    return (
        <div>
            <ul>
                {contacts.map((contact) => {
                    return <li key={contact.name}>{contact.name} {contact.number}</li>;
                })}
            </ul>
        </div>
    )
}

export default Contacts
