//Element selectors
var startBtn = document.getElementById('start-btn');
var nextBtn = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var gameClock = document.getElementById('game-clock');

//variables questions and to hold which question to show
var shuffledQuestions;
var currentQuestionIndex;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})


function startGame() {
    startBtn.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
  })
}

function resetState() {
    clearStatusClass(document.body);
    nextBtn.classList.add('hide');
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextBtn.classList.remove('hide');
    } else {
        startBtn.innerText = 'Restart';
        startBtn.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: "Which method would you use to find an ID element?",
        answers: [
          { text: 'getElementById()', correct: true },
          { text: 'getElementByID()', correct: false },
          { text: 'getElementbyId()', correct: false },
          { text: 'getElementsById()', correct: false },
        ]
      },
      {
        question: 'To see if two variables are equal in an if / else statement you would use ____.',
        answers: [
          { text: '=', correct: false },
          { text: '==', correct: true },
          { text: '.equals()', correct: false },
          { text: '!=', correct: false }
        ]
      },
      {
        question: 'Math.random() returns ____.',
        answers: [
          { text: 'a number between 1 and 9', correct: false },
          { text: 'a number between 0 and 1', correct: true },
          { text: 'a number between 0 and 9', correct: false },
          { text: 'a number between 0 and 99', correct: false }
        ]
      },
      {
        question: 'The appendChild() method places a node as the ____ child.',
        answers: [
          { text: 'first', correct: false },
          { text: 'last', correct: true },
          { text: 'primary', correct: false },
          { text: 'secondary', correct: false },
        ]
      },
      {
        question: 'The first index of an array is ____.',
        answers: [
          { text: '1', correct: false },
          { text: '0', correct: true },
          { text: '-1', correct: false },
          { text: '0 or 1', correct: false }
        ]
      },
      {
        question: 'Javascript was created by ____.',
        answers: [
          { text: 'Brendan Eich', correct: true },
          { text: 'Steve Jobs', correct: false },
          { text: 'Charles Petzold', correct: false },
          { text: 'James Gosling', correct: false }
        ]
      },
      {
        question: 'What is not an example of an HTML event?',
        answers: [
          { text: 'A user pressing a button', correct: false },
          { text: 'When the webpage loads', correct: false },
          { text: 'A user pressing a key', correct: false },
          { text: 'When your compiler throws an error', correct: true }
        ]
      },
      {
        question: 'Why do JavaScript and Java have similar name?',
        answers: [
          { text: 'JavaScript is a stripped-down version of Java', correct: false },
          { text: 'Javascript has syntax loosely based on Java', correct: true },
          { text: 'They both originated on the island of Java', correct: false },
          { text: 'They were both made by the same person', correct: false }
        ]
      },
      {
        question: 'When a user views a page containing a JavaScript program, which machine actually executes the script?',
        answers: [
          { text: "The User's machine running a Web browser", correct: true },
          { text: 'The Web server', correct: false },
          { text: "A central machine deep within Netscape's corporate offices", correct: false },
          { text: "Google's servers", correct: false }
        ]
      },
      {
        question: '______ JavaScript is also called client-side JavaScript.',
        answers: [
          { text: 'Microsoft', correct: false },
          { text: 'Navigator', correct: true },
          { text: 'LiveWire', correct: false },
          { text: 'Native', correct: false }
        ]
      },
      {
        question: ' __________ JavaScript is also called server-side JavaScript',
        answers: [
          { text: 'Microsoft', correct: false },
          { text: 'Navigator', correct: false },
          { text: 'LiveWire', correct: true },
          { text: 'Native', correct: false }
        ]
      },
      {
        question: 'What are variables used for in JavaScript Programs?',
        answers: [
          { text: 'Storing numbers, strings, or other forms of data', correct: true },
          { text: 'A number that can mean anything', correct: false },
          { text: 'Causing high-school algebra flashbacks', correct: false },
          { text: 'None of the above', correct: false }
        ]
      },
      {
        question: '_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.',
        answers: [
          { text: 'Server-side', correct: false },
          { text: 'Client-side', correct: true },
          { text: 'Local', correct: false },
          { text: 'Native', correct: false }
        ]
      },
      {
        question: "Which of the following can't be done with client-side JavaScript?",
        answers: [
          { text: 'Validating a form', correct: false },
          { text: "Sending a form's contents by email", correct: false },
          { text: "Storing the form's contents to a database file on the server", correct: true },
          { text: 'None of the above', correct: false }
        ]
      },
      {
        question: 'Which of the following does not follow good JavaScript variable name conventions?',
        answers: [
          { text: '2names', correct: false },
          { text: '_first_and_last_names', correct: false },
          { text: 'FirstAndLast', correct: false },
          { text: 'All of the above', correct: true }
        ]
      },
        
]