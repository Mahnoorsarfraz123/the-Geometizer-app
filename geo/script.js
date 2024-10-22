function Calculate() {
    const radius = document.getElementById('radius').value;
    const resultElement = document.getElementById('result');

    if (radius <= 0) {
        resultElement.textContent = 'Please enter a valid radius.';
        return;
    }

    const area = Math.PI * Math.pow(radius, 2);
    const circumference = 2 * Math.PI * radius;

    resultElement.textContent = `Area: ${area.toFixed(2)}, Circumference: ${circumference.toFixed(2)}`;
}
