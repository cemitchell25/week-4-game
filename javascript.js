    
  $(document).ready(function() {



var blueNum = Math.floor(Math.random() * 4 + 7);
var greenNum = Math.floor(Math.random() * 7 + 6);
var purpleNum = Math.floor(Math.random() * 6 + 1);
var yellowNum = Math.floor(Math.random() * 3 + 4);
var userScore = 0;
var matchScore = 0;
var wins = 0; 
var losses = 0;



$("#startbutton").on("click", magicNumber(), reset());

function magicNumber(){
    matchScore= Math.floor((Math.random() * 109) + 16);
    console.log(matchScore);
    $("#magicNumber").html("The magic number: " + matchScore);

  } 


    $("#button-blue").on("click", function(){

  
      console.log(userScore);
        userScore = userScore + blueNum;
       
        $("#userScore").html("Your score: " + userScore);
        gameChecker();
    
    });


    $("#button-yellow").on("click", function(){
        
        console.log(userScore);
        userScore = userScore + yellowNum;
       
        $("#userScore").html("Your score: " + userScore);
        gameChecker();
     
    });


    $("#button-green").on("click", function(){

          console.log(userScore);
          userScore = userScore + greenNum;
       
        $("#userScore").html("Your score: " + userScore);
        gameChecker();
  
       
      
    });

    $("#button-purple").on("click", function(){

          console.log(userScore);
          userScore = userScore + purpleNum;
       
        $("#userScore").html("Your score: " + userScore);
        gameChecker();

      
    });

 
  function reset(){
      
      magicNumber();
      userScore = 0;
      blueNum = Math.floor(Math.random() * 4 + 7);
      greenNum = Math.floor(Math.random() * 7 + 6);
      purpleNum = Math.floor(Math.random() * 6 + 1);
      yellowNum = Math.floor(Math.random() * 3 + 4);

  };

function gameChecker() {
    if (userScore > matchScore){
      losses++;
      $("#losses").html('Losses: ' + losses);
      reset();
      alert("You lost! Try again.")

  }
    
  

    if (userScore == matchScore){
      wins++;
      $("#wins").html('Wins: ' + wins);
      reset();
      alert("You won all of the crystals! Congrats!");
    
    }
  }});





