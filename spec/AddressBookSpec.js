describe('Address Book', () => {
  it('should be able to add a contact', () => {
    const addressBook = new AddressBook();
    const newContact = new Contact();

    addressBook.addContact(newContact);

    expect(addressBook.getContact(0)).toBe(newContact);
  });

  it('should be able to delete a contact', () => {
    const addressBook = new AddressBook();
    const newContact = new Contact();

    addressBook.addContact(newContact);
    addressBook.removeContact(0);

    expect(addressBook[0]).not.toBeDefined();
  });
});