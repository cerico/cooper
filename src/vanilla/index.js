import { square } from './square/index';

export class Index {
    constructor(){  
      square.load()
    }
};

document.body.onload = new Index();
