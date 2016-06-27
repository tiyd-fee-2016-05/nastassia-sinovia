;
(function() {
  var key = "12954939113a129b197b295ee0deb737"

  var daysofWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  function getWeather(e) {
    if (e) {
      e.preventDefault();
    }

    var appointmentLocation = $('input[id="appLocation"]').val();
    $.ajax("http://api.openweathermap.org/data/2.5/weather?q=" + appointmentLocation + "&appid=" + key + "&units=imperial")
      .then(function(response) {
        console.log(response);
        $(".city--nameInput").val(response.name);
        $(".city--weather").html(response.weather[0].description);
        $(".city--temp").html(Math.round(response.main.temp));
      });

    $.ajax("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + appointmentLocation + "&appid=" + key + "&units=imperial&cnt={7")
      .then(function(response) {
        $('.day').each(function(index) {
           console.log($(this).html());
          var day = response.list[index + 1]
          var dayofWeek = new Date(day.dt * 1000).getDay();
          console.log(day);
          console.log(daysofWeek[dayofWeek]);
          $(this).find('.day--name').html(daysofWeek[dayofWeek]);
          $(this).find('.day--high').html(Math.round(day.temp.max));
          $(this).find('.day--low').html(Math.round(day.temp.min));

          var image = "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png";
          $(this).find('.day--weather').html("<img src='" + image + "'>");

        })

      });


  }
  $('.city--form').submit(getWeather);

  getWeather()









})();
