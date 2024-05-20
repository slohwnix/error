let currentIndex = 0;
let piDigits = "3."; // Initial π value
let k = 0;

function calculateNextPiDigit() {
    // Bailey-Borwein-Plouffe (BBP) formula for π
    let pi = 0;
    for (let i = 0; i <= k; i++) {
        pi += (1 / Math.pow(16, i)) * (
            (4 / (8 * i + 1)) -
            (2 / (8 * i + 4)) -
            (1 / (8 * i + 5)) -
            (1 / (8 * i + 6))
        );
    }

    let piString = pi.toString().replace(".", "");
    let newDigit = piString[currentIndex + 1]; // +1 to skip "3."
    if (newDigit !== undefined) {
        piDigits += newDigit;
        currentIndex++;

        if (piDigits.length > 6) { // "3." + 4 digits
            piDigits = "3." + piDigits.slice(piDigits.length - 4);
        }

        document.getElementById('number-display').innerText = piDigits;
    }
    k++;
}

setInterval(calculateNextPiDigit, 1000); // Update the number every second
