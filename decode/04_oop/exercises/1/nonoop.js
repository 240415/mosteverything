// function makeDog(n, fdf, b, a) {
//     return {name: n, favouriteDogFood: fdf, breed:n, age: a};
// }
class MakeDog{
    constructor(n, fdf, b, a){
        this.name = n;
        this.favouriteDogFood = fdf;
        this.breed = b;
        this.age = a;
    }
}

// function makeCat(n, fcf, a) {
//     return {name: n, favouriteCatFood: fcf, age: a};
// }
class MakeCat{
    constructor(n, fcf, a){
        this.name = n;
        this.favouriteCatFood = fcf;
        this.age = a
    }
}

// function makePerson(n, pi, ii) {
//     return {name: n, purinaInventory: pi, iamsInventory: ii};
// }
class MakePerson{
    constructor(n, pi, ii){
        this.name = n;
        this.purinaInventory = pi;
        this.iamsInventory = ii
    }
}

function dogAnimalSound(dog) {
    if(dog.breed === "labrador") {
        console.log("big woof");
    } else {
        console.log("small woof");
    }    
}

function catAnimalSound(cat) {
    if(cat.age < 2) {
        console.log("meow");
    } else {
        console.log("MEOW");
    }
}

function feedDog(person, dog) {
    if(dog.favouriteDogFood === 'iams') {
        if(person.iamsInventory > 0) {
            person.iamsInventory = person.iamsInventory - 1;
            console.log(dog.name + " has been fed");
        } else {
            console.log("no more iams!");
        }
    } else {
        console.log(person.name + " only has iams. Sorry " + dog.name + "!")
    }
}

function feedCat(person, cat) {
    if(cat.favouriteCatFood === 'purina') {
        if(person.purinaInventory > 0) {
            person.purinaInventory = person.purinaInventory - 1;
            console.log(cat.name + " has been fed");
        } else {
            console.log("no more purina!");
        }
    } else {
        console.log(person.name + " only has purina. Sorry " + cat.name + "!")
    }
}

var fido = new MakeDog("fido", "iams", "labrador", 4);
var mittens = new MakeCat("mittens", "purina", 3);
var bob = new MakePerson("bob", 2, 1);

catAnimalSound(mittens);
dogAnimalSound(fido);

feedCat(bob, mittens);
feedDog(bob, fido);
feedCat(bob, mittens);
feedDog(bob, fido);
feedCat(bob, mittens);
