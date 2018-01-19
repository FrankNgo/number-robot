



$(document).ready(function() {
  $("#number-form").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#number").val());
    var result = numberBot(number);

    $(".number").text(number);


  });
});
