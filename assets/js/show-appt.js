$( document ).ready(function(){

  var getAppointment1= JSON.parse(localStorage.getItem('appointment1'));

$(".appointmentList").append(
  "<li class='appt1'>" +"<p class='timeBlock'>" + getAppointment1.Time + '</p>' + "<span class='titleBlock'><h1 class='title'>" + getAppointment1.Title + '</h1>' + '  <h1 class="location">' + getAppointment1.CityState+ '</h1>' + '</span>' + '</li>')

  console.log( "Loaded Appointment 1!" );

  // ____________Loads Appointment 1 Into Modal________________________
  $(".appt1").click(function() {
  $(".detailsModal1").css("display", "block");
  console.log("Appt 1 click")

  var getAppointment1= JSON.parse(localStorage.getItem('appointment1'));

    $(".detailsHeader").append('<h1 class="detailsLogoTitle"><a href="index.html"><i class="fa fa-chevron-left closeDetailsModal" aria-hidden="true"></i></a>' + getAppointment1.Title + '</h1>')
    $(".appointmentDetail").append('<h1>' + getAppointment1.Day + ' at ' + '<span class="detailsTime">' + getAppointment1.Time + '</span></h1><h1 class="detailsLocation">' + getAppointment1.CityState + '<i class="fa fa-map-marker fa-lg" aria-hidden="true"></i></h1>' + ' <img src="assets/images/map.png">' + '<h1 class="weather">' + 'Rainy, 55F' + '</h1>')
  });

  $(".closeDetailsModal").click(function () {
  $(".detailsModal").css("display", "none");
  console.log("Clicked")
  });

// ____________End Item 1________________________

var getAppointment2= JSON.parse(localStorage.getItem('appointment2'));

$(".appointmentList").append(
"<li class='appt2'>" +"<p class='timeBlock'>" + getAppointment2.Time + '</p>' + "<span ='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment2.Title + '</h1>' + '  <h1 class="location">' + getAppointment2.CityState+ '</h1>' + '</span>' + '</li>')

console.log( "Loaded Appointment 2!");

// ____________Loads Appointment 2 Into Modal________________________
$(".appt2").click(function() {
$(".detailsModal2").css("display", "block")
console.log("Appt 2 click")

var getAppointment2= JSON.parse(localStorage.getItem('appointment2'));

  $(".detailsHeader").append('<h1 class="detailsLogoTitle"><a href="index.html"><i class="fa fa-chevron-left closeDetailsModal" aria-hidden="true"></i></a>' + getAppointment2.Title + '</h1>')
  $(".appointmentDetail").append('<h1>' + getAppointment2.Day + ' at ' + '<span class="detailsTime">' + getAppointment2.Time + '</span></h1><h1 class="detailsLocation">' + getAppointment2.CityState + '<i class="fa fa-map-marker fa-lg" aria-hidden="true"></i></h1>' + ' <img src="assets/images/map.png">' + '<h1 class="weather">' + 'Rainy, 55F' + '</h1>')
});

$(".closeDetailsModal").click(function () {
$(".detailsModal").css("display", "none");
console.log("Clicked")
});

// ____________End Item 2________________________

var getAppointment3= JSON.parse(localStorage.getItem('appointment3'));

$(".appointmentList").append(
"<li class='appt3'>" +"<p class='timeBlock'>" + getAppointment3.Time + '</p>' + "<span='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment3.Title + '</h1>' + '  <h1 class="location">' + getAppointment3.CityState+ '</h1>' + '</span>' + '</li>')

console.log( "Loaded Appointment 3!" );


// ____________Loads Appointment 3 Into Modal________________________
$(".appt3").click(function() {
$(".detailsModal3").css("display", "block")
console.log("Appt 3 click")

var getAppointment3= JSON.parse(localStorage.getItem('appointment3'));

  $(".detailsHeader").append('<h1 class="detailsLogoTitle"><a href="index.html"><i class="fa fa-chevron-left closeDetailsModal" aria-hidden="true"></i></a>' + getAppointment3.Title + '</h1>')
  $(".appointmentDetail").append('<h1>' + getAppointment3.Day + ' at ' + '<span class="detailsTime">' + getAppointment3.Time + '</span></h1><h1 class="detailsLocation">' + getAppointment3.CityState + '<i class="fa fa-map-marker fa-lg" aria-hidden="true"></i></h1>' + ' <img src="assets/images/map.png">' + '<h1 class="weather">' + 'Rainy, 55F' + '</h1>')
});

$(".closeDetailsModal").click(function () {
$(".detailsModal").css("display", "none");
console.log("Clicked")
});
});



// ____________End Item 3________________________
var getAppointment4= JSON.parse(localStorage.getItem('appointment4'));

$(".appointmentList").append(
"<li class='appt4'>" +"<p class='timeBlock'>" + getAppointment4.Time + '</p>' + "<span='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment4.Title + '</h1>' + '  <h1 class="location">' + getAppointment4.CityState+ '</h1>' + '</span>' + '</li>')

console.log( "Loaded Appointment 4!" );
// ____________End Item 4________________________
var getAppointment5= JSON.parse(localStorage.getItem('appointment5'));

$(".appointmentList").append(
"<li class='appt5'>" +"<p class='timeBlock'>" + getAppointment5.Time + '</p>' + "<span='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment5.Title + '</h1>' + '  <h1 class="location">' + getAppointment5.CityState+ '</h1>' + '</span>' + '</li>')

console.log( "Loaded Appointment 5!" );
// ____________End Item 5________________________
var getAppointment6= JSON.parse(localStorage.getItem('appointment6'));

$(".appointmentList").append(
"<li class='appt6'>" +"<p class='timeBlock'>" + getAppointment6.Time + '</p>' + "<span='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment6.Title + '</h1>' + '  <h1 class="location">' + getAppointment6.CityState+ '</h1>' + '</span>' + '</li>')

console.log( "Loaded Appointment 6!" );
// ____________End Item 6________________________
var getAppointment6= JSON.parse(localStorage.getItem('appointment6'));

$(".appointmentList").append(
"<li class='appt7'>" +"<p class='timeBlock'>" + getAppointment7.Time + '</p>' + "<span='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment7.Title + '</h1>' + '  <h1 class="location">' + getAppointment7.CityState+ '</h1>' + '</span>' + '</li>')

console.log( "Loaded Appointment 7!" );
// ____________End Item 7________________________
var getAppointment8= JSON.parse(localStorage.getItem('appointment8'));

$(".appointmentList").append(
"<li class='appt8'>" +"<p class='timeBlock'>" + getAppointment8.Time + '</p>' + "<span='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment8.Title + '</h1>' + '  <h1 class="location">' + getAppointment8.CityState+ '</h1>' + '</span>' + '</li>')

console.log( "Loaded Appointment 8!" );
// ____________End Item 8________________________
var getAppointment9= JSON.parse(localStorage.getItem('appointmen9'));

$(".appointmentList").append(
"<li class='appt9'>" +"<p class='timeBlock'>" + getAppointment9.Time + '</p>' + "<span='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment9.Title + '</h1>' + '  <h1 class="location">' + getAppointment9.CityState+ '</h1>' + '</span>' + '</li>')

console.log( "Loaded Appointment 9!" );
// ____________End Item 7________________________
var getAppointment9= JSON.parse(localStorage.getItem('appointmen9'));

$(".appointmentList").append(
"<li class='appt10'>" +"<p class='timeBlock'>" + getAppointment10.Time + '</p>' + "<span='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment10.Title + '</h1>' + '  <h1 class="location">' + getAppointment10.CityState+ '</h1>' + '</span>' + '</li>')

console.log( "Loaded Appointment 10!" );
// ____________End Item 7________________________











// ____________End Item 3________________________
// var getAppointment4= JSON.parse(localStorage.getItem('appointment4'));
//
// $(".appointmentList").append(
// "<li id='4'>" +"<p class='timeBlock'>" + getAppointment4.Time + '</p>' + "<a href='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment4.Title + '</h1>' + '  <h1 class="location">' + getAppointment4.CityState+ '</h1>' + '</a>' + '</li>')
//
// console.log( "Loaded Appointment 4!" );
//
// // ____________End Item 4________________________


// var getAppointment1= JSON.parse(localStorage.getItem('appointment1'));
//
// $(".detailsModal").append('<header class ="detailsHeader">' + '<h1 class="detailsLogoTitle"><a href="index.html"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>' + getAppointment1.Title + '</h1></header>')
//
//
// console.log( "Loaded Appointment 1 to Modal!" );
//
//
// $(".appt1").click(function() {
//   e.preventDefault();

  //   var getAppointment1= JSON.parse(localStorage.getItem('appointment1'));
  //
  // $(".detailsHeader").append('<h1 class="detailsLogoTitle"><a href="index.html"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>' + getAppointment1.Title + '</h1>')


    // $(".detailsHeader").append('<header><h1 class="detailsLogoTitle"><a href="index.html"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>' + getAppointment1.Title + '</h1></header><div class="appointmentDetail"><h1>' + getAppointment1.Date + ' at ' + '<span class="detailsTime">' + getAppointment1.Time + '</span></h1><h1 class="detailsLocation">' + getAppointment1.CityState + '<i class="fa fa-map-marker fa-lg" aria-hidden="true"></i></h1> <img src="assets/images/map.png">' + ' <h1 class="weather"> Rainy, 55F</h1>' + '</div>' + '<button class="editButton" type="submit"><a href="edit-appt.html">Edit Appointment</a></button>')
