$( document ).ready(function(){

  var getAppointment1= JSON.parse(localStorage.getItem('appointment1'));

$(".appointmentList").append(
  "<li>" +"<p class='timeBlock'>" + getAppointment1.Time + '</p>' + "<a href='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment1.Title + '</h1>' + '  <h1 class="location">' + getAppointment1.CityState+ '</h1>' + '</a>' + '</li>')

  console.log( "Loaded Appointment 1!" );

// ____________End Item 1________________________

var getAppointment2= JSON.parse(localStorage.getItem('appointment2'));

$(".appointmentList").append(
"<li>" +"<p class='timeBlock'>" + getAppointment2.Time + '</p>' + "<a href='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment2.Title + '</h1>' + '  <h1 class="location">' + getAppointment2.CityState+ '</h1>' + '</a>' + '</li>')

console.log( "Loaded Appointment 2!");

// ____________End Item 2________________________

var getAppointment3= JSON.parse(localStorage.getItem('appointment3'));

$(".appointmentList").append(
"<li>" +"<p class='timeBlock'>" + getAppointment3.Time + '</p>' + "<a href='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment3.Title + '</h1>' + '  <h1 class="location">' + getAppointment3.CityState+ '</h1>' + '</a>' + '</li>')

console.log( "Loaded Appointment 3!" );

// ____________End Item 3________________________
var getAppointment4= JSON.parse(localStorage.getItem('appointment4'));
  
$(".appointmentList").append(
"<li>" +"<p class='timeBlock'>" + getAppointment4.Time + '</p>' + "<a href='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment4.Title + '</h1>' + '  <h1 class="location">' + getAppointment4.CityState+ '</h1>' + '</a>' + '</li>')

console.log( "Loaded Appointment 4!" );

// ____________End Item 4________________________











});
