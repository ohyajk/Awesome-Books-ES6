import { listSec, addSec, conSec } from './declaration.js';

const slf = () => {
  listSec.style.display = 'flex';
  addSec.style.display = 'none';
  conSec.style.display = 'none';
    window.location.replace('#'); //eslint-disable-line
};

export default slf;