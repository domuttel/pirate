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

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 50) {
            $('.background').addClass("fade-out");
        }
        else if (y < 50) {
            $('.background').removeClass("fade-out");
        }
    });

//---------------------------------------------------
// AJAX for artist data
//---------------------------------------------------

    var url = "../data/artists.json";
    $.getJSON(url, function (response) {
        var statusHTML = '<h2>artists</h2> <div class="artist-profile columns seven">';
        $.each(response, function (index, artist) {
            statusHTML += '<h3>' + artist.firstName + artist.lastName + '</h3>';
        });
        statusHTML += '</div>';
        $('#artists').html(statusHTML)
    });
//********* click on artist to expand *********//
    // $(".artist-name").click(function() {
    //     var $box =  $(this).next(".hidden-profile");
    //     if($box.is(":visible")){
    //         $box.slideUp(500);
    //         return;
    //     }
    //     var visibleBoxes = $('.hidden-profile:visible');
    //     if (visibleBoxes.length > 0) {
    //         $('.hidden-profile:visible').slideUp(500);
    //     }
    //     $box.slideDown(500);
    // });
});
