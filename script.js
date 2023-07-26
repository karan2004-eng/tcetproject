function submitQuiz() {
    const answers = ['b','a','a','b','c','d','c','d','a','a'];
    const userAnswers = [
      document.querySelector('input[name="q1"]:checked').value,
      document.querySelector('input[name="q2"]:checked').value,
      document.querySelector('input[name="q3"]:checked').value,
      document.querySelector('input[name="q4"]:checked').value,
      document.querySelector('input[name="q5"]:checked').value,
      document.querySelector('input[name="q6"]:checked').value,
      document.querySelector('input[name="q7"]:checked').value,
      document.querySelector('input[name="q8"]:checked').value,
      document.querySelector('input[name="q9"]:checked').value,
      document.querySelector('input[name="q10"]:checked').value
    ];
  
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
      if (userAnswers[i] === answers[i]) {
        score++;
      }
    }
    const nameInput = document.getElementById("userName");
    const name = nameInput.value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Congratualtions <strong>${name}!</strong></p><p>Your score: ${score}/${answers.length}</p>`;
  }
  