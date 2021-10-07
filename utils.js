export function didUserWin(userChoice, actualDraw){
     if (userChoice === actualDraw){
         return 'It\'s a draw!'
     };

}

export function getRandomThrow(){
    return ['rock', 'paper', 'scissors'][Math.round(Math.random())];
}