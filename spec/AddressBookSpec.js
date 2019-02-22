describe('Address Book', () => {
  // So we get access to them inside the tests.
  let addressBook, newContact;

  beforeEach(() => {
    addressBook = new AddressBook();
    newContact = new Contact();
    // Why didn't we put addContact here?
    // We're not sure we want to run before all tests.
  });

  it('should be able to add a contact', () => {
    addressBook.addContact(newContact);

    expect(addressBook.getContact(0)).toBe(newContact);
  });

  it('should be able to delete a contact', () => {
    addressBook.addContact(newContact);
    addressBook.removeContact(0);

    expect(addressBook[0]).not.toBeDefined();
  });
});