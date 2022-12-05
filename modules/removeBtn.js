import { BooksClass } from './class.js';

const rem = (e) => {
  let temp = e.currentTarget.dataset;
  temp = +temp.id[temp.id.length - 1];
  const remBook = new BooksClass();
  remBook.del(temp);
    location.reload(); //eslint-disable-line
};

export default rem;