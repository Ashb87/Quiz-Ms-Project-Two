const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//Displays different message depending on users score
const goodEffort = document.getElementById("good-effort");
const congrats = document.getElementById("congrats");
const noGood = document.getElementById("no-good");
//sets the amount of high scores to be saved and displayed
const MAX_HIGH_SCORES = 5;


// get the top five high scores and push them into an array
let highScoresArray = [];
highScores.forEach(function (obj) {
  highScoresArray.push(obj.score);
});
// compare the most rencent score with the scores in the highScoreArray
if (mostRecentScore > Math.max(...highScoresArray)) {
  // displays congrats message for a new high sore
  congrats.classList.remove("hidden");
} else if (mostRecentScore == 0) {
  noGood.classList.remove("hidden");
} else {
  // display a good effort message if it's not a new high score
  goodEffort.classList.remove("hidden");
}

finalScore.innerText = mostRecentScore;

//disables save score button if no name is input
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (event) => {
    event.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    //push highscore into array
    highScores.push(score);
    //sorts highscores into order
    highScores.sort((a, b) => b.score - a.score);
    //cuts the array of highscores to just show top 5
    highScores.splice(5);
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('index.html');
};