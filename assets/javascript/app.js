var myVar = setInterval(function () {
  QuizTimer()
}, 1000);
var i = 10;
var numcorrect = 0
// var numwrong = 0

function QuizTimer() {
  document.getElementById("timer").innerHTML = i--;

  $('input[name=q1]:checked').val();
  console.log($('input[name=q1]:checked').val())

  if (i < 0) {
    clearInterval(myVar);

    if (
      $('input[name=q1]:checked').val() === "Walkers") {
      numcorrect++;

    }

    if (
      parseInt($('input[name=q2]:checked').val()) === 2) {
      numcorrect++;
    }

    if (
      $('input[name=q3]:checked').val() === "Crossbow") {
      numcorrect++;

    }

    if (
      $('input[name=q4]:checked').val() === "Hilltop") {
      numcorrect++;

    }

    if (
      $('input[name=q5]:checked').val() === "Negan") {
      numcorrect++;

    }
    $(".correctoutput").text("Number Correct: " + numcorrect);

    $(".wrongoutput").text("Number Incorrect: " + (5 - numcorrect));
    console.log(numcorrect)

  }
  // if timer runs out then check for correct answers. Then I will display in a div on the page how many questions are correct and how many questions are incorrect . 



}


// function Timer()
//     {
//          alert("You are out of time!");
//     }