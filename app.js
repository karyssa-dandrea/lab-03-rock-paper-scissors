// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from "./utils.js";

const playButton = document.getElementById('play');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const draw = document.getElementById('draws');
const error = document.getElementById('error');


// initialize global state
let wins = 0;
let losses = 0;
let draws = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  playButton.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    console.log('button-click');
    if(!selected){
      return error.classList.remove('hidden');
    }
    error.classList.add('hidden');
    const userThrow = selected.value;
    const computerThrow = getRandomThrow();
    //console.log('userThrow');
    //console.log('computerThrow');
    
  

    if(didUserWin(userThrow, computerThrow)) wins++;
    if(!didUserWin(userThrow, computerThrow)) losses++;
    if(userThrow === computerThrow){
      draws++;
      console.log('it was a draw');
    } 
      
    
  
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    draw.textContent = draws;
  })
