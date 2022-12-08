import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
(async () => {
    await showBanner('Guessing Game', 'This is a suitable tagline' ,"green");
})();
let score =0;
let play =true;
async function guessingNumber(){
    while(play)
    {
  
let randomNumber =Math.ceil((Math.random()*2)+1);
  let answer =await  inquirer.prompt([{
        name : "usernumber",
        type : "number",
        message : "Enter any Number from 1 to 3"

    }]);
    if (answer.usernumber == randomNumber){
        console.log(chalk.green("you guess a right number"));
        score+= 5;
        console.log(chalk.yellow(`your Score is ${ score}`));
    }
    else{
        console.log(chalk.red ("Try Again !!"));
        play=false;
    }
}
}
setTimeout(()=>{
    guessingNumber()
},1000)





