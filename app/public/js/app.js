$(function() {
  function loadContentArea() {
    $.get( "/api/about.json", function( data ) {
      $(".content_text .row .columns").html(data.body);
    }, "json" );
  }

  loadContentArea();

  $("#specs").click(function() {
    $.get( "/api/spec.json", function( data ) {
      $(".content_text .row .columns").html(data.body);
    }, "json" );
  });

  $("#about").click(function() {
    loadContentArea();
  });
});
