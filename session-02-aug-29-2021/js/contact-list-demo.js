import { Contact } from './Contact.js';
import { ContactList } from './ContactList.js';

const arpitSinha = new Contact(
    'Arpit Sinha',
    [
        '+91-9123456789',
        '+91-9123456780'
    ],
    [
        {
            type: "work",
            value: "arpit.sinha@example.com"
        },
        {
            type: "home",
            value: "arpit.sinha@gmail.com"
        },
        {
            type: "home",
            value: "arpit.sinha@outlook.com"
        }
    ],
    {
        firstLine: '#32, Rosewell Avenue',
        lastLine: 'Bommanahalli',
        city: 'Chennai'
    }
);

const payalGoyal = new Contact(
    'Payal Goyal',
    [
        '+91-9123456712',
    ],
    [
        {
            type: "work",
            value: "payal.goyal@example.com"
        },
        {
            type: "home",
            value: "coolpayal@gmail.com"
        }
    ],
    {
        firstLine: '#24, Rosewell Avenue',
        lastLine: 'BTM Layout',
        city: 'Bangalore'
    }
);

arpitSinha.addPhone( '+91-1234567890' );
payalGoyal.addPhone( '+91-1234567891' );

const contactsList = new ContactList(
    [
        arpitSinha,
        payalGoyal
    ]
);

const zubairAhmed = new Contact(
    'Zubair Ahmed',
    [
        '+91-9123456713',
    ],
    [
        {
            type: "work",
            value: "zubair.ahmed@example.com"
        }
    ],
    {
        firstLine: '#12, Hardinge Avenue',
        lastLine: 'Residency Road',
        city: 'Chennai'
    }
);


contactsList.addContact( zubairAhmed );

console.log( contactsList );

const contactsInChennai = contactsList.filterByCity( 'Chennai' ); // [ arpitSinha, zubairAhmed ]
console.log( contactsInChennai );

contactsList.sortByName( -1 );
console.log( contactsList );

const matchedContact = contactsList.findContactWithName( 'Arp' );
console.log( matchedContact ); // arpitSinha

export {
    contactsList
};