document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // Months are 0-based
    const year = parseInt(document.getElementById('year').value);

    const today = new Date();
    const birthDate = new Date(year, month, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is ${age} years.`;
});
