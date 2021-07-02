 //Constants
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

//Let
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];


//Questions Array
let questions = [
    {
        question: 'Which English Sir has had number ones in the 50’s, 60’s, 70’s, 80’s and 90’s?',
        choice1: 'Sir Cliff Richard',
        choice2: 'Sir Tom Jones',
        choice3: 'Sir Paul McCartney',
        choice4: 'Sir Elton John',
        answer: 1,
    },
    {
        question: 'How many UK number ones did the Beatles have in total?',
        choice1: '13',
        choice2: '15',
        choice3: '17',
        choice4: '19',
        answer: 3,
    },
    {
        question: 'In which year did the Spice Girls release Wannabe?',
        choice1: '1995',
        choice2: '1996',
        choice3: '1997',
        choice4: '1998',
        answer: 2,
    },
];

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    
    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});

startGame();