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
//---------------------------------------------------
// AJAX for members / Temp login
//---------------------------------------------------
// var membersUrl = "../data/member.html";
// $.getJSON(membersUrl, function (response) {
//     });
// SHOW MEMBER LOGIN
    $("#member-login").click( function(){
        $("#contact").toggle();
        $("#login-form").toggle();
    });
// LOGOUT
    $("#members").click("input:button[name='logout']", function() {
        $("#members").toggle();
        $("#public").toggle();
    });
// LOGIN
    $("input:button[name='submit']").click(function(){
        var name = $("input:text[name='name']").val();
        var pass = $("input:text[name='password']").val();
        // var insertAfter = $()
        if( name === "pirate" && pass === "16") {
            // $(".main-mobile-nav").hide();
            // $("mobile-nav").html(
            //     "<li><a <a href='#announcments'>ANNOUNCMENTS</a></li>" +
            //     "<li><a href='#announcments'>MEETINGS / DUES</a></li>" +
            //     "<li><a href='#announcments'>RULES</a></li>" +
            //     "<li>SHOW:</li>" +
            //     "<li><a href='#announcments'>PRE</a></li>" +
            //     "<li><a href='#announcments'>DURING</a></li>" +
            //     "<li><a href='#announcments'>POST</a></li>" +
            //     "<li><a href='#announcments'>CONTACT LIST</a></li>" +
            //     "<li><a href='#announcments'>LIASONS</a></li>"
            // );
            $(".main-nav").toggle();
            $(".desktop-nav").html(
                "<span><a href='#announcments'>ANNOUNCMENTS</a></span>" +
                "<span><a href='#announcments'>MEETINGS / DUES</a></span>" +
                "<span><a href='#announcments'>RULES</a></span>" +
                "<span>SHOW:</span>" +
                "<span><a href='#announcments'>PRE</a></span>" +
                "<span><a href='#announcments'>DURING</a></span>" +
                "<span><a href='#announcments'>POST</a></span>" +
                "<span><a href='#announcments'>CONTACT LIST</a></span>" +
                "<span><a href='#announcments'>LIASONS</a></span>"
            );
            $(".background").addClass('background-grey');
            $("#public").toggle();
            $("#members").load("../data/member.html");
        } else {
            alert("Incorrect Password");
            $("#contact").toggle();
            $("#login-form").toggle();
        }
    });
});// END ONLOAD
