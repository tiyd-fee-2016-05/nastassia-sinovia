var submitCount = 0

$(".saveNew").click(function(){

submitCount++

var appointmentID = submitCount

$(".addAppt").submit();
  console.log ("Form submitted!")

var appointmentTitle = $('input[id="appTitle"]').val();

console.log(appointmentTitle);

var appointmentStreet = $('input[id="appStreet"]').val();

console.log(appointmentStreet);

var appointmentLocation = $('input[id="appLocation"]').val();

console.log(appointmentLocation);

var appointmentDate = $('input[id="appDate"]').val();

console.log(appointmentDate);

var appointmentTime = $('input[id="appTime"]').val();

console.log(appointmentTime);


localStorage.setItem('appointment', JSON.stringify({
    AppointmentID: appointmentID,
    Title: appointmentTitle,
    Street: appointmentStreet,
    CityState: appointmentLocation,
    Day: appointmentDate,
    Time: appointmentTime,


}));





});
