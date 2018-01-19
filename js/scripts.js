$(document).ready(function() {
  $("#number-form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());

    if (number % 3 === 0) {
      var result = 1
    }
    if (number % 3 != 0) {
      var number2 = ("" + number).split("").sort();
      var newArray = [];
      if (number2.includes("0")) {
        for (var i = 0; i < number2.length; i++) {
          newArray.push("Beep");
        }
      } else if (number2.includes("1")) {
        for (var i = 0; i < number2.length; i++) {
          newArray.push("Boop");
        }
      }
    }

    
    $(".number").text(number);
    if (result === 1) {
      $(".number").text("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      $(".number").text(newArray);
    }
  });
});
