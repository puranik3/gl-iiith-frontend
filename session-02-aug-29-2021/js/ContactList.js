class ContactList {
    constructor( contacts ) {
        this.contacts = contacts;
    }

    addContact( contact ) {
        this.contacts.push( contact );
    }

    // filterByCity( city ) {
    //     const result = [];

    //     for( let i = 0; i < this.contacts.length; i++ ) {
    //         if( this.contacts[i].address.city === city ) {
    //             result.push( this.contacts[i] )
    //         }
    //     }

    //     return result;
    // }

    filterByCity( city ) {
        return this.contacts.filter( contact => contact.address.city === city );
    }

    /**
     * @param {number} sortOrder 1 for ascending or -1 for descending
     */
    sortByName( sortOrder ) {
        this.contacts.sort(function( contact1, contact2 ) {
            if( contact1.name < contact2.name ) {
                return sortOrder;
            }

            if( contact1.name > contact2.name ) {
                return sortOrder;
            }

            return 0;
        });
    }

    findContactWithName( filterKey ) {
        return this.contacts.find( contact => contact.name.includes( filterKey ) );
    }
    
    findAllContactsWithName( filterKey ) {
        return this.contacts.filter( contact => contact.name.toUpperCase().includes( filterKey.toUpperCase() ) );
    }
}

export {
    ContactList
}