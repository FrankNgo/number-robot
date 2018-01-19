function numberBot(number){
  if(number%3 === 0){
    return result = 1;
  }
  for (var i = 0; i < number.length; i ++) {
    if(number[i].match(/0/)){
      alert("Beep");
    }
    if(number[i].match(/1/)){
      alert("Boop");
    }
  }
}


$(document).ready(function() {
  $("#number-form").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#number").val());
    var newArray = [];
    numberBot(number);

    $(".number").text(number);

    if (result === 1) {
      alert("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      $(".not").text("");
    }
  });
});
