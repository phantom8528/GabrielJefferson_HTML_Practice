// ------------------------------------------In-Classs Practice (03/11/22) - Javascript Introduction-----------------//
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


//----------------------------------------------------------------03/14/22------------------------------------------
//--------------------------------------------------------------In-Class Practice---------------------------------------

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

// function sumOfTwo(num1, num2){
//     let total = num1 + num2;
//     return total;
//     // console.log(total)
// }

// if (sumOfTwo(55,55)>50 && sumOfTwo(55,55)<80){
//     console.log(65);
// }   else {
//     console.log(80)
// }

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

/*
-------------------------------------------------
Javascript Activity 3 - Bank Account Class
-------------------------------------------------
Create a bank account class with the following features:

--> Properties: Balance, AccountType
--> Funcitons: deposit(amount), withdraw(amount)

Create an instance of the BankAccount class and make sure that the user provides 
the initial amount and the accountType in order to create the bankAccount object.
After that deposit $100 into the account.
Next, withdraw $50 from the account.
Finally, print out the reamining balance of the account.
-----------------------------------------------
*/

//--Solution 1 Without A Data Structure

// class bankAccount{
//     constructor(balance, accountType){
//         this.balance = balance;
//         this.accountType = accountType;
//     }

//     get myBalance(){
//         console.log("You Have " + this.balance + " in Your " + this.accountType + " Account")
//     }

//     deposit(amount){
//         return amount + this.balance;
       
//     }
//     withdraw(amount){
//         return this.balance - amount;
//     }


// }

// const myAccount = new bankAccount(100,"Savings");
// console.log(myAccount.myBalance); //Returns --> You Have 100 in Your Savings Account
// console.log(myAccount.deposit(100));
// console.log(myAccount.withdraw(50));

//--Solution 2 With A Object Constructor

// function bankAccountVer2(type, balance, wLimit, dMinimum){
//     this.accountType = type;
//     this.accountBalance = balance;
//     this.withLimit = wLimit;
//     this.depoMinimum = dMinimum;

//     this.deposit = function(moneyIn){
//         if(moneyIn < 1){
//             console.log("You Are Be low the deopsit Minimum");
//         }else{
//             this.accountBalance = moneyIn + balance;
//         }
//     }
//     this.withdrawl = function(moneyOut){
//         if (moneyOut > this.depoMinimum){
//             console.log("You've Exceeded Your Withdrawl Limit");
//         }else{
//             this.accountBalance = balance - moneyOut;
//         }
//         this.accountBalance = balance - moneyOut;
//     }
// }

// let myAccount = new bankAccountVer2 ("Checking", 100, 500, 1);
// console.log(myAccount);
// myAccount.deposit(0);
// console.log(myAccount);

//--Solution 3 With Sytactic Sugar

class Bank{
    constructor(type, balance, limit, min){
        this.type = type; //<-- Type: String, Options: Checking, Savings
        this.balance = balance; // <-- Type: Number
        this.limit = limit; //<-- Type: Number
        this.min = min; // <-- Type: Number
    }
    deposit(addMoney){
        if (addMoney < this.min){
            console.log(`\nYour Deposit of $${addMoney}.00 is Below The Deposit Minimum\n`);
            // return "\nYou Are Below The Deposit Minimum\n";
        }else{
            this.balance = addMoney + this.balance;
            console.log(`\nYou've Added $${addMoney}.00 to Your ${this.type} account\n`);
        }

    }
    withdraw(takeMoney){
        if (takeMoney > this.limit){
            console.log("\nYou've exceeded your deposit limit\n");
        }else if (this.balance < 0){
            console.log("You Have Insufficient Funds");
        }else{
            this.balance = balance - takeMoney;
            console.log(`You Have $${this.balance}.00 in Your ${this.type}`)


        }
    }
    get accountStatus(){
        return `\nYou Have $${this.balance}.00 In Your ${this.type} Account\n`; 
    }
}

let firstAccount = new Bank ("Checking", 100, 500, 10);

console.log(firstAccount.accountStatus);
firstAccount.deposit(4);


/*
---------------------------------------------------------------
Javascript Activity 4: Vowel

Write a program which will check whether a letter is a vowel or not. 
If the letter is vowel then print true else print false.
---------------------------------------------------------------
*/

//--Solution That Can Take One

// function isVowel(option){
//     let vowels = ["a", "e", "i", "o", "u"];
//     for (let i=0; i<vowels.length; i++){
//         if (vowels[i] === option[i]){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
// console.log(isVowel("apple"));
// console.log(isVowel("hymn"));
// console.log(isVowel("gabriel"));


// ----------------------------------------In-Classs Practice (03/15/22) - Javascript Introduction---------------------------//
/*
Understand the following concepts
--------------------------------------------------
-->Classes - Object Constructor Function (new Way) 
*/
//[SEE SECOND VERSION OF BANK ACCOUNT SOLUTION ABOVE]
/*
-->Classes - Object Constructor Function via Class Keyword (old way)
---> Ex. Car Example.
*/

// class Car{
//     constructor(make, model, year, color){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
//     changeColor(newColor){
//         this.color = newColor;
//     }
// }

// const gabrielsCar = new Car ("toyota", "camry", 2002, "silver");
// gabrielsCar.changeColor("black");
// console.log(gabrielsCar);



