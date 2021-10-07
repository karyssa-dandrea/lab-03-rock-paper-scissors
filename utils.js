export function didUserWin(userChoice, actualDraw){
     if (userChoice === actualDraw){
         return 'It\'s a draw!'
     } else if (userChoice === 'rock' && actualDraw === 'scissors') {
         return 'wins';
     } else if (userChoice === 'rock' && actualDraw === 'paper') {
        return 'losses';
} else if (userChoice === 'paper' && actualDraw === 'rock') {
    return 'wins';
} else if (userChoice === 'paper' && actualDraw === 'scissors') {
    return 'losses';

}
}
export function getRandomThrow(){
    return ['rock', 'paper', 'scissors'][Math.round(Math.random())];
}