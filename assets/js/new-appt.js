var submitCount = 0

$(".saveNew").click(function(e){
e.preventDefault();
submitCount++


var appointmentID = submitCount

console.log(appointmentID)
//
// Turns User Input for Appointment Title into Variable for Local Storage Call
var appointmentTitle = $('input[id="appTitle"]').val();
console.log(appointmentTitle);
//
//
// Turns User Input for Appointment Street into Variable for Local Storage Call
var appointmentStreet = $('input[id="appStreet"]').val();
console.log(appointmentStreet);
//
//
// Turns User Input for Appointment Location into Variable for Local Storage Call
var appointmentLocation = $('input[id="appLocation"]').val();
console.log(appointmentLocation);
//
//
// Turns User Input for Appointment Date into Variable for Local Storage Call
var appointmentDate = $('input[id="appDate"]').val();
console.log(appointmentDate);
//
//
// // Turns User Input for Appointment Time into Variable for Local Storage Call
var appointmentTime = $('input[id="appTime"]').val();
console.log(appointmentTime);
//
//
localStorage.setItem('appointment'+ appointmentID, JSON.stringify({
    AppointmentID: appointmentID,
    Title: appointmentTitle,
    Street: appointmentStreet,
    CityState: appointmentLocation,
    Day: appointmentDate,
    Time: appointmentTime,

}));

$(".modal").css("display", "block");
$(".saveNew").css("display", "none");

});

$(".stayOnPage").click(function(){
  $(".modal").css("display", "none");
  $(".saveNew").css("display", "block");

$('input[id="appTitle"]').val("");
$('input[id="appStreet"]').val("");
$('input[id="appLocation"]').val("");
$('input[id="appDate"]').val("");
$('input[id="appTime"]').val("");


});
