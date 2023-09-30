const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "London", "Paris"],
        answer: "D"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "A"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "B"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "B"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "B"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");
const submitButton = document.getElementById("submit-button");
const nextButton = document.getElementById("next-button");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionA.textContent = currentQuestion.options[0];
    optionB.textContent = currentQuestion.options[1];
    optionC.textContent = currentQuestion.options[2];
    optionD.textContent = currentQuestion.options[3];
    result.textContent = "";
    submitButton.disabled = false;
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        result.textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedAnswer.value;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        result.textContent = "Correct!";
        score++;
    } else {
        result.textContent = "Incorrect. The correct answer is " + correctAnswer;
    }

    submitButton.disabled = true;
    nextButton.disabled = false;
}

function showScore() {
    scoreDisplay.textContent = "Your Score: " + score + " out of " + questions.length;
}

submitButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        showScore();
        nextButton.disabled = true;
    }
});

// Initial load
loadQuestion();
nextButton.disabled = true;
