describe('Address Book', () => {
  it('should be able to add a contact', () => {
    const addressBook = new addressBook();
    const newContact = new Contact();

    addressBook.addContact(newContact);

    expect(addressBook.getContact(0)).toBe(newContact);
  });
});