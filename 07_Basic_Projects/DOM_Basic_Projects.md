# JavaScript Basic Projects
## 1. BackGround Changer
```javascript
// JavaScript
    <script>
        const buttons = document.querySelectorAll('.btn');
        const body = document.body;
        const h1 = document.querySelector('h1');

        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                body.style.backgroundColor = e.target.id;
                if (e.target.id === 'black' || e.target.id === 'navy') {
                    h1.style.color = 'white';
                }
                else if (e.target.id === 'white' || e.target.id === 'yellow' || e.target.id === 'lime') {
                    h1.style.color = 'black';
                }
            });
        });
    </script>
```

## 2. BMI Calculator
```javascript
// JavaScript
    <script>
        const form = document.getElementById('bmiForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const weight = parseFloat(document.querySelector('#weight').value);
            const height = parseFloat(document.querySelector('#height').value);
    
            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                document.querySelector('#msg').innerHTML = "<h2>Enter Valid Weight and Height</h2>";
            } else {
                const bmi = weight / ((height / 100) ** 2);
    
                let signal = "";
                if (bmi < 18.5) {
                    signal = "Underweight";
                    document.querySelector('#bmi').style.color = "blue";
                } else if (bmi >= 18.5 && bmi < 24.9) {
                    signal = "Normal";
                    document.querySelector('#bmi').style.color = "green";
                } else if (bmi >= 24.9 && bmi < 29.9) {
                    signal = "Overweight";
                    document.querySelector('#bmi').style.color = "orange";
                } else {
                    signal = "Obese";
                    document.querySelector('#bmi').style.color = "red";
                }
    
                document.querySelector('#bmi').textContent = bmi.toFixed(2) + " (" + signal + ")";
                document.querySelector('#value').style.display = 'block';
            }
        });
    </script>
```

## 3. Digital Clock
```javascript
// JavaScript
<script>
    setInterval(function() {
        const date = new Date()
        // console.log(date.toLocaleTimeString());
        document.getElementById('time').innerText = date.toLocaleTimeString()
    }, 1000)
</script
```

## 4. Guess The Number Game
```javascript
// JavaScript
    <script>
        let randomNumber = Math.floor(Math.random() * 50) + 1;
        const submit = document.querySelector('#submit');
        const userInput = document.querySelector('#guess');
        const guessSlot = document.querySelector('#previousGuesses');
        const remaining = document.querySelector('#attempts');
        const lowOrHigh = document.querySelector('.lowOrHigh');
        const error = document.querySelector('#error');
        const startOver = document.querySelector('.resultParas');
        let prevGuess = [];
        let numGuess = 1;
        let playGame = true;
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            if (playGame) {
                const guess = parseInt(userInput.value);
                validateGuess(guess);
            }
        });
        function validateGuess(guess) {
            if (!Number.isInteger(guess) || guess < 1 || guess > 50) {
                error.textContent = "Enter a Valid Integer between 1 to 50";
            } else {
                error.textContent = "";
                prevGuess.push(guess);
                if (numGuess === 8) {
                    displayGuess(guess);
                    displayMessage(`Game Over! The number was ${randomNumber}`);
                    endGame();
                } else {
                    displayGuess(guess);
                    checkGuess(guess);
                }
            }
        }
        function checkGuess(guess) {
            if (guess === randomNumber) {
                displayMessage(`Congratulations! You guessed the correct number`, 'congrats');
                endGame();
            } else {
                displayMessage(`Wrong! Try Again`);
                if (guess < randomNumber) {
                    lowOrHigh.textContent = 'Last guess was too low';
                } else {
                    lowOrHigh.textContent = 'Last guess was too high';
                }
            }
        }
        function displayGuess(guess) {
            userInput.value = '';
            guessSlot.textContent += `${guess} `;
            numGuess++;
            remaining.textContent = `${8 - numGuess + 1}`;
        }
        function displayMessage(message, className) {
            lowOrHigh.innerHTML = `<h2 class="${className}">${message}</h2>`;
        }
        function endGame() {
            userInput.value = '';
            userInput.setAttribute('disabled', '');
            playGame = false;
            addRestartButton();
        }
        function addRestartButton() {
            const p = document.createElement('p');
            p.classList.add('button');
            p.textContent = 'Start New Game';
            startOver.appendChild(p);
            p.addEventListener('click', () => {
                randomNumber = Math.floor(Math.random() * 50) + 1;
                prevGuess = [];
                numGuess = 1;
                guessSlot.textContent = '';
                lowOrHigh.textContent = '';
                remaining.textContent = '8';
                userInput.removeAttribute('disabled');
                startOver.removeChild(p);
                playGame = true;
            });
        }
    </script>
```