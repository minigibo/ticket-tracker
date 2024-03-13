// function that takes number and returns true if number positive false if negative

const isNumberPositive = (number) => {

    if (number > 0) {
        console.log("True")
    } else if (number < 0) {
        console.log("False")
    } else {
        console.log("Number is zero")
    }
}

isNumberPositive(0)

// function that takes number of days and converts it into an age

const convertAgeToDays = (amountOfDays) => {
    const age = amountOfDays / 365;
    console.log(age);
}

convertAgeToDays(6570)

// function that takes three numbers and returns the largest
const getLargestNumber = (numberOne, numberTwo, numberThree) => {
    let largestNumber = numberOne;
    if (numberTwo > largestNumber){
        largestNumber = numberTwo;
    }
    if (numberThree > largestNumber){
        largestNumber = numberThree;
    }
    console.log(largestNumber);
}

getLargestNumber(6,2,8)

// function that takes array and returns the last name
const getLastName = (names) => {
    const lastName = names[names.length - 1];
    console.log(lastName);
}

getLastName(["john", "paul", "pete"])

// function that takes array of numbers returns true if all are positive false if any negatives
const allNumbersPositive = (listOfNumbers) => {
    const positiveNumbers = listOfNumbers.filter(listOfNumbers => listOfNumbers > 0);
    if (positiveNumbers.length === listOfNumbers.length) {
        console.log("True")
    } else {
        console.log("False")
    }
}

allNumbersPositive([-2, 4, 5])