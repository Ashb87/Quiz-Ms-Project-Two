 //Constants
 const question = document.getElementById("question");
 const choices = Array.from(document.getElementsByClassName("choice-text"));
 const questionCounterText = document.getElementById("questionCounter");
 const scoreText = document.getElementById("score");
 const CORRECT_BONUS = 10;
 const MAX_QUESTIONS = 3;
 
 let currentQuestion = {};
 let acceptingAnswers = false;
 let score = 0;
 let questionCounter = 0;
 let availableQuesions = [];
 
 
 
 let questions = [];

 fetch(questions.json);
   .then(res => {
       return res.json();
   })

   .then((loadedQuestions) => {
    questions = loadedQuestions;
    startGame();
})
.catch((err) => {
    console.error(err);
});
 
 
 startGame = () => {
     questionCounter = 0;
     score = 0;
     availableQuesions = [...questions];
     getNewQuestion();
 };
 
 getNewQuestion = () => {
     if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
         localStorage.setItem("mostRecentScore", score);
         //takes user to the end page
         return window.location.assign('/end.html');
     }
     questionCounter++;
     questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
 
     const questionIndex = Math.floor(Math.random() * availableQuesions.length);
     currentQuestion = availableQuesions[questionIndex];
     question.innerText = currentQuestion.question;
 
     choices.forEach((choice) => {
         const number = choice.dataset['number'];
         choice.innerText = currentQuestion['choice' + number];
     });
     
     //Removes used questions
     availableQuesions.splice(questionIndex, 1);
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
           }, 600);
     });
 });
 
 incrementScore = num => {
     score += num;
     scoreText.innerText = score;
 };
 
 
 


 