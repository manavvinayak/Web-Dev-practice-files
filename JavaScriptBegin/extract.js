const value = "the sword of elegends"
const words = value.split(",")
console.log(words)
// it will split the words and store it in a array

const initialArray = [1,2,3,4]
function logThing(str) {
    console.log(str)
}
initialArray.forEach(logThing)

logThing(1)
logThing(2)
logThing(3)