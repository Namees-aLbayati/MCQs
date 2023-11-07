const answerForm=document.getElementById('answersForm');
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Parihshsjhjss", "Lonhjshjsdon", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Eahjshhshjrth"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Bluhjshjhjse Whale", "Girhjsghhgsaffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }, {
        question: "name?",
        options: ["Elephant", "Blue Whale", "Gibhjshhjshjsraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }, {
        question: "e world?",
        options: ["Elephant", "Blue Whale", "hjshhjshgsytys", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];
var userChoiceArr=[]
const arrayQues=[]
const uniqueQuestions = new Set();

const sendResult=(userChoiceArr)=>{
console.log('user choice array',userChoiceArr)
}

const renderQuestion=(questionsArr)=>{

const questionsContainer=document.getElementById('questionsContainer');
for (const element of questionsArr){
const nameDiv = document.createElement("div");
    nameDiv.className = "name";

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = `${element.question}`;
    questionTitle.style.top='100px'
   
    const requiredAsterisk = document.createElement("span");
    requiredAsterisk.style.color = "red";
    requiredAsterisk.textContent = "*";
    requiredAsterisk.style.paddingTop = "40px";

  nameDiv.appendChild(requiredAsterisk)  
nameDiv.appendChild(questionTitle)



const answersForm = document.createElement("form");
answersForm.id = "answersForm";
answersForm.style.display = "flex";

answersForm.style.flexDirection = "row";
answersForm.style.flexWrap='wrap'
answersForm.style.justifyContent = "space-between";

answersForm.style.position='relative';
answersForm.style.bottom='90px'

answersForm.style.left='30px'

let counter = 0;
let currentRow;
const optionContainer = document.createElement("div");
optionContainer.className = "option-container";


element.options.forEach((option, index) => {

    const optionDiv = document.createElement("div");
    optionDiv.className = "option";

    // Create a radio input element
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.id = `option${index + 1}`;
    radioInput.name = 'choice';
    radioInput.value = option;
    


    // Create a label element
    const label = document.createElement("label");
    label.htmlFor = `option${index + 1}`;
    label.textContent = option;

    // Append the radio input and label to the option div
    optionDiv.appendChild(radioInput);
    optionDiv.appendChild(label);

    // Append the option div to the optionContainer
    optionContainer.appendChild(optionDiv);
    
});

answersForm.addEventListener('change',(event)=>{
    const userPairs={
        "question":element.question,
        "userAnswer":event.target.value,
        "correctAnswer":element.correctAnswer
    }
   userChoiceArr.push(userPairs)
sendResult(userChoiceArr)   
})
answersForm.appendChild(optionContainer)

questionsContainer.appendChild(nameDiv)
questionsContainer.appendChild(answersForm)

}




}

const requireQuestions=(requiredQuestionLength)=>{
const randomIndexArr=[]


while (uniqueQuestions.size < requiredQuestionLength) {

    const random=Math.floor(Math.random()*quizQuestions.length);

    uniqueQuestions.add(quizQuestions[random])


  
} 
    
  const questionsLastArr=[...uniqueQuestions]

renderQuestion(questionsLastArr)    


}

requireQuestions(4)




/*
const quizContainer = document.getElementById("quiz-container");
const questionsElement = document.getElementById("questions");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result");
const resultList = document.getElementById("result-list");

let selectedAnswers = new Array(quizQuestions.length).fill(null);
let correctAnswers = 0;

// Function to load and display all questions
function loadQuestions() {
    quizQuestions.forEach((currentQuestion, index) => {
        const questionElement = document.createElement("div");
        questionElement.textContent = `${index + 1}. ${currentQuestion.question}`;

        currentQuestion.options.forEach((option) => {
            const optionElement = document.createElement("label");
            const inputElement = document.createElement("input");
            inputElement.setAttribute("type", "radio");
            inputElement.setAttribute("name", `q${index}`);
            inputElement.setAttribute("value", option);
            inputElement.addEventListener("change", () => selectAnswer(index, option));

            optionElement.textContent = option;
            optionElement.appendChild(inputElement);
            questionElement.appendChild(optionElement);
        });

        questionsElement.appendChild(questionElement);
    });
}

// Function to handle answer selection
function selectAnswer(questionIndex, selectedAnswer) {
    selectedAnswers[questionIndex] = selectedAnswer;
    console.log('selected',selectedAnswers)

}

// Function to show quiz results
function showResults() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    for (let i = 0; i < quizQuestions.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `${i + 1}. ${quizQuestions[i].question}`;

        if (selectedAnswers[i] === quizQuestions[i].correctAnswer) {
            listItem.className = "correct";
            correctAnswers++;
        } else {
            listItem.className = "wrong";
        }

        const selectedAnswerText = selectedAnswers[i] || "Not answered";
        const correctAnswerText = quizQuestions[i].correctAnswer;
        listItem.innerHTML += `<br>Selected Answer: ${selectedAnswerText}<br>Correct Answer: ${correctAnswerText}`;

        resultList.appendChild(listItem);
    }
}

loadQuestions();
submitButton.addEventListener("click", ()=>showResults())
*/