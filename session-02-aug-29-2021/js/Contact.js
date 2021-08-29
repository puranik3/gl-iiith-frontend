class Contact {
    constructor( name, phones, emails, address ) {
        this.name = name;
        this.phones = phones;
        this.emails = emails;
        this.address = address;
    }

    isValidPhone( phone ) {
        const phonePat = new RegExp( "^\\+91-[789]\\d{9}$" );
        return phonePat.test( phone );
    }

    addPhone( phone ) {
        this.phones.push( phone );
    }
}

export {
    Contact
};