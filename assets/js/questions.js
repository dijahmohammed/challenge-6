var start= document.querySelector("#start");
var timerElement= document.querySelector(".timer");
var questionScreen= document.querySelector("#questions");



var questionsArray = [
    {
        question: "Question: What does the acronym 'DOM' stand for in JavaScript?",

        options: ["Document Object Model", "Data Output Module", "Dynamic Object Manipulation", "Document Orientation Model"],
        correctAnswer: "Document Object Model"
    },
    {
        question: "Question: How do you declare a variable in JavaScript?",
        options: ["var variableName;", "let variableName;", "const variableName;", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "Question: What is the purpose of the 'addEventListener' method in JavaScript?",
        options: ["To remove an event listener", "To add a new element to the DOM", "To execute a function when an event occurs", "To create a loop in the code"],
        correctAnswer: "To execute a function when an event occurs"
    },
    {
        question: "Question: How do you comment out a single line of code in JavaScript?",
        options: ["<!-- This is a comment -->", "/* This is a comment */", "// This is a comment", "** This is a comment **"],
        correctAnswer: "// This is a comment"
    },
    {
        question: "Question: What does the 'JSON' acronym stand for in JavaScript?",
        options: ["JavaScript Object Notation", "JavaScript Object Naming", "Java Syntax Object Notation", "JavaScript Oriented Networking"],
        correctAnswer: "JavaScript Object Notation"
    }
];

var correctChoice1= questionsArray[0].correctAnswer
var correctChoice2= questionsArray[1].correctAnswer
var correctChoice3= questionsArray[2].correctAnswer
var correctChoice4= questionsArray[3].correctAnswer
var correctChoice5= questionsArray[4].correctAnswer