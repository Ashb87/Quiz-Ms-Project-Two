//Constants
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const timeleft = document.getElementById("timeleft");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
//points per score
const CORRECT_BONUS = 10;
//number of questions per game
const MAX_QUESTIONS = 10;

//Let
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
let update = null;
let questions = [];

// Used James Q Quick video on youtube for reference-link can be found in credits section of README file

//pulling questions from OPEN TRIVIA DATABASE api
fetch("https://opentdb.com/api.php?amount=50&category=12&difficulty=easy&type=multiple")
    .then((resp) => {
        return resp.json();
    })
    
    //Load questions
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            //sets the question format
            const formattedQuestion = {
                question: loadedQuestion.question,
            };
            //sets the choice format
            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );
            //sets incorrect answer format
            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

            return formattedQuestion;
        });
        startGame();
    })
    //catches error
    .catch((err) => {
        console.error(err);
    });

    //start game function
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    //adds and hides loader while questions load
    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

//countdown timer for each question
timer = () => {
    // set timer decrease 1 every second
    time = time - 1;
    if (time < 30) {
        // display time left
        timeleft.innerHTML = `<i class="far fa-clock"></i> : ${time} seconds`;
    }
    if (time < 1) {
        // moves to next question when time is up
        clearInterval(update);
        getNewQuestion();
    }
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //saves score to local storage
        localStorage.setItem("mostRecentScore", score);
        //takes user to the end page
        return window.location.assign('end.html');
    }
    questionCounter++;
    questionCounterText.innerHTML = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    //Removes used questions
    availableQuesions.splice(questionIndex, 1);
    // set timer of 30s for each question
    time = 30;
    update = setInterval("timer()", 1000);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (event) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        //applies css styling for right or wrong answers
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        //Increments players score for right answers
        if (classToApply == 'correct') {
            incrementScore(CORRECT_BONUS);
        };

        selectedChoice.parentElement.classList.add(classToApply);

        //adds slight delay before next question and removes css styling to answers
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
            clearInterval(update);
        }, 600);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};