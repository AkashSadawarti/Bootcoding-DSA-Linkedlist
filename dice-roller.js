
let minDice = 0
let maxDice = 10
let minSidesOfDice = 0
let maxSidesOfDice = 25

//Part 1
// Dice1
let Dice1
function randomDicePart1() {
    Dice1 = minDice + Math.floor(Math.random() * (maxDice - minDice))
    console.log(`Random number of Dice 1 is : ${Dice1}`);
}

// Dice1 Sides
let sidesPart1
function randomSidesofDicePart1() {
    sidesPart1 = minSidesOfDice + Math.floor(Math.random() * (maxSidesOfDice - minSidesOfDice))
    console.log(`Random sides of Dice 1 is : ${sidesPart1}`);
}

//Part 2
// Dice 2
let Dice2
function randomDicePart2() {
    Dice2 = minDice + Math.floor(Math.random() * (maxDice - minDice))
    console.log(`Random number of Dice 2 is : ${Dice2}`);
}

//Dice 2 sides
let sidesPart2
function randomSidesofDicePart2() {
    sidesPart2 = minSidesOfDice + Math.floor(Math.random() * (maxSidesOfDice - minSidesOfDice))
    console.log(`Random sides of Dice 2 is : ${sidesPart2}`);
}




