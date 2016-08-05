$(document).on('ready', function() {
    // $('h1').css("font-family", 'heavitasregular');
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
        var associates = '<h3>ASSOCIATES</h3>';
        var members = '<h3>MEMBERS</h3>';
        var statusHTML = '<h2>ARTISTS</h2><div class="artist-profile columns seven">';
        // $.each(response, function (index, artist) {
        // if( artist.memberType === "Member") {
        //     // statusHTML += '<div class="artist-profile columns seven">';
        //     statusHTML += '<h3>' + artist.firstName + artist.lastName + '</h3>';
        //     statusHTML += '</div>';
        // } else {
        //     // statusHTML += '<div class="artist-profile columns seven">';
        //     statusHTML += '<h3>' + artist.firstName + artist.lastName + '</h3>';
        //     statusHTML += '</div>';
        // }
        //         });
        $.each(response, function (index, artist) {
            statusHTML += '<h3>' + artist.firstName + artist.lastName + '</h3>';
        });
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
// SHOW MEMBER LOGIN
    $("#member-login").click( function(){
        $("#contact").toggle();
        $("#login-form").toggle();
    });
// LOGOUT
    $( '#members' ).on("click", "input[name='logout-member']", function(e) {
        e.preventDefault();
        $( "#members" ).children().remove();
        $("#public").toggle();
        $('#mobile-menu').toggle();
        $('#pirate-mobile-menu').toggle();
        $('.main-nav').toggle();
        $('.pirate-main-nav').toggle();
    });

    function removeFirstLast(string){
        var firstChar = "";
        var lastChar = "";
        lastChar = string.slice(0, -1);
        firstChar = lastChar.slice(1);
        return firstChar;
    };

// LOGIN
    $("input:button[name='submit']").click(function(e){
        e.preventDefault();
        var name = $("input:text[name='name']").val();
        var pass = $("input:text[name='password']").val();
        if( name === "pirate" && pass === "16") {
            $(".background").addClass('background-grey');
            $("#public").toggle();
            // ADD MEMBERS
            $("#members").load("../data/member.html", function(){
                var mailTagStart = '<a href="mailto:info@pirateartonline.org?cc=';
                var mailTagDirrectStart = '<a href="mailto:'
                var mailTagEnd = '">';
                var mailTagClose = '</a>';
                var phoneTagStart = '<a href="tel:';
                var phoneTagEnd = '">';
                var phoneTagClose = '</a>';
                var statusHTML = '';

                $.getJSON(url, function (response) {
                    $.each(response, function (index, artist) {
                        if( artist.memberType === "Member") {
                            statusHTML += '<p>' + artist.firstName + artist.lastName + '<br>' + mailTagDirrectStart + artist.email + mailTagEnd + artist.email + mailTagClose + '<br>' + phoneTagStart + artist.phone + phoneTagEnd + artist.phone + phoneTagClose + '<br>' + phoneTagStart + artist.phone2 + phoneTagEnd + artist.phone2 + phoneTagClose + '</p>';
                        } else {
                            statusHTML +=  '<p>' + artist.firstName + artist.lastName + '<br>' + mailTagDirrectStart + artist.email + mailTagEnd + artist.email + mailTagClose + '<br>' + phoneTagStart + artist.phone + phoneTagEnd + artist.phone + phoneTagClose + '<br>' + phoneTagStart + artist.phone2 + phoneTagEnd + artist.phone2 + phoneTagClose + '</p>';
                        }
                    });
                    $('#member-contact').html(statusHTML)
                // });
                // $.getJSON(url, function (response) {
                    var allList = '';
                    var memberList = '';
                    var associateList = '';
                    $.each(response, function (index, artist) {
                        allList += artist.email + ',';
                    });
                    removeFirstLast(allList);
                    $("#email-all").html(mailTagStart + allList + '">Email ALL Pirates</a>');

                    $.each(response, function (index, artist) {
                        if (artist.memberType === "Member") {
                            memberList += artist.email + ',';
                            removeFirstLast(memberList);
                            $('#email-members').html(mailTagStart + memberList + '">Email Members</a>')
                        } else {
                            associateList += artist.email + ',';
                            removeFirstLast(associateList);
                            $('#email-associates').html(mailTagStart + associateList + '">Email Associates</a>');
                        }
                    });
                });
            });
            // ADD EMAIL LIST
            //##############################
            // EMAIL lists
            //##############################
            // Nav menu change
            $('.main-nav').toggle();
            $('.pirate-main-nav').toggle();
            $('#mobile-menu').toggle();
            $('#pirate-mobile-menu').toggle();
            $("#contact").toggle();
            $("#login-form").toggle();
        } else {
            alert("Incorrect Password");
            $("#contact").toggle();
            $("#login-form").toggle();
        }
    });
    $("input:text").focus(function() {
      this.value = "";
    });
});// END ONLOAD
