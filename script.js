var timer = 100;
var score = 0;
var currentQuestion = 0;
var time = document.querySelector("#timeLeft");
var scoreTracker = document.querySelector("#scoreValue");

var questions = ["What is \"JS\"?", "What does \"===\" mean?", "How would you change the font class via CSS?", "What kind of file is \"index.html\"?"];
var a = ["JavaScript", "Opposites", "background-color", "CSS"];
var b = ["Java", "Equal value and equal type", "text-align", "Bootstrap"];
var c = ["jScript", "No relation", "font-family", "JavaScript"];
var d = ["Jam & Spoon", "Less than", "display", "HTML"];
var answers = ["a", "b", "c", "d"];

function countDown() {
    timer -= 1;
    time.innerHTML = timer;
    if (timer <= 0) {
        alert("TIMES UP!!!");
        return;
    }
}

$(document).ready(function() {
    time.innerHTML = timer;
    scoreTracker.innerHTML = score;
    $("#buttonA").hide();
    $("#buttonB").hide();
    $("#buttonC").hide();
    $("#buttonD").hide();
    $("#questionText").hide();
    loadQuestion(questions[currentQuestion],a[currentQuestion],b[currentQuestion],c[currentQuestion],d[currentQuestion],answers[currentQuestion]);
});

function loadQuestion(question, a, b, c, d, answer) {

    if (currentQuestion == questions.length) {
        alert("GAME OVER, YOUR SCORE IS " + score);
    }
    
    var questionText = document.querySelector("#questionText");
    questionText.innerHTML = question;

    var option1 = document.querySelector("#buttonA");
    option1.innerHTML = a;
    if (answer == "a") {
        option1.value = "true";
    } else {
        option1.value = "false";
    }

    var option2 = document.querySelector("#buttonB");
    option2.innerHTML = b;
    if (answer == "b") {
        option2.value = "true";
    } else {
        option2.value = "false";
    }

    var option3 = document.querySelector("#buttonC");
    option3.innerHTML = c;
    if (answer == "c") {
        option3.value = "true";
    } else {
        option3.value = "false";
    }

    var option4 = document.querySelector("#buttonD");
    option4.innerHTML = d;
    if (answer == "d") {
        option4.value = "true";
    } else {
        option4.value = "false";
    }
    
    currentQuestion++;
}

$("#gameStart").click(function() {
    var counter = setInterval(countDown, 1000);
    $("#buttonA").show();
    $("#buttonB").show();
    $("#buttonC").show();
    $("#buttonD").show();
    $("#questionText").show();
    $("#gameStart").hide();
});


$("#buttonA").click(function() {
    if (this.value == "true") {
        alert("YOU GOT IT!");
        score += 10;
        scoreTracker.innerHTML = score;
        loadQuestion(questions[currentQuestion], a[currentQuestion], b[currentQuestion], c[currentQuestion], d[currentQuestion], answers[currentQuestion]);
    } else {
        alert("WRONG!!!");
        timer -= 10;
        time.innerHTML = timer;
        loadQuestion(questions[currentQuestion], a[currentQuestion], b[currentQuestion], c[currentQuestion], d[currentQuestion], answers[currentQuestion]);
    }
});


$("#buttonB").click(function() {
    if (this.value == "true") {
        alert("YOU GOT IT!");
        score += 10;
        scoreTracker.innerHTML = score;
        loadQuestion(questions[currentQuestion], a[currentQuestion], b[currentQuestion], c[currentQuestion], d[currentQuestion], answers[currentQuestion]);
    } else {
        alert("WRONG!!!");
        timer -= 10;
        time.innerHTML = timer;
        loadQuestion(questions[currentQuestion], a[currentQuestion], b[currentQuestion], c[currentQuestion], d[currentQuestion], answers[currentQuestion]);
    }
});

$("#buttonC").click(function() {
    if (this.value == "true") {
        alert("YOU GOT IT!");
        score += 10;
        scoreTracker.innerHTML = score;
        loadQuestion(questions[currentQuestion], a[currentQuestion], b[currentQuestion], c[currentQuestion], d[currentQuestion], answers[currentQuestion]);
    } else {
        alert("WRONG!!!");
        timer -= 10;
        time.innerHTML = timer;
        loadQuestion(questions[currentQuestion], a[currentQuestion], b[currentQuestion], c[currentQuestion], d[currentQuestion], answers[currentQuestion]);
    }
});

$("#buttonD").click(function() {
    if (this.value == "true") {
        alert("YOU GOT IT!");
        score += 10;
        scoreTracker.innerHTML = score;
        loadQuestion(questions[currentQuestion], a[currentQuestion], b[currentQuestion], c[currentQuestion], d[currentQuestion], answers[currentQuestion]);
    } else {
        alert("WRONG!!!");
        timer -= 10;
        time.innerHTML = timer;
        loadQuestion(questions[currentQuestion], a[currentQuestion], b[currentQuestion], c[currentQuestion], d[currentQuestion], answers[currentQuestion]);
    }
});