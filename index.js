// Code your solutions in this file

const writers = ["Lisa", "Brendan", "Ali"];
const event = "birthday";
let newArray = []
// for loop format
// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
//   }
  
function writeCards(writers, event) {
    for (let i = 0; i < writers.length; i++) {
       newArray.push(`Thank you, ${writers[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}



function countDown(number) {
    let i = 0

    while (i < number + 1){
        console.log(number - i);
        i++;
    }
}
