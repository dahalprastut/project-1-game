// -----------------------game start here-------------------



var dice;
var currentValue = 0;
var playerScore = [0,0];
var activePlayer = 0;
var roll = document.querySelector('.roll');
var save = document.querySelector('.save');
var diceValueDisplayer = document.querySelector('.dice-value');
var currentValueSelector = document.querySelector('.current-value');
document.querySelector('.player1').classList.add('active');



// click on roll dice to display dice value
roll.addEventListener('click', function () {


    // put random value of dice in a variable

    dice = Math.ceil(Math.random() * 6);
    console.log(dice);

    // update UI with dice value
    diceValueDisplayer.innerText = dice;

    // add the value in another variable

    currentValue += dice;

    // update UI with added value
    currentValueSelector.innerText = currentValue;

});


// if save is pressed 

save.addEventListener('click', function(){

    // save the current value to main value
    playerScore[activePlayer]+=currentValue;

    // make the value of UI and current dice value to 0
    var mainValue = document.querySelector('#main-value-id-'+activePlayer);
    mainValue.innerText=playerScore[activePlayer];

    
    // change active player
    if(activePlayer == 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    
    
    // // change active player UI
    document.querySelector('.player1').classList.toggle('active');
    document.querySelector('.player2').classList.toggle('active');



    // set the value of current value to 0

    currentValue = 0;
    currentValueSelector.innerText = currentValue;

    // set the value of dice to 0

    dice = 0;
    diceValueDisplayer.innerText = dice;


 
});