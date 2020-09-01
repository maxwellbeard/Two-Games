let randomNumber = Math.floor(Math.random() * 100) + 1;
let numTries = 1;
const inputField = document.querySelector('form');
const prevPara = document.querySelector('.previous');
const resultSpan = document.querySelector('span')
const body = document.querySelector('body');

inputField.addEventListener('submit', (e) => {
    e.preventDefault();
    resultSpan.classList.remove('justRight');
    resultSpan.classList.remove('tooBig');
    resultSpan.classList.remove('tooSmall');
    resultSpan.classList.remove('tooMany');
    let userGuess = document.getElementById('guess').value;
    if(numTries < 10){
        if(numTries == 1){
            prevPara.textContent = 'Previous guesses:  ';
        }
        prevPara.textContent += `${userGuess}  `;
        if(userGuess == randomNumber){
            resultSpan.textContent = 'Congratulations! You got it right!';
            resultSpan.classList.add('justRight');
            gameOver();
        } else {
            if(userGuess > randomNumber){
                resultSpan.textContent = 'WRONG, that gues was too BIG';
                resultSpan.classList.add('tooBig');
            } else if(userGuess < randomNumber){
                resultSpan.textContent = 'WRONG, that gues was too SMALL';
                resultSpan.classList.add('tooSmall');
            }
        }
    } else {
        prevPara.textContent += `${userGuess}`;
        resultSpan.textContent = '!!! Too many attempts, GAME OVER !!!';
        resultSpan.classList.add('tooMany');
        gameOver();
    }
    numTries++;
    document.getElementById('guess').value = '';
});

const gameOver = () => {
    document.getElementById('guess').disabled = true;
    let button = document.createElement('button');
    button.textContent = 'Start new game';
    body.append(button);
    button.addEventListener('click', () => {
        button.parentNode.removeChild(button);
        numTries = 0;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        prevPara.textContent = '';
        resultSpan.textContent = '';
        document.getElementById('guess').disabled = false;
    });
    button.focus();
};