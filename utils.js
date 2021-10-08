export function didUserWin(userChoice, actualDraw){
    console.log(userChoice, actualDraw);
    if (userChoice === actualDraw){
        return 'draw';
    } else if (userChoice === 'rock' && actualDraw === 'scissors') {
        return true;
    } else if (userChoice === 'rock' && actualDraw === 'paper') {
        return false;
    } else if (userChoice === 'paper' && actualDraw === 'rock') {
        return true;
    } else if (userChoice === 'paper' && actualDraw === 'scissors') {
        return false;
    } else if (userChoice === 'scissors' && actualDraw === 'paper') {
        return true;
    } else if (userChoice === 'scissors' && actualDraw === 'rock') {
        return false;
    }
}

export function getRandomThrow(){
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}