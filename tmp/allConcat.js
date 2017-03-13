var Journal = require('./../js/journal.js').journal;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Journal(title, body);
    var output = newEntry.entry();
    output.forEach(function(element) {
      $('#printed_entry').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = "c8b1d7b11ba4cd220acb5be6d1da8397";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
      .then(function(response) {
        $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    })
    .fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
