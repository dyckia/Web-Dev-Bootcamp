var btnOne = document.querySelector("#p1");
var btnTwo = document.querySelector("#p2");
var btnReset = document.getElementById("reset");
var displayOne = document.querySelector("#displayOne");
var displayTwo = document.querySelector("#displayTwo");
var numInput = document.querySelector("input");
var scoreOne = 0;
var scoreTwo = 0;
var gameOver = false;
var winningScore = 5;

btnOne.addEventListener("click", function(){
    if (!gameOver) {
        scoreOne++;
        displayOne.textContent = scoreOne;
        if (scoreOne === winningScore) {
            gameOver = true;
            displayOne.classList.add("winner");
        }
    }
});

btnTwo.addEventListener("click", function () {
    if (!gameOver) {
        scoreTwo++;
        displayTwo.textContent = scoreTwo;
        if (scoreTwo === winningScore) {
            gameOver = true;
            displayTwo.classList.add("winner");
        }
    }
});

btnReset.addEventListener("click", function() {
    scoreOne = 0;
    scoreTwo = 0;
    gameOver = false;
    displayOne.textContent = 0;
    displayTwo.textContent = 0;
    displayOne.classList.remove("winner");
    displayTwo.classList.remove("winner");
});

numInput.addEventListener("change", function(){
    alert("haha");
})