var x = require("shadow-cljs/demo.foo");
export class Index {
    constructor(){  
      let currentDiv = document.getElementById("main"); 
      let newDiv = document.createElement("div"); 
      let newContent = document.createTextNode(x.hello("im from cljs")); 
      newDiv.appendChild(newContent); //add the text node to the newly created div. 
      currentDiv.appendChild(newDiv)
    }
};

document.body.onload = new Index();
