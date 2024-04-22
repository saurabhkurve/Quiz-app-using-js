document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Madrid", "Berlin", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "Harper Lee",
        "J.K. Rowling",
        "Stephen King",
        "Ernest Hemingway",
      ],
      correctAnswer: "Harper Lee",
    },

    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Michelangelo",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question:
        "Which river is considered sacred in Hinduism and flows through the city of Varanasi?",
      options: ["Yamuna", "Ganges", "Brahmaputra", "Indus"],
      correctAnswer: "Ganges",
    },
    {
      question: "What is the national animal of India?",
      options: ["Tiger", "Elephant", "Lion", "Peacock"],
      correctAnswer: "Tiger",
    },
    {
      question: "Who was the first Prime Minister of India?",
      options: [
        "Indira Gandhi",
        "Jawaharlal Nehru",
        "Rajiv Gandhi",
        "Mahatma Gandhi",
      ],
      correctAnswer: "Jawaharlal Nehru",
    },
    {
      question: "In which city is the iconic monument Taj Mahal located?",
      options: ["Mumbai", "New Delhi", "Agra", "Jaipur"],
      correctAnswer: "Agra",
    },
    {
      question: "What is the national flower of India?",
      options: ["Lotus", "Rose", "Sunflower", "Jasmine"],
      correctAnswer: "Lotus",
    },
  ];

  // -----------------------------------------------------

  let currentQuestion = 0;
  let score = 0;

  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");
  const submitButton = document.getElementById("submit-btn");

  submitButton.addEventListener("click", endQuiz);

  function displayQuestion() {
    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;
    optionsElement.innerHTML = "";
    currentQ.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(optionButton);
    });
  }

  function displayIndicators() {
    const indicatorsContainer = document.getElementById("indicators");
    indicatorsContainer.innerHTML = "";
    questions.forEach(() => {
      const indicator = document.createElement("div");
      indicator.classList.add("feedback-indicator");
      indicatorsContainer.appendChild(indicator);
    });
  }

  function updateIndicator(index, isCorrect) {
    const indicators = document.querySelectorAll(".feedback-indicator");
    const indicator = indicators[index];
    if (isCorrect) {
      indicator.classList.add("correct");
      indicator.innerHTML = "&#10003";
    } else {
      indicator.classList.add("incorrect");
      indicator.innerHTML = "&#10007";
    }
  }

  function checkAnswer(selectedAnswer) {
    const currentQ = questions[currentQuestion];
    if (selectedAnswer === currentQ.correctAnswer) {
      score++;
      updateIndicator(currentQuestion, true);
    } else {
      updateIndicator(currentQuestion, false);
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    feedbackElement.textContent = `Quiz completed! Your Score is ${score}/${questions.length}. Thank You...`;
    submitButton.style.display = "none";
  }

  displayIndicators();
  displayQuestion();
});
