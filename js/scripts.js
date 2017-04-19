// function rotate() {
//   var element = document.getElementsByClassName('jupiter');
//   var position= 0;
//   var id set
// }

//contact form
$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    $("#contact-message").empty();

    if (name == "" || email == "" || message == "") {
      alert("Some information is missing please fill all input fields");
    } else {
// Returns successful data submission message when the entered information is stored in database.
$.post("contact_form.php", {
name1: name,
email1: email,
message1: message
}, function(data) {
$("#returnmessage").append(data); // Append returned message to message paragraph.
if (data == "Your Query has been received, We will contact you soon.") {
$("#form")[0].reset(); // To reset form fields on success.
}
});
}
  });
});
