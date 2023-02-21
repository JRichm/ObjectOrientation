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

//loop through meal2
for (let key in meal2){

    // if the key = dessert, update the value to be churros and print to console
    if (key === 'dessert') {
        meal2.dessert = "Churros";
        console.log(meal2[key]);

    // else, print the value
    } else {
        console.log(key);
    }
}

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  };

  teams.teamSix = ['felix', 'jordan', 'tyler', 'kyle'];
  console.log(teams);

  delete teams.teamFour;
  console.log(teams);