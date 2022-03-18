// -------In-Class Assignment (03/17/22)------------

//-->External Script File Linked to inclass_03-17.html

// for (let index=0; index<5; index++){
//     console.log(index);
// }

//-------------------------------------------------

// const h1s = document.getElementById("header")
const h1s = document.getElementsByTagName("h1");
const main = document.getElementById("main-heading");
console.log(h1s);
console.log(main);

//-------------------------------------------------

window.addEventListener("DOMContentLoaded", function(){

    const main = document.getElementById("main-heading");

    console.log(main);

})