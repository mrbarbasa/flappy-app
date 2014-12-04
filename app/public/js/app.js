$(function() {
  $("#specs").click(function() {
    $.get( "/api/spec.json", function( data ) {
      $(".content_text .row .columns").html(data.body);
    }, "json" );
  });

  $.get( "/api/about.json", function( data ) {
    $(".content_text .row .columns").html(data.body);
  }, "json" );
});
