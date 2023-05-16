/* user input for a number,  */
let fnum = prompt("How long should be the Fibonacci Sequenze", "10");

/* Control if the user writes a number */
isItANumber(fnum);
function isItANumber(userschoice){
if (fnum == parseInt(userschoice)){
  fnum = parseInt(userschoice);
}else{
  fnum = prompt("Please write a number", "10");
  isItANumber(fnum);
}
}

let fibonacciSequence = [];
/* make an array to find the lenght of Fibonacci  */
let fibonacciSequenzeLenght = [];
for(let i = 1 ; i <= fnum ; i++){
  fibonacciSequenzeLenght.push(i);
}
/* find the fibonacci sequenze */
function fibonacciFinder(fnum){
    if (fnum == 1){
        return 0;
    }
    else if(fnum == 2) {
        return 1; 
    } 
    else{
        let sequence = fibonacciFinder(fnum - 1) + fibonacciFinder (fnum - 2);
        sequence = parseInt(sequence);
        return sequence;
    }
}

fibonacciSequence = fibonacciSequenzeLenght.map(fibonacciFinder);
console.log(fibonacciSequence);

