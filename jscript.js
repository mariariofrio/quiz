
document.addEventListener("DOMContentLoaded", function(){
    // added elements 
        var $startEl = document.querySelector("#start");
        var $quiz = document.querySelector("#quiz");
        var $results = document.querySelector("#results");
        var $timer = document.querySelector("#timer");
        var $submitEl = document.querySelector("#submit");
        var $initialEl = document.querySelector("#initial");
        var $formEl = document.querySelector("#form");
    
        
    
        $formEl.style.display = "none";
    
    // added start and submit buttons 
    
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
    // timer 
        var secondsLeft = 40;
        setTime()
    // questions and answers for student 
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
                answers: ["alert", "array", "DOM"],
                rightAnswer: "alert"
            }
        ]
        // 
        function showEnding(){
            $results.style.display = "none";
            $quiz.innerHTML= `<h> Results </h2>`
            clearInterval(timerInterval);
            $formEl.style.display = "block";
    
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
    
        // functions with questions
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
                        $results.innerText= "Great Job"
                    }else {  
                        $results.innerText= "Wrong Answer"
    
            
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
        // timer function 
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
    
        // function myFunction() {
        //     document.getElementById("$timer").style.alignItems = "flex-start";
        //   }
        
    
    })