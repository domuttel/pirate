$(document).on('ready', function() {

//---------------------------------------------------
// mobile nav logic
//---------------------------------------------------

    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

//---------------------------------------------------
// scroll to div logic options
//---------------------------------------------------
  //.1
  // $("html, body").delay(2000).animate({scrollTop: $('#title1').offset().top }, 2000);
  //.2
  // $("#title1").animatedScroll({easing: "easeOutExpo"});

});
