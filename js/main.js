$(document).on('ready', function() {

//---------------------------------------------------
// mobile nav logic
//---------------------------------------------------
    $(document).on('click', '#toggle', function() {
            $('#toggle').toggleClass('active');
            $('#overlay').toggleClass('open');
    });
    $('.overlay-menu').on('click', 'li', function() {
            $('#toggle').toggleClass('active');
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
//---------------------------------------------------
// AJX for artist dat
//---------------------------------------------------
// var

    var url = "../data/artists.json";
    $.getJSON(url, function (response) {
        var statusHTML = '<h2>artists</h2> <div class="artist-profiles colums seven">';
        $.each(response, function (index, artist) {
            var hiddenInfo = '<div class="hidden-profile">';
            var hiddenInfoClose = '</div>';
            var social = '<a href="' + artist.facebook + '"><img src="images/icons-02.png" alt=""></a>';
            var profilePic = '<div class="profile-images" style="background-image: url(' + artist.bioImage + ')"></div>';
            statusHTML += '<h3>' + artist.firstName + artist.lastName + '</h3>'
                        + hiddenInfo +
                        profilePic + social +
                        '<div> Memeber Type: ' + artist.memberType + '</div>' +

                        '<p> Bio: ' + artist.bio + '</p>'
                        + hiddenInfoClose;
        });
        statusHTML += '</div>';
        $('#artists').html(statusHTML)
    });




});
