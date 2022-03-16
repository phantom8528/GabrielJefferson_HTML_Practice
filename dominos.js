/*
--------------------------(03/15/22) In-Class Activity---------------------------
Instructions:

Simulate something on the domino's pizza website using javascript classes

*/
//Solution - Simulates the Domino's Pizza Builder

class PizzaBuilder{
    constructor (size, style, cheese, sauce, toppings, nonMeats, dipSauce, special){
        this.size = size;
        this.style = style;
        this.cheese = cheese;
        this.sauce = sauce;
        this.toppings = toppings;
        this.nonMeats = nonMeats;
        this.dipSauce = dipSauce;
        this.specialInstructions = special;
    }
    //Changing the size of the pizza
    changeSize(change){
        if (change === "small" || change === "medium" || change === "large" || change === " extra large" ){
            this.size = change;
            console.log(`
                  ---CHANGE CONFIRMED---
                ---------------------------
                Pizza Size: ${this.size}
                Pizza Style: ${this.style}
                Cheese: ${this.cheese}
                Sauce: ${this.sauce}
                Toppings: ${this.toppings}
                Non-Meats: ${this.nonMeats}
                Dip Sauce: ${this.dipSauce}
                Special Instructions: ${this.specialInstructions}`);
            

        }else{
            console.log(`\n
            This is Not A Valid Option, 
            Please Choose One of the following: 
            -----------------------
            -->small 
            -->medium
            -->large
            -->extra large
            -----------------------`);

        }
    }

    //Changing the Style of the Pizza
    changeStyle(change){
        if (change === "brooklyn style" || change === "hand tossed" 
            || change === "crunchy thin crust"){
            this.style = change;

            console.log(`
            Pizza Size: ${this.size}
            ---CHANGE CONFIRMED-------
            ---------------------------
            Pizza Style: ${this.style}
            Cheese: ${this.cheese}
            Sauce: ${this.sauce}
            Toppings: ${this.toppings}
            Non-Meats: ${this.nonMeats}
            Dip Sauce: ${this.dipSauce}
            Special Instructions: ${this.specialInstructions}`);
        }else{
            console.log(`
            This is Not A Valid Option, 
            Please Choose One of the following: 
            -----------------------
            -->brooklyn style 
            -->hand tossed
            -->crunchy thin crust
            -----------------------`);
    }
}
    //What Portion of the pizza has Cheese?
    changeCheese(change){
        if (change === "whole" || change === "right-halve" || change === "left-halve"){
            this.cheese = change;

            console.log(`
            Pizza Size: ${this.size}
            Pizza Style: ${this.style}
            ---CHANGE CONFIRMED-------
            ---------------------------
            Cheese: ${this.cheese}
            Sauce: ${this.sauce}
            Toppings: ${this.toppings}
            Non-Meats: ${this.nonMeats}
            Dip Sauce: ${this.dipSauce}
            Special Instructions: ${this.specialInstructions}`);

            //------------------------------------
        }else{
            console.log(`\n
            This is Not A Valid Option, 
            Please Choose One of the following: 
            -----------------------
            -->whole 
            -->right-halve
            -->left-halve
            -----------------------`);

        }
    }
    //The type of Sauce on the Pizza
    changeSauce(change){
        if(change === "Robust Inspired Tomato Sauce" || change === "Hearty Marinara Sauce" || 
           change === "Honey BBQ Sauce" || change === "Garlic Parmesan Sauce" || 
           change === "Alfredo Sauce" || change === "Ranch"){
            this.sauce = change;
            
            console.log(`
            Pizza Size: ${this.size}
            Pizza Style: ${this.style}
            Cheese: ${this.cheese}
            ---CHANGE CONFIRMED-------
            ---------------------------
            Sauce: ${this.sauce}
            Toppings: ${this.toppings}
            Non-Meats: ${this.nonMeats}
            Dip Sauce: ${this.dipSauce}
            Special Instructions: ${this.specialInstructions}`);

        }else{
            console.log(`\n
            This is Not A Valid Option, 
            Please Choose One of the following: 
            -----------------------
            -->Robust Inspired Tomato Sauce
            -->Hearty Marinara Sauce
            -->Honey BBQ Sauce
            -->Garlic Parmesan Sauce
            -->Alfredo Sauce
            -->Ranch
            -----------------------`);
        }
    }
    //The Kind of Meat Toppings on the Pizza
    changeToppings(change){
        if(change === "Ham" || change === "Italin Sausage" ||
           change === "Beef" || change === "Premium Chicken" ||
           change === "Salami" || change === "Bacon" ||
           change  === "Pepperoni" ){
            this.toppings = change;

            console.log(`
            Pizza Size: ${this.size}
            Pizza Style: ${this.style}
            Cheese: ${this.cheese}
            Sauce: ${this.sauce}
            -----CHANGE CONFIRMED------
            ---------------------------
            Toppings: ${this.toppings}
            Non-Meats: ${this.nonMeats}
            Dip Sauce: ${this.dipSauce}
            Special Instructions: ${this.specialInstructions}`);
        }else{
            console.log(`\n
            This is Not A Valid Option, 
            Please Choose One of the following: 
            -----------------------
            -->Ham
            -->Italian Sausage
            -->Beef
            -->Premium Chicken
            -->Salami
            -->Bacon
            -->Pepperoni
            -----------------------`);


        }
    }
    //The Kind of Non-Meat Toppings on The Pizza
    changeNonMeats(change){
        if(change === "Green Peppers" || change === "Banana Peppers" ||
           change === "Diced Tomatoes"){

            this.nonMeats = change;
            
            console.log(`Pizza Size: ${this.size}
            Pizza Style: ${this.style}
            Cheese: ${this.cheese}
            Sauce: ${this.sauce}
            Toppings: ${this.toppings}
            ---CHANGE CONFIRMED-------
            ---------------------------
            Non-Meats: ${this.nonMeats}
            Dip Sauce: ${this.dipSauce}
            Special Instructions: ${this.specialInstructions}`);  

        }else{
            console.log(`\n
            This is Not A Valid Option, 
            Please Choose One of the following: 
            -----------------------
            -->Green Peppers
            -->Banana Peppers
            -->Diced Tomatoes
            -----------------------`);

        }
    }
    //The Type of Dipping Sauce on the Pizza
    changeDipSauce(change){
        if(change === "Garlic Dipping Sauce" || change === "Ranch" || 
           change === "Marinara Dipping Sauce"){
            this.dipSauce = change;
            
            console.log(`Pizza Size: ${this.size}
            Pizza Style: ${this.style}
            Cheese: ${this.cheese}
            Sauce: ${this.sauce}
            Toppings: ${this.toppings}
            Non-Meats: ${this.nonMeats}
            ---CHANGE CONFIRMED-------
            ---------------------------
            Dip Sauce: ${this.dipSauce}
            Special Instructions: ${this.specialInstructions}`);
        }else{
            console.log(`\n
            This is Not A Valid Option, 
            Please Choose One of the following: 
            -----------------------
            -->Garlic Dipping Sauce
            -->Ranch Sauce
            -->Marinara Dipping Sauce
            -----------------------`);
        }
    }

