var filterVal = 'brightness(.4)';

$(document).ready(function(){
  $('#alert-click').show(3000);
    $("#menu").click(function(){
      $("#menu-list").toggle(500);
    });
    $("#closebtn").click(function(){
      $('#alert-click').hide(1000);
    });
});
