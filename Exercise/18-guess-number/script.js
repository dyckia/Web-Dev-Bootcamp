var number = 7;

var guess = prompt("What's your guess of the number?");

if (guess < number) {
    alert("Your guess is lower than the number");
} else if (guess > number) {
    alert("Your guess is higher than the number");
} else {
    alert("You're right.");
}
