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


/* done
- A special function that signals to the framework when an asynchronous function has completed.
- and we're ready to run our tests
*/
describe('Async Address Book', () => {
  // Outside, so we can access in both scopes
  const addressBook = new AddressBook();

  beforeEach((done) => {
    addressBook.getInitialContacts(() => {
      // This signals to the framework that the async function is done, and we can continue testing 
      done();
    });
  })

  // We use done again to tell the framework which tests depend on the async
  it('should grab initial contacts', (done) => {
    expect(addressBook.initialComplete).toBe(true);
    done();
  })
});