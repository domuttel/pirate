$(document).on('ready', function() {

//---------------------------------------------------
// mobile nav logic
//---------------------------------------------------
    $('#toggle').click(function() {

            $(this).toggleClass('active');
            $('#overlay').toggleClass('open');

    });
    //*** Close mobile nav
    // $("li").on('click', function(){
    //     $('#overlay').toggleClass('open');
    // });
//---------------------------------------------------
// scroll to div logic options
//---------------------------------------------------
    $('a[href^="#"]').on('click', function(event) {

      var target = $(this.getAttribute('href'));

      if( target.length ) {
        event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });
//---------------------------------------------------
// background fade on scroll
//---------------------------------------------------
    $('#about').on( 'scroll', function(){
		if ($('#about').scrollTop() > '2px') {
			$('.background').css({opacity: ".05"});
		};
	});

});
