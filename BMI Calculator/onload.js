
    document.addEventListener('DOMContentLoaded', function () {
        let button = document.getElementById('btn');
        button.addEventListener('click', calculateBMI);

        function calculateBMI() {
            let heightInput = document.getElementById('height');
            let weightInput = document.getElementById('weight');
            let resultDiv = document.getElementById('result');

            let height = parseFloat(heightInput.value);
            let weight = parseFloat(weightInput.value);

            if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
                resultDiv.textContent = 'Please provide valid Height and Weight!';
            } else {
                let bmi = (weight / ((height * height) / 10000)).toFixed(2);

                if (bmi < 18.6) {
                    resultDiv.innerHTML = `Underweight: <span>${bmi}</span>`;
                } else if (bmi >= 18.6 && bmi < 24.9) {
                    resultDiv.innerHTML = `Normal: <span>${bmi}</span>`;
                } else {
                    resultDiv.innerHTML = `Overweight: <span>${bmi}</span>`;
                }
            }
        }
    });

