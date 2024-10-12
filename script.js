function calculateAttendance() {
    const totalStudents = parseInt(document.getElementById('totalStudents').value);
    const workingDays = parseInt(document.getElementById('workingDays').value);
    const totalAttendance = parseInt(document.getElementById('totalAttendance').value);
    const resultArea = document.getElementById('resultArea');

    // Reset previous result
    resultArea.value = "";

    // Validation: Check for empty fields
    if (isNaN(totalStudents) || isNaN(workingDays) || isNaN(totalAttendance)) {
        resultArea.value = "Please enter valid numbers in all fields.";
        return;
    }

    // Validation: Check for non-negative numbers
    if (totalStudents <= 0 || workingDays <= 0 || totalAttendance < 0) {
        resultArea.value = "Values must be positive and greater than zero.";
        return;
    }

    // Calculate maximum possible attendance
    const maxAttendance = totalStudents * workingDays;

    // Validation: Check if total attendance is realistic
    if (totalAttendance > maxAttendance) {
        resultArea.value = `Total attendance cannot exceed ${maxAttendance} (students * working days).`;
        return;
    }

    // Calculate average attendance
    const averageAttendance = (totalAttendance / maxAttendance) * 100;

    // Display the result
    resultArea.value = `Average Attendance: ${averageAttendance.toFixed(2)}%`;
}

// Function to generate raindrops
function createRaindrops() {
    const raindropCount = 100; // Number of raindrops
    const body = document.querySelector('body');

    for (let i = 0; i < raindropCount; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = Math.random() * 100 + 'vw'; // Random position on x-axis
        raindrop.style.animationDelay = Math.random() * 2 + 's'; // Random delay
        raindrop.style.opacity = Math.random(); // Random opacity for some raindrops

        body.appendChild(raindrop);
    }
}

// Call the function to create raindrops
createRaindrops();