    //Any Special Instructions for the Delivery Driver
    changeIns(change){
        this.specialInstructions = change;

        console.log(`
        Pizza Size: ${this.size}
        Pizza Style: ${this.style}
        Cheese: ${this.cheese}
        Sauce: ${this.sauce}
        Toppings: ${this.toppings}
        Non-Meats: ${this.nonMeats}
        Dip Sauce: ${this.dipSauce}
        ---CHANGE CONFIRMED-------
        ---------------------------
        Special Instructions: ${this.specialInstructions}\n`); 

    }
    //Status of Order
    get pizzaStatus(){

        console.log(`
        STATUS OF YOUR ORDER
        ---------------------------------
        Pizza Size: ${this.size}
        Pizza Style: ${this.style}
        Cheese: ${this.cheese}
        Sauce: ${this.sauce}
        Toppings: ${this.toppings}
        Non-Meats: ${this.nonMeats}
        Dip Sauce: ${this.dipSauce}
        Special Instructions: ${this.specialInstructions}\n`); 
        
    }

}//<--End bracket for PizzaBuilder Class

//--------------------------------------------------INSTANCES OF PIZZA BUILDER---------------------------------------------
let newOrder1 = new PizzaBuilder("large", "hand tossed", "right-halve", "ranch", "Pepperoni", "Green Peppers", "Ranch");

newOrder1.pizzaStatus;

// newOrder1.changeSize("pineapple");
// newOrder1.changeStyle("brooklyn style");
// newOrder1.changeCheese("whole");
// newOrder1.changeSauce("Alfredo Sauce");
// newOrder1.changeToppings("Ham");
// newOrder1.changeNonMeats("Green Olives");
// newOrder1.changeDipSauce("Honey Mustard")
// newOrder1.changeIns("Watch out for the dog");