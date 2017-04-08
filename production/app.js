function removeLast (string) {
    str = string.slice(0, -1);
    return str;
};
function falseDestroyer(){
    return arr.filter(Boolean);
};
$(document).on('ready', function() {

    $("input:button[name='juried']").click( function (e) {
        e.preventDefault();
        window.location = 'https://www.callforentry.org/festivals_unique_info.php?ID=3757' + this.id;
    });
    var dodPdf = "../images/dod-press.pdf";
    var applyPdf = "../images/pirate_application_2016.pdf";
    $("input:button[name='v-application']").click( function (e) {
        e.preventDefault();
        window.open(applyPdf,'_blank');
        return false;
    });
    $("input:button[name='dod']").click( function (e) {
        e.preventDefault();
        window.open(dodPdf,'_blank');
        return false;
    });
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
// PUBLIC - List of Artists
//---------------------------------------------------
    var url = "../data/artists.json";
    $.getJSON(url, function (response) {
        ///////////////////////////////////
        $.each(response, function (index, artist) {
            console.log(typeof artist);
            console.log(index + " : " + typeof artist.firstName1);
        });
        //////////////////////////////////
        var memberStatus = '<h2>ARTISTS</h2><h3><b>MEMBERS</b></h3>';
        var associateStatus = '<h3><b>ASSOCIATES</b></h3>';
        $.each(response, function (index, artist) {
            if( artist.memberType === "Member") {
                if (artist.group === true){
                    memberStatus += '<div class="artist-profile columns seven">';
                    memberStatus += '<h3 class="artist-name">' + artist.firstName1 + ' ' + artist.lastName1 + ' / ' + artist.firstName2 + " " + artist.lastName2 + '</h3></div>';
                } else {
                    memberStatus += '<div class="artist-profile columns seven">';
                    memberStatus += '<h3 class="artist-name">' + artist.firstName1 + ' ' + artist.lastName1 + '</h3></div>';
                }
            } else {
                if(artist.group === true){
                    associateStatus += '<div class="artist-profile columns seven">';
                    associateStatus += '<h3 class="artist-name">' + artist.groupName + ': ';
                    associateStatus += artist.firstName1 + ' ' + artist.lastName1 + ' / ' + artist.firstName2 + " " + artist.lastName2 + '</h3></div>';
                } else {
                    associateStatus += '<div class="artist-profile columns seven">';
                    associateStatus += '<h3 class="artist-name">' + artist.firstName1 + ' ' + artist.lastName1 + '</h3></div>';
                }
            }
        });
        $('#artists').html(memberStatus + associateStatus);
    });

//********* click on artist to expand *********//
    $(".artist-name").click(function() {
        var $box =  $(this).next(".hidden-profile");
        if($box.is(":visible")){
            $box.slideUp(500);
            return;
        }
        var visibleBoxes = $('.hidden-profile:visible');
        if (visibleBoxes.length > 0) {
            $('.hidden-profile:visible').slideUp(500);
        }
        $box.slideDown(500);
    });
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
                var statusHTML = '';

                var mailTagStartArtist = '<a href="mailto:'
                var mailTagEnd = '">';
                var mailTagClose = '</a>';

                var phoneTagStart = '<a href="tel:';
                var phoneTagEnd = '">';
                var phoneTagClose = '</a>';

                $.getJSON(url, function (response) {
//---------------------------------------------------
// LOGGED IN - List of contacts
//---------------------------------------------------
                    $.each(response, function (index, artist) {
                        if( artist.memberType === "Member") {
                            if (artist.group === true) {
                                statusHTML += '<p class="artist-contact">' + '<b>' + artist.firstName1 + ' ' + artist.lastName1 + '</b>' + '</p>';
                                statusHTML += '<p class="artist-contact">' + mailTagStartArtist + artist.email1 + mailTagEnd + artist.email1 + mailTagClose + '</p>';
                                statusHTML += '<p class="artist-contact">' + phoneTagStart + artist.phone1 + phoneTagEnd + artist.phone1 + phoneTagClose + '</p>';
                                statusHTML += '<p class="artist-contact">' + '<b>' + artist.firstName2 + ' ' + artist.lastName2 + '</b>' + '</p>';
                                statusHTML += '<p class="artist-contact">' + mailTagStartArtist + artist.email2 + mailTagEnd + artist.email2 + mailTagClose + '</p>';
                                statusHTML += '<p class="artist-contact">' + phoneTagStart + artist.phone2 + phoneTagEnd + artist.phone2 + phoneTagClose + '</p>';
                            } else {
                                statusHTML += '<p class="artist-contact">' + '<b>' + artist.firstName1 + ' ' + artist.lastName1 + '</b>' + '</p>';
                                statusHTML += '<p class="artist-contact">' + mailTagStartArtist + artist.email1 + mailTagEnd + artist.email1 + mailTagClose + '</p>';
                                statusHTML += '<p class="artist-contact">' + phoneTagStart + artist.phone1 + phoneTagEnd + artist.phone1 + phoneTagClose + '</p>';
                                statusHTML += '<p class="artist-contact">' + phoneTagStart + artist.phone2 + phoneTagEnd + artist.phone2 + phoneTagClose + '</p>';
                            }
                        }
                        else {
                            if (artist.group === true) {
                                statusHTML += '<p class="artist-contact">' + '<b>' + artist.firstName1 + ' ' + artist.lastName1 + '</b>' + '</p>';
                                statusHTML += '<p class="artist-contact">' + mailTagStartArtist + artist.email1 + mailTagEnd + artist.email1 + mailTagClose + '</p>';
                                statusHTML += '<p class="artist-contact">' + phoneTagStart + artist.phone1 + phoneTagEnd + artist.phone1 + phoneTagClose + '</p>';
                                statusHTML += '<p class="artist-contact">' + '<b>' + artist.firstName2 + ' ' + artist.lastName2 + '</b>' + '</p>';
                                statusHTML += '<p class="artist-contact">' + mailTagStartArtist + artist.email2 + mailTagEnd + artist.email2 + mailTagClose + '</p>';
                                statusHTML += '<p class="artist-contact">' + phoneTagStart + artist.phone2 + phoneTagEnd + artist.phone2 + phoneTagClose + '</p>';
                            } else {
                                statusHTML += '<p class="artist-contact">' + '<b>' + artist.firstName1 + ' ' + artist.lastName1 + '</b>' + '</p>';
                                statusHTML += '<p class="artist-contact">' + mailTagStartArtist + artist.email1 + mailTagEnd + artist.email1 + mailTagClose + '</p>';
                                statusHTML += '<p class="artist-contact">' + phoneTagStart + artist.phone1 + phoneTagEnd + artist.phone1 + phoneTagClose + '</p>';
                                statusHTML += '<p class="artist-contact">' + phoneTagStart + artist.phone2 + phoneTagEnd + artist.phone2 + phoneTagClose + '</p>';
                            }
                        }
                    });
                    $('#member-contact').html(statusHTML);
                    $("a").each(function() {
                        var href = $(this).attr("href");
                        if(href === 'tel:') {
                            $(this).remove();
                        } else if (href === 'mailto:') {
                            $(this).remove();
                        }
                    });
                });
                $.getJSON(url, function (response) {
                    var mailTagStart = '<a href="mailto:info@pirateartonline.org?cc=';
                    var allList = '';
                    var memberList = '';
                    var associateList = '';
                    $.each(response, function (index, artist) {
                        allList += artist.email1 + ',';
                        removeLast(allList);
                    });
                    $("#email-all").html(mailTagStart + allList + '"><b>Email ALL Pirates</b></a>');
                    $.each(response, function (index, artist) {
                        if (artist.memberType === "Member") {
                            memberList += artist.email1 + ',';
                            removeLast(memberList);
                            $('#email-members').html(mailTagStart + memberList + '"><b>Email Members</b></a>')
                        } else {
                            associateList += artist.email1 + ',';
                            removeLast(associateList);
                            $('#email-associates').html(mailTagStart + associateList + '"><b>Email Associates</b></a>');
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


function initMap() {

    // Specify features and elements to define styles.
    var styles = [
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                { "color": "#ffffff" }
            ]
        },{
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                { "color": "#dad8d9" }
            ]
        },{
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                { "visibility": "off" }
            ]
        },{
            "featureType": "poi.business",
            "elementType": "labels.text.stroke",
            "stylers": [
                { "hue": "#ff1a00" },
                { "visibility": "off" },
                { "color": "#060e0c" }
            ]
        },{
            "featureType": "landscape.man_made",
            "stylers": [
                { "lightness": 23 },
                { "color": "#e7e9ec" }
            ]
        },{
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
                { "lightness": -100 },
                { "saturation": -94 },
                { "visibility": "off" }
            ]
        },{
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                { "visibility": "off" },
                { "lightness": -100 }
            ]
        },{
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                //   { "visibility": "off" },
                { "lightness": -100 }

            ]
        },{
            "featureType": "water",
            "stylers": [
                { "visibility": "off" }
            ]
        }
    ];
    var myLatLng = {lat:39.7678710999999, lng: -105.00435830000004};
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        // Apply the map style array to the map.
        styles: styles,
        zoom: 19
    });
    var image = 'images/red-skull.png';
    var marker = new google.maps.Marker({
        position: myLatLng,
        //  label: "P",
        map: map,
        icon: image,
        title: "Pirate: Contemporary Art"
    });

    google.maps.event.addListener(marker , 'mouseover', function(){
        var infowindow = new google.maps.InfoWindow({
            content:'Pirate: Contemporary Art',
            position: myLatLng,
        });
        infowindow.open(map);
    });














};

//# sourceMappingURL=../maps/app.js.map
