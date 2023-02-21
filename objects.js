const person = {
    firstName: "Cameron",
    lastName: "Noble",
    age: 24,
};

//          dot notation            bracket notation
let name = person.firstName + " " + person['lastName'];
console.log(name);

const meal = {
    appetizer: "Chips & Salsa",
    entree: "Carne Asada Tacos",
    dessert: "Tres Leches",
    drink: "horchata"
};

const meal2 = {
    appetizer: "Ceviche",
    entree: "Loaded Nachos",
    dessert: "Fried Ice Cream",
    drink: "Cerveza"
};

// let { dessert } = meal;
// let dessert2 = meal.dessert;

let { drink, appetizer, dessert, entree } = meal;
console.log(entree + " with " + drink);

let newFav = "Dr. P";
meal.drink = newFav;
console.log(meal);

const { drink: drink2, appetizer: app2, desser: des2, entree: entree2 } = meal2;