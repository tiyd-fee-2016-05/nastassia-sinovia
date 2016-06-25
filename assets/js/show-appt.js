$( document ).ready(function() {
var appointments = JSON.parse(localStorage.getItem('appointment1'));
    console.log( appointments.AppointmentID );

$(".appointmentList").append(
  "<li>" +"<p class='timeBlock'>" + appointments.Time + '</p>' + "<a href='details-appt.html' class='titleBlock'><h1 class='title'>" + appointments.Title + '</h1>' + '  <h1 class="location">' + appointments.CityState+ '</h1>' + '</a>' + '</li>')

  console.log( "Loaded Bookmarks!" );

});
