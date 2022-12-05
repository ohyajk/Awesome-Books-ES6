import { BooksClass } from './class.js';
import { title, author, req, suc } from './declaration.js';

const addBtnFunc = () => {
    if (title.value == "" || author.value == "") {//eslint-disable-line
     req.style.display = "flex";
  } else {
    const bookAd = new BooksClass();
    bookAd.add();
    req.style.display = "none";
    suc.style.display = "flex";
    title.value = "";
    author.value = "";
  }
};

export default addBtnFunc;