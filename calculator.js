// Complete scoring logic implementing all mathematical parameters

function calculateScore(params) {
    const { waveScore, criterionWeighting, baseScore, innovationModifier, featureIncentive, penaltyMatrix } = params;
    let score = baseScore;

    // Wave scoring logic
    score += waveScore;

    // Applying criterion weighting
    score *= criterionWeighting;

    // Innovation modifier
    score += innovationModifier;

    // Feature incentive
    score += featureIncentive;

    // Applying penalty matrix
    for (const penalty of penaltyMatrix) {
        score -= penalty;
    }

    // Offset caps
    if (score > 100) {
        score = 100;
    } else if (score < 0) {
        score = 0;
    }

    return score;
}

// Example usage:
const scoringParameters = {
    waveScore: 10,
    criterionWeighting: 1.2,
    baseScore: 50,
    innovationModifier: 5,
    featureIncentive: 15,
    penaltyMatrix: [2, 1]
};

const finalScore = calculateScore(scoringParameters);
console.log(finalScore); // Outputs the calculated score