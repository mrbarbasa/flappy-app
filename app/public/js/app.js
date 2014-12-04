// mkdir api // in public
// curl > api/about.json

$(function() {
  // Test
  $(".top-bar-section ul.right > li > a").click(function() {
    alert("Hello World");
  });

  $.get( "/api/about.json", function( data ) {
    alert(data.body);
    $(".content_text p").append(data.body);
  }, "json" );
});
