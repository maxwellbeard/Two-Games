const buttons = document.querySelector('.buttons');
const feedback = document.querySelector('.feedback');
const winLoss = document.querySelector('.winLoss');
const img = document.querySelector('img');
const choices = ['Heads', 'Tails'];
const imgs = ['img/heads.jpg', 'img/tails.jpg'];
let wins = 0;
let losses = 0;
let toss;
let choice;
let result;

buttons.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        toss = Math.round(Math.random(1));

        // checking users choice
        if(e.target.value === 'heads'){
            choice = 0;
        } else if(e.target.value === 'tails'){
            choice = 1;
        }

        // checking if user was correct
        if(choice === toss){
            result = 'You chose wisely!';
            wins++;
        } else {
            result = 'Sorry, wrong choice';
            losses++;
        }

        // updating page with results
        img.src = imgs[toss];

        feedback.innerHTML = `
            You chose ${choices[choice]}<br>
            The toss is ${choices[toss]}<br>
            ${result}<br><br>
        `;

        winLoss.innerHTML = `
            Wins = ${wins} &nbsp &nbsp
            Losses = ${losses}
        `;
    }
})