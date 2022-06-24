const quizDB = [
    {
        question: "Q1: who is the father of Agriculture ?",
        a: "yogesh",
        b: "nadekar",
        c: "pta nhi ",
        d: "pta kr ke aata hu",
        ans: "ans4"
    },
    {
        question: "Q2: who is the father of A1 Agriculture ?",
        a: "yogesh",
        b: "nadekar",
        c: "pta nhi ",
        d: "pta kr ke aata hu",
        ans: "ans2"
    },
    {
        question: "Q3: who is the father of agronomy ?",
        a: "yogesh",
        b: "nadekar",
        c: "pta nhi ",
        d: "pta kr ke aata hu",
        ans: "ans3"
    },
    {
        question: "Q4: who is the father of soil science ?",
        a: "yogesh",
        b: "nadekar",
        c: "pta nhi ",
        d: "pta kr ke aata hu",
        ans: "ans1"
    },
]




const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () =>{
    
    const questionList = quizDB[questionCount]

    question.innerText  =   questionList.question; 

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


}

loadQuestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
       
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () =>{
    const checkedAswer =getCheckAnswer();
    console.log(checkedAswer);

    if(checkedAswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `
            <h3> You Scored ${score}/${quizDB.length} 👌</h3>
            <button class="btn" onclick="location.reload">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');

    }

});


