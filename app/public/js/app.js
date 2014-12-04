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

  $(".content_text .row .columns").on('mouseenter', 'span.bird', function() {
    $(this).html($("<img>", {
      src: "/images/logo.png",
      alt: "Flappy Bird"
    }));
  });

  $(".content_text .row .columns").on('mouseleave', 'span.bird', function() {
    $(this).html("bird");
  });
});
