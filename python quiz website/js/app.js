function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is a F-string ?", ["a formatting technique", "a special string character", "a hidden data type", "none of the above"], "a formatting technique"),
    new Question("Which keyword is used for a function?", ["void", "create", "def", "function"], "def"),
    new Question("What is the output of this expression, 22 % 3 ?", ["7", "1", "0", "5"], "1"),
    new Question("Which data structure is not ordered ?", ["list", "tuple", "dictionnary", "string"], "dictionnary"),
    new Question("Which data structure is difined using square brackets ?", ["list", "tuple", "dictionnary", "string"], "list")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
