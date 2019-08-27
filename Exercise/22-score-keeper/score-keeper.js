var btnOne = document.querySelector("#p1");
var btnTwo = document.querySelector("#p2");
var btnReset = document.getElementById("reset");
var scoreOne = document.querySelector("#scoreOne");
var scoreTwo = document.querySelector("#scoreTwo");


btnOne.addEventListener("click", function(){
    scoreOne.textContent = Number(scoreOne.textContent) + 1;
});
