const Time_per_ques = 15;
let cques = 0;
let score = 0;
let explanationsAtEnd = [];

const questions = [
    [
        "What is the default value of an instance variable of type int in Java?",
        ["0", "null", "undefined", "1"],
        1,
        "In Java, default value of int instance variable is 0."
    ],
    [
        "Which keyword is used to inherit a class in Java?",
        ["this", "super", "extends", "implements"],
        3,
        "The 'extends' keyword is used for class inheritance."
    ],
    [
        "Which of the following is NOT a Java feature?",
        ["Object-Oriented", "Use of pointers", "Portable", "Dynamic"],
        2,
        "Java does not support pointers explicitly for security reasons."
    ],
    [
        "Which method is the entry point of a Java program?",
        ["start()", "main()", "run()", "init()"],
        2,
        "The main() method is the entry point of a Java program."
    ],
    [
        "What is the size of a double in Java?",
        ["4 bytes", "8 bytes", "2 bytes", "16 bytes"],
        2,
        "A double in Java uses 8 bytes (64 bits)."
    ]
];
const optionlabels = ["A", "B", "C", "D"];
const n = questions.length;

function startQuiz() {
    alert("Starting Quiz!");
    cques = 0;
    score = 0;
    explanationsAtEnd = [];

    document.getElementById("qb0").innerHTML = "";
    document.getElementById("qb1").innerHTML = "";
    document.getElementById("qb2").innerHTML = "";
    document.getElementById("qb3").innerHTML = "";
    document.getElementById("qb4").innerHTML = "";

    askNextQuestion();
}

function askNextQuestion() {
    if (cques >= n) {
        document.getElementById("qb0").innerHTML = "";
        document.getElementById("qb1").innerHTML = "";
        document.getElementById("qb3").innerHTML = "Quiz is finished!";
        document.getElementById("qb4").innerHTML = "Your Score is " + score;
        if (explanationsAtEnd.length === 0) {
            document.getElementById("qb2").innerHTML = "Explanation: All answers were correct.";
        } else {
            document.getElementById("qb2").innerHTML = "Explanations:<br>" + explanationsAtEnd.join("<br>");
        }
        return;
    }

    const q = questions[cques];
    document.getElementById("qb0").innerHTML = "Ques : " + q[0] + "<br>";
    document.getElementById("qb1").innerHTML =
        "A) " + q[1][0] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B) " + q[1][1] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C) " + q[1][2] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D) " + q[1][3] + "<br>";

    // Run prompt after render, because prompt blocks UI painting.
    setTimeout(function () {
        let inp = prompt("Answer (A = 1,B = 2,C = 3,D = 4) : ");
        if (parseInt(inp, 10) === q[2]) {
            score++;
        } else {
            explanationsAtEnd.push("Q" + (cques + 1) + ": " + q[3]);
        }

        cques++;
        askNextQuestion();
    }, 0);
}

function restartQuiz() {
    document.getElementById("qb5").innerHTML += ("Restarting Quiz...");
    cques = 0;
    score = 0;
    startQuiz();
}