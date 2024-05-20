let currentIndex = 0;
let pi = "3."; // Initial pi value
let piApproximation = 0;
let denominator = 1;
let sign = 1;

function calculateNextPiDigit() {
    // Leibniz formula for π: π = 4 * (1 - 1/3 + 1/5 - 1/7 + 1/9 - ...)
    piApproximation += (4 / denominator) * sign;
    denominator += 2;
    sign *= -1;
    
    let piString = piApproximation.toString().replace(".", "").slice(0, currentIndex + 1);
    if (piString.length > 4) {
        piString = piString.slice(piString.length - 4);
    }
    document.getElementById('number-display').innerText = piString;
    
    currentIndex++;
}

setInterval(calculateNextPiDigit, 1000); // Update the number every second
