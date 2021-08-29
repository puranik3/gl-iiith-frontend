import { contactsList } from './contact-list-demo.js';

function render( contacts ) {
    document.querySelector( '#table-contacts tbody' ).innerHTML = '';
    
    contacts.forEach(
        function( contact ) {
            document.querySelector( '#table-contacts tbody' ).innerHTML += `
                <tr>
                    <td>${contact.name}</td>
                    <td>${contact.address.city}</td>
                    <td>${contact.phones[0]}</td>
                    <td>${contact.emails[0].value}</td>
                </tr>
            `
        }
    )
}

document.querySelector( 'input' ).oninput = function( event ) {
    const filterKey = event.target.value;
    const matchedContacts = contactsList.findAllContactsWithName( filterKey );
    render( matchedContacts );
};

render( contactsList.contacts );