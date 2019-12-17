var quizEl = document.getElementById('quiz');
var resultsEl = document.getElementById('results');
var sumbitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


  var myQuestions = [
    {
      question: "Which bone are babies born without?",
      answers: {
        a: "Elbows",
        b: "Sternum",
        c: "Knee Cap",
        d: "Mandible"
      },
      correctAnswer: "c"
    },
    {
      question: "About how many taste buds does the average human tongue have?",
      answers: {
        a: "5,000",
        b: "2,000",
        c: "75,000",
        d: "10,000"
      },
      correctAnswer: "d"
    },
    {
      question: "In which organ are the feces formed",
      answers: {
        a: "Colon",
        b: "Gallbladder",
        c: "Pancreas",
        d: "Small Intestine"
      },
      correctAnswer: "a"
    },
    {
        question: "Which element is said to keep bones strong?",
        answers: {
          a: "Sodium",
          b: "Calicum",
          c: "Oxygen",
          d: "Iron"
        },
        correctAnswer: "b"
      },
      {
        question: "What is the bodies largest organ?",
        answers: {
          a: "Heart",
          b: "The Skin",
          c: "Kidney",
          d: "Liver"
        },
        correctAnswer: "a"
      }
  ];

  function buildQuiz(){
    // we'll need a place to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
    }