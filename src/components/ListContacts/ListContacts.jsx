import ContactElem from '../ContactElem';

const ListContacts = ({ contacts, onDeleteContact}) => {
 
    return (
         <ul>
            {contacts.map(({ id, name, number }) => (
                <ContactElem key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}/>
            )
            )}
                </ul>
           
    )
}

export default ListContacts;