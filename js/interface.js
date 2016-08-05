$(document).ready(function() {
  var thermostat = new Thermostat
  updateTemperature = function() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.colour);
  }
  updateTemperature();
  $('#temperature-up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });
  $('#temperature-down').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });
  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });
  $('#powersaving-on').on('click', function() {
    thermostat.powerSaveOn();
    updateTemperature();
  });
  $('#powersaving-off').on('click', function() {
    thermostat.powerSaveOff();
  });

  $('#select-city').submit(function() {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
}
});
