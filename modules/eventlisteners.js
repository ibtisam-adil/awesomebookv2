import {
  booksAdded, addsection, contactsection, hero,
} from './navigation.js';

export const handleListLinkClick = () => {
  if (booksAdded.innerHTML === '') {
    booksAdded.innerHTML = '<h1 class="empty">"There are currently no books added."</h1>';
  }
  hero.classList.remove('hide');
  addsection.classList.add('hide');
  contactsection.classList.add('hide');
};

export const handleContactLinkClick = () => {
  addsection.classList.add('hide');
  hero.classList.add('hide');
  contactsection.classList.remove('hide');
};

export const handleAddLinkClick = () => {
  contactsection.classList.add('hide');
  hero.classList.add('hide');
  addsection.classList.remove('hide');
};
