export function didUserWin(userChoice, actualDraw){
     return userChoice === actualDraw;
}

export function getRandomThrow(){
    return ['rock', 'paper', 'scissors'][Math.round(Math.random())];
}