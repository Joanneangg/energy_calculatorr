function calculateEnergy() {
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const activity = document.getElementById('activity').value;
    const result = document.getElementById('result');

    if (age && gender && activity) {
        let energyIntake = 0;

        // Hypothetical RNI values for demonstration (in kcal/day)
        const rniData = {
            male: {
                low: [2100, 2200, 2300, 2400, 2500],
                moderate: [2300, 2400, 2500, 2600, 2700],
                high: [2600, 2700, 2800, 2900, 3000]
            },
            female: {
                low: [1800, 1900, 2000, 2100, 2200],
                moderate: [2000, 2100, 2200, 2300, 2400],
                high: [2200, 2300, 2400, 2500, 2600]
            }
        };

        // Index for age: 13-17 corresponds to 0-4
        const ageIndex = age - 13;

        // Get the correct energy intake from RNI data
        energyIntake = rniData[gender][activity][ageIndex];

        // Display the result
        result.textContent = `Recommended Energy Intake: ${energyIntake} kcal/day`;
    } else {
        result.textContent = 'Please fill out all fields.';
    }
}
