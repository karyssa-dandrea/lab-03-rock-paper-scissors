export function didUserWin(userChoice, actualDraw){
     if (userChoice === actualDraw){
         return 'draws'
     } else if (userChoice === 'rock' && actualDraw === 'scissors') {
         return 'wins';
     } else if (userChoice === 'rock' && actualDraw === 'paper') {
        return 'losses';
} else if (userChoice === 'paper' && actualDraw === 'rock') {
    return 'wins';
} else if (userChoice === 'paper' && actualDraw === 'scissors') {
    return 'losses';
} else if (userChoice === 'scissors' && actualDraw === 'paper') {
    return 'wins';
} else if (userChoice === 'scissors' && actualDraw === 'rock') {
    return 'losses';
} else if (userChoice === 'scissors' && actualDraw === 'scissors') {
    return 'draws';
} else if (userChoice === 'paper' && actualDraw === 'paper') {
    return 'draws';

} else if (userChoice === 'rock' && actualDraw === 'rock') {
    return 'draws';
}
}


export function getRandomThrow(){
    return ['rock', 'paper', 'scissors'][Math.round(Math.random())];
}