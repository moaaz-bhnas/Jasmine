class AddressBook {
  constructor(contacts = []) {
    this.contacts = contacts;
  }
  
  addContact(contact) {
    return this.contacts.push(contact);
  }

  getContact(index) {
    return this.contacts[index];
  }
}