// scoring logic implementation here

function calculateScore(input) {
    // Implement your scoring logic
    let score = 0;
    // Example scoring logic
    if (input > 10) {
        score += 10;
    } else {
        score += input;
    }
    return score;
}

module.exports = calculateScore;