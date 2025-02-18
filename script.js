//get all the elements
const guessSubmit=document.querySelector(".guessSubmit");
const guesses=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const guessField=document.querySelector(".guessField");
const lowOrHi=document.querySelector(".lowOrHi");

// store the random number in to a variable
let randomNumber=Math.floor(Math.random()*100)+1;
let checkCount=1;
//generate the number btw 1 to 100
function checkGuess()
{
   //convert the input value into number
   let guessNum=Number(guessField.value);
   if(isNaN(guessNum) || guessNum<1  || guessNum >100)
   {
    alert("Invald Number ! ReEnter the number\n");
    return;
   }
   if(checkCount===1)
   {
     guesses.textContent=`Previous Gasses are : `;
     lowOrHi.textContent=``;
   }
   if(checkCount===10)
   {
    lastResult.textContent=`!!! Game Over!`;
    lowOrHi.textContent=``;
    gameover();
    return; 
   }
     guesses.textContent +=` ${guessNum} `;
   if(guessNum===randomNumber)
   {
      lastResult.textContent=`Congratulation You Guessed the Number`;
      lowOrHi.textContent='';
      lastResult.style.backgroundColor='green';
      gameover();
      return;
   }
   else if (guessNum<randomNumber)
   {
    lowOrHi.textContent=`Last Entered Number is too Loo !`;
    lastResult.textContent=``;
   }
   else 
   {
    lastResult.textContent=``;
    lowOrHi.textContent=`Last Entered Number is too High !`;
   }
   checkCount++;
   guessField.value='';
   guessField.focus();
}
guessSubmit.addEventListener("click",checkGuess);
const resetBtn=document.createElement("button");
function gameover()
{
  guessSubmit.disabled=true;
  guessField.disabled=true;
  //create a button to reset the game

  resetBtn.textContent=`Reset Game`;
  document.body.appendChild(resetBtn);
  resetBtn.addEventListener("click",resetGame);
}
function resetGame()
{
  guessField.disabled=false;
  guessSubmit.disabled=false;
  // make sure to empty the paragraphs tags
  const paras = document.querySelectorAll('.resultParas h5');
  paras.forEach(para => para.textContent = '');
  
  //remove the reset button
  if(resetBtn)
  {
    resetBtn.remove();
  }
  guessField.value='';
  guessField.focus();
  let randomNumber=Math.floor(Math.random()*100)+1;
}