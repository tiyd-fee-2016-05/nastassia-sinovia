$( document ).ready(function(){

  var getAppointment1= JSON.parse(localStorage.getItem('appointment1'));

$(".appointmentList").append(
  "<li class='appt1'>" +"<p class='timeBlock'>" + getAppointment1.Time + '</p>' + "<span class='titleBlock'><h1 class='title'>" + getAppointment1.Title + '</h1>' + '  <h1 class="location">' + getAppointment1.CityState+ '</h1>' + '</span>' + '</li>')

  console.log( "Loaded Appointment 1!" );

// ____________End Item 1________________________

var getAppointment2= JSON.parse(localStorage.getItem('appointment2'));

$(".appointmentList").append(
"<li id='2'>" +"<p class='timeBlock'>" + getAppointment2.Time + '</p>' + "<a href='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment2.Title + '</h1>' + '  <h1 class="location">' + getAppointment2.CityState+ '</h1>' + '</a>' + '</li>')

console.log( "Loaded Appointment 2!");

// ____________End Item 2________________________

var getAppointment3= JSON.parse(localStorage.getItem('appointment3'));

$(".appointmentList").append(
"<li id='3'>" +"<p class='timeBlock'>" + getAppointment3.Time + '</p>' + "<a href='details-appt.html' class='titleBlock'><h1 class='title'>" + getAppointment3.Title + '</h1>' + '  <h1 class="location">' + getAppointment3.CityState+ '</h1>' + '</a>' + '</li>')

console.log( "Loaded Appointment 3!" );

// ____________Loads Appointment 1 Into Modal________________________
$(".appt1").click(function() {
$(".detailsModal").css("display", "block")


    var getAppointment1= JSON.parse(localStorage.getItem('appointment1'));

  $(".detailsHeader").append('<h1 class="detailsLogoTitle"><i class="fa fa-chevron-left closeDetailsModal" aria-hidden="true"></i>' + getAppointment1.Title + '</h1>')
  $(".appointmentDetail").append('<h1>' + getAppointment1.Day + ' at ' + '<span class="detailsTime">' + getAppointment1.Time + '</span></h1><h1 class="detailsLocation">' + getAppointment1.CityState + '<i class="fa fa-map-marker fa-lg" aria-hidden="true"></i></h1>' + ' <img src="assets/images/map.png">' + '<h1 class="weather">' + 'Rainy, 55F' + '</h1>')
});

$(".closeDetailsModal").click(function () {
$(".detailsModal").css("display", "none");
console.log("Clicked")
});

});

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
