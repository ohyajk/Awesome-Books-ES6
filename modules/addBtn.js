import { BooksClass } from './class.js';
import { title, author } from './declaration.js';

const addBtnFunc = () => {
    if (title.value == "" || author.value == "") {//eslint-disable-line
      alert('Please fill the required Fields'); //eslint-disable-line
  } else {
    const bookAd = new BooksClass();
    bookAd.add();
      alert('Book added successfully'); //eslint-disable-line
    title.value = '';
    author.value = '';
  }
};

export default addBtnFunc;