
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


