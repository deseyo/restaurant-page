export { initContact };

function initContact() {
  const contact = document.createElement('div');
  const contactAdressCont = document.createElement('div');
  const contactHeadingOne = document.createElement('div');
  const contactTextOne = document.createElement('div');
  const contactContactCont = document.createElement('div');
  const contactHeadingTwo = document.createElement('div');
  const contactTextTwo = document.createElement('div');
  const contactTextThree = document.createElement('div');

  contact.classList.add('contact');

  contactAdressCont.classList.add('contact-adress-cont');
  contactHeadingOne.classList.add('contact-heading');
  contactTextOne.classList.add('contact-text');

  contactContactCont.classList.add('contact-contact-cont');
  contactHeadingTwo.classList.add('contact-heading');
  contactTextTwo.classList.add('contact-text');
  contactTextThree.classList.add('contact-text')

  contactHeadingOne.textContent = 'where to find us?';
  contactTextOne.textContent = 'Example Street 17 Los Angeles';

  contactHeadingTwo.textContent = 'how to contact us?';
  contactTextTwo.textContent = 'Phone number: +11 222 333 444';
  contactTextThree.textContent = 'Email adress: loremrestaurant@example.com';

  contactAdressCont.append(contactHeadingOne, contactTextOne);
  contactContactCont.append(contactHeadingTwo, contactTextTwo, contactTextThree);
  contact.append(contactAdressCont, contactContactCont);

  return contact;
}