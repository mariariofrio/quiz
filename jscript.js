//document.ready?
document.addEventListener("DOMContentLoaded", function(){

    var $startEl = document.querySelector("#start");
    var $quiz = document.querySelector("#quiz");
    var $results = document.querySelector("#results");
    var $timer = document.querySelector("#timer");
    var $submitEl = document.querySelector("#submit");
    var $initialEl = document.querySelector("#initial");
    // var $initialInput = document.querySelector("#initial");
    
    $startEl.addEventListener("click", function(event){
        event.preventDefault()
        console.log("we clicked it")
        $quiz.innerHTML = ''
        showQuestion()
    })

    $submitEl.addEventListener("click", function(event){
        event.preventDefault();
  
        console.log(event);
    
        $initialEl.innerText = 
        showEnding()
    })    

    var secondsLeft = 20;
    setTime()

    var currentQuestion = 0
    let questions = [
        {
            question: "______ are containers for storing data values.?",
            answers: ["functions", "objects", "variables"],
            rightAnswer: "variables"
        },
        {
            question: "______ is a block of code designed to perform a particular task?",
            answers: ["boolean", "function", "object"],
            rightAnswer: "function"
        },
        {
            question: "What are 1 the type of Pop up boxes available in JavaScript?",
            answers: ["alert", "array", "DOM"]
        }
    ]
    function showEnding(){
        $quiz.innerHTML= `<h> Results </h2>`
        clearInterval(timerInterval);

        let unparsed=localStorage.getItem("highscored")
        console.log(unparsed)
        let toStorage;
       if(unparsed){
           console.log(`we shouldnt be here`)
           toStorage= JSON.parse(unparsed)
           toStorage.push(secondsLeft)
        }else{
            console.log(`we should be here`)
            toStorage=[secondsLeft]
       }
       console.log(toStorage)
        localStorage.setItem("highscored", JSON.stringify(toStorage))
    }
    function showQuestion(){
        let questionObject = questions[currentQuestion]
        const $newDiv= document.createElement("div")
        const $thisQuestion = document.createElement("h4")//someday talk about pointers
        $thisQuestion.innerText=questionObject.question
        console.log($thisQuestion)
        $newDiv.appendChild($thisQuestion)
        console.log($newDiv)
        
        questionObject.answers.forEach(answer => {
            const $thisanswer = document.createElement("button")
            $thisanswer.innerText = answer
            $thisanswer.addEventListener("click", function(event){
                event.preventDefault()
                let selection= this.innerText
                if(selection==questionObject.rightAnswer){
                    $results.innerText= "great job"
                }else {  
                    $results.innerText= "keep at it"
        
                }
                $quiz.innerHTML = ''
                if(currentQuestion<questions.length-1){
                    currentQuestion++
                    showQuestion()
                }else{
                    showEnding()
                }
            })
            $newDiv.appendChild($thisanswer)
            
            
        });
        console.log($newDiv)

        $quiz.appendChild($newDiv)
        
    }
    
    var timerInterval
    function setTime() {
       timerInterval = setInterval(function() {
        secondsLeft--;
        $timer.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          showEnding()
        }
    
      }, 1000);
    }

    

})
    
    //add names to high scores 
    //add scores 
    // create element
   // set that element's innertext or innerHTML´
   // put that element on the page

   // add timer 

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```