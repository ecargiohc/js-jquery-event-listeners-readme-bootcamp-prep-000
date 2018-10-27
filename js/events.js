function getIt() {
  $('p').on('click');
  alert("Hey!");
}
function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}
function pressIt() {
  $('input').on('keydown', function(event) {
    if (event.which === 71) {
      alert('G was pressed');
  }});
}
function submitIt() {
  $('submit').on;
  alert("Your form is going to be submitted now.");
}
$(document).ready(function(){

<<<<<<< HEAD
submitIt();
=======
submitIt()
>>>>>>> c5daec343ddb96ff6427600ccd47917d37981b3c

});
