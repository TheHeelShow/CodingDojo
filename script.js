function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deepDish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("hand tossed", "marinara", ["mozzarella", "ricota"], ["mushrooms", "olives", "bacon", "salami"]);
console.log(p3);

var p4 = pizzaOven("hand tossed", "marinara", ["mozzarella", "ricota"], ["mushrooms", "olives", "tuna", "sesame seeds"]);
console.log(p4);



function randomPizza() {
    var crustTypes = ["deepDish", "hand tossed", "thin crust"];
    var sauceTypes = ["traditional", "marinara", "garlic butter", "bbq"];
    var cheeses = ["mozzarella", "cheddar", "feta", "ricotta"];
    var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "bacon", "salami", "tuna", "sesame seeds"];

    var randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    var randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    var randomCheese = cheeses[Math.floor(Math.random() * cheeses.length)];
    var numberOfToppings = Math.floor(Math.random() * 4) + 1;
    var randomToppings = [];
    
    for (var i = 0; i < numberOfToppings; i++) {
        var randomTopping = toppings[Math.floor(Math.random() * toppings.length)];
        randomToppings.push(randomTopping);
    }

    var pizza = {
        crust: randomCrust,
        sauce: randomSauce,
        cheese: randomCheese,
        toppings: randomToppings
    };

    return pizza;
}

var myRandomPizza = randomPizza();
console.log(myRandomPizza);