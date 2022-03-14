// --------------In-Classs Practice (03/11/22) - Javascript Introduction-----------------//
/*
Understand the following concepts
--------------------------------------------------
-->Data Structures
-->Data Types
-->Variables
-->Printing
-->Functions
-->Conditionals
*/


//-------------------------------------03/14/22------------------------------------------




//--------------------------------In-Class Practice---------------------------------------

/*
Today's Objectives
----------------------
-Iterating / Looping
-Conditionals
----------------------
*/

//Javascript Activity 1: Looping through an Array of Friends

// let myFriends = ["John", "Jane", "Jacob", "Jingle-Heimer-smith"];
// let arrayLength = myFriends.length;
// for (var i=0; i<arrayLength; i++){
//     console.log(myFriends[i]);
// }

//Javascript Activity 2: Sum of Given Integers
/*
--------------------------------------------------------------------------
Write a JavaScript program to compute the sum of the two given integers, 
If the sum is in the range 50..80 return 65 other wise return 80
--------------------------------------------------------------------------
*/

//---Solution With A Function
//---------------------------------------
function sumOfTwo(num1, num2){
    let total = num1 + num2;
    return total;
    // console.log(total)
}

if (sumOfTwo(55,55)>50 && sumOfTwo(55,55)<80){
    console.log(65);
}   else {
    console.log(80)
}

//---Solution Without A Function
//---------------------------------------
// let num1 = 50;
// let num2 = 10;
// let total = num1 + num2;

// if (total>50 && total<80){
//     console.log(65)
// }   else {
//         console.log(80)
// }






