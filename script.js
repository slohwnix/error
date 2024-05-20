let currentNumber = 0;

function updateNumber() {
    currentNumber++;
    let numberString = currentNumber.toString();
    if (numberString.length > 4) {
        numberString = numberString.slice(-4);
    }
    document.getElementById('number-display').innerText = numberString;
}

setInterval(updateNumber, 1000); // Update the number every second
