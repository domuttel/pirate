// add scripts

$(document).on('ready', function() {
  // $(".menu-collapsed").click(function() {
  //   $(this).toggleClass("menu-expanded");
  // });
  $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });

});
