// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from "./utils";

const playButton = document.getElementById('play');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const draw = document.getElementById('draw');
const error = document.getElementById('error');

// initialize global state
let wins = 0;
let losses = 0;
let draw = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  playButton.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    if(!selected){
      return error.classList.remove('hidden');
    }
    error.classList.add('hidden');
    const userThrow = selected.value;
    const computerThrow = getRandomThrow();
    //console.log('userThrow');
    //console.log('computerThrow');

    if(didUserWin(userThrow, computerThrow)){
      wins++;

    } else {

      losses++;
    }
  
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    
  })
