const quizData = [
    {
      question: ' What is JavaScript?',
      options: ['JavaScript is a scripting language used to make the website interactive', 'JavaScript is an assembly language used to make the website interactive', 'JavaScript is a compiled language used to make the website interactive', 'None of the mentioned'],
      answer: 'JavaScript is a scripting language used to make the website interactive',
    },
    {
      question: ' Which of the following is correct about JavaScript?',
      options: ['JavaScript is an Object-Based language', 'JavaScript is Assembly-language', 'JavaScript is an Object-Oriented language', 'JavaScript is a High-level language'],
      answer: 'JavaScript is an Object-Based language',
    },
    {
      question: 'Which of the following is used for comments in C++?',
      options: ['/* comment */', '// comment */', '// comment', 'both // comment or /* comment */'],
      answer: 'both // comment or /* comment */',
    },
    // {
    //   question: 'Who invented OOP?',
    //   options: ['Andrea Ferro', 'Adele Goldberg', 'Alan Kay', 'Dennis Ritchie'],
    //   answer: 'Alan Kay',
    // },
    // {
    //   question: ' Which is not a feature of OOP in general definitions?',
    //   options: [
    //     'Efficient Code',
    //     'Code reusability',
    //     'odularity',
    //     'Duplicate/Redundant data',
    //   ],
    //   answer: 'Duplicate/Redundant data',
    // },
    // {
    //   question: ' Which keyword is used for function in Python language?',
    //   options: ['Function', 'def', 'Fun', 'Define'],
    //   answer: 'def',
    // },
    // {
    //   question: 'Which of the following character is used to give single-line comments in Python?',
    //   options: [
    //     '//',
    //     '#',
    //     '!',
    //     '/*',
    //   ],
    //   answer: '#',
    // },
    // {
    //   question: 'Which planet is known as the Red Planet?',
    //   options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
    //   answer: 'Mars',
    // },
    // {
    //   question: 'What is the largest species of shark?',
    //   options: [
    //     'Great White Shark',
    //     'Whale Shark',
    //     'Tiger Shark',
    //     'Hammerhead Shark',
    //   ],
    //   answer: 'Whale Shark',
    // },
    // {
    //   question: 'Which animal is known as the King of the Jungle?',
    //   options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
    //   answer: 'Lion',
    // },
  ];
  const quizContainer=document.querySelector(".quiz");
  const resultContainer=document.querySelector(".result");
  const submitBtn=document.getElementById("submit");
  const restartBtn=document.getElementById("restart");
  const resultBtn=document.getElementById("result");
  const nextBtn=document.getElementById("next");

  let currentQuestion=0;
  let score=0;
  function showQuestions(){
    const questionData=quizData[currentQuestion];
    const quizElement=document.createElement('div');
    quizElement.className="question";
    quizElement.innerHTML=questionData.question;
    const optionElement=document.createElement('div');
    optionElement.className="options";
    const optionsIdx= [...questionData.options];
    for(let i=0; i<optionsIdx.length;i++){
      const option1=document.createElement('label');
      option1.className="option";
      const radio=document.createElement('input');
      radio.type="radio";
      radio.name="quiz";
      radio.value=optionsIdx[i];

      const optionTxt=document.createTextNode(optionsIdx[i]);
      option1.appendChild(radio);
      option1.appendChild(optionTxt);
      optionElement.appendChild(option1);
    }
    quizContainer.innerHTML=' ';
    quizContainer.appendChild(quizElement);
    quizContainer.appendChild(optionElement);
  }
  function checkAnswers(){
    let selectData=document.querySelector('input[name="quiz"]:checked');
    if(selectData){
      const answer=selectData.value;
      if(answer==quizData[currentQuestion].answer){
        score++;
      }
      else{
        alert(`That's wrong! The correct answer is ${quizData[currentQuestion].answer}`);
      }
      currentQuestion++;
      selectData=false;
      if(currentQuestion<quizData.length){
        showQuestions();
      }
      if(currentQuestion==(quizData.length-1)){
        nextBtn.classList.remove("hide");
      }
    }
  }
  function showResult(){
    quizContainer.style.display="none";
    resultContainer.style.display="block";
    resultContainer.innerHTML=`your score is ${score} out of ${quizData.length}<br><br><br><br><br><br><br><br><br><br><br>`;
    submitBtn.style.display="none";
    resultBtn.classList.remove("hide");
    restartBtn.classList.remove("hide");
  }
  function restart(){
    currentQuestion=0;
    score=0;
    resultContainer.style.display="none";
    quizContainer.style.display="block";
    restartBtn.classList.add("hide");
     resultContainer.innerHTML = '';
    showQuestions();
    submitBtn.classList.remove("hide");
  }
  submitBtn.addEventListener("click",checkAnswers);
  resultBtn.addEventListener("click",showResult);
  nextBtn.addEventListener("click",showResult);
  restartBtn.addEventListener("click",restart);
  showQuestions(); 
  