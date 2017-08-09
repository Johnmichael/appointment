$(document).ready(function() {
  $("form#appointment").submit(function(event) {
   event.preventDefault();
   var name = $("#name").val();
   var desc = $("#desc").val();
   var date = $("#date").val();
   var start = $("#start").val();
   var end = $("#end").val();
  var result = "thank you for scheduling "+name+", your appointment for "+desc+" on "+date+" starting at "+start+ " ending at "+end+ " has been made.";
$("#output").text(result);
});
});
