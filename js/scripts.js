$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var input = $("#stringInput").val();
       $("#form").hide();
    
 
  
  var newsentence= [];
  for(var i = 0; i <= input.length; i++){
    var newsentence = input.replace(/a|e|i|o|u/gi , '-');
    
  }

 });
});
