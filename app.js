//Code Practive from a course//

//Game Values 
let min  = 1, 
    max = 10,  
    winNum = getRandomNum(min, max),  
    guessLeft = 3; 

//UI Elements
const game = document.querySelector('#game'), 
    minNum = document.querySelector('.min-num'), 
    maxNum = document.querySelector('.max-num'), 
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'), 
    message = document.querySelector('.message'); 

//Assign UI Min and Max
minNum.textContent = min; 
maxNum.textContent = max;

//Play Again
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload(); 
    }
});

//Listen for Guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value); 
     
    //Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red'); 
    }

    //Check if Won
    if(guess === winNum){
       gameOver(true, `${winNum} is correct. YOU WIN!!!`);
    } else {
        //Wrong Number
        guessLeft -= 1; 

        if(guessLeft === 0){
            gameOver(false, `Game Over. You Lost! The correct number was ${winNum}`);
        } else{
            //Game continues - answer wrong
            
            guessInput.style.borderColor = 'red'; //Change border color 

            guessInput.value = ' '; //Clears the input

            setMessage(`${guess} is not correct, ${guessLeft} guesses left`) //Tells user it is the wrong number
        }
    }
});

// Game Over
function gameOver(won, message){
    let color; 
    won === true ? color ='green' : color = 'red';

    guessInput.disabled = true; //Disable Input 
    
    guessInput.style.borderColor = color; //Change border color

    message.style.color = color; //set text color
    
    setMessage(msg); //SetMessage

    //Play Again
    guessBtn.value = 'Play Again'; 
    guessBtn.className += 'play-again'; 
}

// Get Winning Num 
function getRandomNum(min, max){
    return Math.floor(Math.random()* (max - min + 1) +min);

}

//Set Message 
function setMessage(msg, color){
    message.style.color = color; 
    message.textContent = msg; 
}

