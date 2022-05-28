const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "java",
    b: "c",
    c: "python",
    d: "javaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "central style sheets",
    b: "cascading style sheets",
    c: "cascading simple sheets",
    d: "cars SUVs sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "hypertext markup language",
    b: "hypertext markdown language",
    c: "hyperloop machinr language",
    d: "helicopters terminals motorboats lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
const questionQuiz = document.getElementById("questions");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.querySelector(".submit");
const inputs = document.querySelectorAll("input");
const container = document.querySelector(".container");
const result = document.querySelector(".result");
const scoreResult = document.querySelector(".result p");
const reload = document.querySelector(".reload");
let counterQuiz = 0;
let score = 0;

const falseChecked = () => {
  inputs.forEach((input) => {
    input.checked = false;
  });
};
const loadQuiz = () => {
  questionQuiz.innerHTML = quizData[counterQuiz].question;
  a_text.innerHTML = quizData[counterQuiz].a;
  b_text.innerHTML = quizData[counterQuiz].b;
  c_text.innerHTML = quizData[counterQuiz].c;
  d_text.innerHTML = quizData[counterQuiz].d;
};
loadQuiz();
const selectedAnswer = () => {
  let answer;
  inputs.forEach((input) => {
    if (input.checked) {
      answer = input.id;
    }
  });
  return answer;
};
submit.addEventListener("click", (eo) => {
  selectedAnswer();
  if (selectedAnswer()) {
    if (selectedAnswer() === quizData[counterQuiz].correct) {
      score++;
    }
    counterQuiz++;
    if (counterQuiz < quizData.length) {
      loadQuiz();
      falseChecked();
    } else {
      container.classList.add("none");
      result.classList.remove("none");
      scoreResult.innerHTML = `You answered ${score}/${quizData.length} questions correctly`;
    }
  } else {
    alert("Choose an answer");
  }
});
reload.addEventListener("click", (eo) => {
  counterQuiz = 0;
  score = 0;
  loadQuiz();
  falseChecked();
  container.classList.remove("none");
  result.classList.add("none");
});
