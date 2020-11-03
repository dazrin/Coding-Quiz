//Element selectors
var startBtn = document.getElementById('start-btn');
var nextBtn = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var gameClock = document.getElementById('game-clock');
var messageDiv = document.getElementById('message');

// variables
var secondsLeft = 200;

//variables questions and to hold which question to show
var shuffledQuestions;
var currentQuestionIndex;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

//Sets timer to decrement every second
//Displays an alert when time is up
function setTime() {
  var timeInterval = setInterval(function () {
      secondsLeft--;
      gameClock.textContent = "Timer " + secondsLeft;

      if (secondsLeft === 0) {
          clearInterval(timeInterval);
          alert("Out of Time");
            score += secondsLeft * .1;
            score = score.toFixed(2);
          
      }

      else if (i === questions.length) {
          clearInterval(timeInterval);
      }
  }, 1000)
  return (score)
}

//Starts the quiz
//Hides start button
//Shuffles the questions
//Shows the question at index 0
function startGame() {
    startBtn.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

//Resets the 'right' or 'wrong' css state
//Shows the next question
function setNextQuestion() { 
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

//Question element text is set to the current question
//For each answer, create a button; set the button text to the answer text
//For each button, give it a class of 'btn'
//If the answer is correct, set the dataclass to 'correct'
//Add event listeners for each button to select answer on click
//Append newly created buttons to answerButtonsElement 
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

//clears all css status on the page
//hide the next button
//if there are buttons appended to the answer button element, remove them
function resetState() {
    clearStatusClass(document.body);
    nextBtn.classList.add('hide');
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

//set variable for the event target
//set variable to contain the correct data class of the button selected
//set 'correct' status to affect the bg color of the page
//set each button that was created in the answerButton list to have the 'correct' data class
//if the user hasn't reached the last question, hide the 'next' button
//if the user has reached the last question, show the start button and replace the 'start' text with 'restart'
function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
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

//clear the status class of the current element
//if the element has a 'correct' data class, add the 'correct' class to the element
//otherwise, add the 'wrong' class to the element's class list
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

//remove 'wrong' and 'correct' classes from the element
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

//When the start button is pressed,
//set the next question
//start the timer
//hide the opening message
document.getElementById("start-btn").addEventListener("click", setNextQuestion);
document.getElementById("start-btn").addEventListener("click", setTime);
document.getElementById("start-btn").addEventListener("click", function() {
  messageDiv.textContent = "";
});

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