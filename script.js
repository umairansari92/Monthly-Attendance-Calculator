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

// Dark Mode Toggle Functionality
function toggleTheme() {
    const container = document.getElementById('themeContainer');
    container.classList.toggle('dark-mode');
}
