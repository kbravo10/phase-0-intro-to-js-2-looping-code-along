// Code your solutions in this file

const newArray = [];
let message;

function writeCards(arrayString, eventName){
    for(let i = 0; i < arrayString.length; i++){
        message = `Thank you, ${arrayString[i]}, for the wonderful ${eventName} gift!`
        newArray[i] = message;
        console.log
    }
    return newArray;
}

function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}