$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#number").val());

    if (number % 3 === 0) {
      var result = 1;
    }
    if (number % 3 != 0) {
      var newNumber = ("" + number).split("").sort();
      var newArray = [];
      if (newNumber.includes("0")) {
        for (var i = 0; i < newNumber.length; i++) {
          newArray.push(" Beep");
        }
      } else if (newNumber.includes("1")) {
        for (var i = 0; i < newNumber.length; i++) {
          newArray.push(" Boop");
        }
      }else if (newNumber.includes("2") || newNumber.includes("3") || newNumber.includes("4") || newNumber.includes("5")
             || newNumber.includes("6") || newNumber.includes("7") || newNumber.includes("8") || newNumber.includes("9")){
        for (var i = 0; i < newNumber.length; i++) {
          newArray.push(newNumber[i] + " ");
        }
      }
    }

    $(".number").text(number);
    if (result === 1) {
      $(".number").text("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      $(".number").text(newArray.join(""));
    }
  });
});
