class Dog {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.legs = 4;
    }

    greeting() {
        console.log(`HI, my name is ${this.name} and I am an ${this.age} year old ${this.breed}!`);
    }

    getHit() {
        if (this.legs > 1) {
            this.legs -= 1;
            console.log(`${this.name} got hit and lost a leg. ${this.name} has ${this.legs} more legs`);
        } else {
            this.legs -= 1;
            console.log(`${this.name} got hit and lost a leg. That was ${this.name}'s last leg. How is that even possible`)
        }
    }
}

const dog1 = new Dog("Buddy", "Golden Retriever", 5);
const dog2 = new Dog("Alaska", "Cockapoo", 3);

dog1.greeting();

class Puppy extends Dog {
    constructor(name, breed, age, color) {
        // inherit values
        super(name, breed, age);

        // set values
        this.color = color;
        this.trainingLevel = 0;
        this.xpToNextLevel = 10;
    }

    // function to update level and experience
    addExperience(xp) {

        // add experience
        this.xpToNextLevel -= xp;

        // if xp to next level is reached, 10 is used here as the amount of experience that is needed to reach the next level
        if(this.xpToNextLevel <= 0) {

            // level up puppy
            this.trainingLevel++;

            // reset xp to next level
            this.xpToNextLevel = 10;
            
        }
    }
}

const puppers = new Puppy ("Kevin", "York Shire Terrior", .6, "brown/black");
const bubs = new Puppy("Wanda", "Irish Setter", 1, "Golden/Brown");

puppers.greeting();
bubs.addExperience(10);

console.log(puppers);
console.log(bubs);