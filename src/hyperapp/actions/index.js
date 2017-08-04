export default {

  load: () => {
    let currentDiv = document.getElementById("main"); 
    let newDiv = document.createElement("div"); 
    let newContent = document.createTextNode("I'm from hyperapp"); 
    newDiv.appendChild(newContent); //add the text node to the newly created div. 
    currentDiv.appendChild(newDiv)
    }
};
