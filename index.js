// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})



//QUIZZ
const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Tag Markup Language",
    b: "Hyper Text Markup Language",
    c: "Hyperlinks Text Mark Language",
    d: "Hyperlinking Text Marking Language",
    correct: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "Computing Style Sheet",
    b: "Creative Style System",
    c: "Cascading Style Sheet",
    d: "Creative Styling Sheet",
    correct: "c",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<javascript>",
    b: "<scripting>",
    c: "<script>",
    d: "<js>",
    correct: "c",
  },
  {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below?" +'<p id="demo">This is a demonstration.</p>',
    a: 'document.getElementByName("p").innerHTML = "Hello World!";',
    b: 'document.getElement("p").innerHTML = "Hello World!";',
    c: 'document.getElementById("demo").innerHTML = "Hello World!";',
    d: '#demo.innerHTML = "Hello World!";',
    correct: "b",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "Both the <head> section and the <body> section are correct",
    b: "The <head> section",
    c: "The <body> section",
    d: "The <h1> section",
    correct: "a",
  },
  {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    a: '<script href="xxx.js">',
    b: '<script src="xxx.js">',
    c: '<script name="xxx.js">',
    d: '<script class="xxx.js">',
    correct: "b",
  },
  {
    question: 'how do you write "Hello World" in an alert box?',
    a: 'msg("Hello World")',
    b: 'alertBox("Hello World");',
    c: 'alert("Hello World");',
    d: 'msgBox("Hello World");',
    correct: "c",
  },
  {
    question: "How to write an IF statement in JavaScript?",
    a: "if i = 5",
    b: 'if (i == 5)',
    c: 'if i = 5 then',
    d: 'if i == 5 then',
    correct: "b",
  },
  
  {
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    a: "if (i != 5)",
    b: 'if i =! 5 then',
    c: 'if i <> 5',
    d: 'if (i <> 5)',
    correct: "a",
  },

  {
    question: 'How does a FOR loop start?',
    a: "for (i = 0; i <= 5; i++)",
    b: 'for (i = 0; i <= 5)',
    c: 'for (i <= 5; i++)',
    d: 'for i = 1 to 5',
    correct: "a",
  },


];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    <button  class="btn btn--med btn--theme dynamicBgClr" onclick="location.reload()" type="submit">Reload</button>
    `
    }
  }
})

