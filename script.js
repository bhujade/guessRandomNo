
let max = prompt("enter max no");

let random = Math.floor(Math.random() * max)+1;

let guess = prompt("enter the guess value");

while(true){
    if(guess == "quit"){
        console.log("quitting the app");
        break;
    }

    if(guess == random){
        console.log("congrats guess match", random);
        break;
      }else if(guess < random){
        
        guess = prompt("  guess is too small , guess again")
      }else {
        guess = prompt("guess is too large");
      }
}