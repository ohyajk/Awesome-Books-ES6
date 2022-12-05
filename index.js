import { DateTime } from './modules/luxon.js';
import { BooksClass } from './modules/class.js';
import addBtnFunc from './modules/addBtn.js';
import rem from './modules/removeBtn.js';
import slf from './modules/showList.js';
import saf from './modules/showAdd.js';
import scf from './modules/showCon.js';
import {
  addBtn, adBtn, listBtn, conBtn, timeDiv,
} from './modules/declaration.js';

// Add Remove Books

addBtn.addEventListener('click', addBtnFunc);

const booksh = new BooksClass();
booksh.showBooks();

const allBtns = document.querySelectorAll('.remove');
allBtns.forEach((btn) => {
  btn.addEventListener('click', rem);
});

// Show Hide Sections
listBtn.addEventListener('click', slf);
adBtn.addEventListener('click', saf);
conBtn.addEventListener('click', scf);

// Time
const time = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);
timeDiv.innerText = time;
