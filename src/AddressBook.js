class AddressBook {
  constructor(contacts = []) {
    this.contacts = contacts;
    this.initialComplete = false;
  }
  
  addContact(contact) {
    return this.contacts.push(contact);
  }

  getContact(index) {
    return this.contacts[index];
  }

  removeContact(index) {
    return this.contacts.splice(index, 1);
  }

  getInitialContacts(cb) {
    setTimeout(() => {
      this.initialComplete = true;

      if (cb) {
        return cb();
      }
    }, 100);
  }
}