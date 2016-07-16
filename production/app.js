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
        var statusHTML = '<h2>artists</h2> <div class="artist-profiles columns seven">';
        $.each(response, function (index, artist) {
            var hiddenInfo = '<div class="hidden-profile">';
            var hiddenInfoClose = '</div>';
            // var social = '<a href="'  + '"><img src="images/social-01.png" alt=""></a>';
            var profilePic = '<div class="profile-images" style="background-image: url(' + artist.bioImage + ')"></div>';
            statusHTML += '<h3>' + artist.firstName + artist.lastName + '</h3>'
                        + hiddenInfo +
                        profilePic + artist.facebook + artist.twitter +  artist.instagram + artist.ello + artist.youtube + artist.linkedin + artist.vimeo +
                        '<div id="member"> Member Type: ' + artist.memberType + '</div>' +

                        '<p> Bio: ' + artist.bio + '</p>'
                        + hiddenInfoClose;
        });
        statusHTML += '</div>';
        $('#artists').html(statusHTML)
    });




});


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
      },{
      }
  ];
var myLatLng = {lat:39.76787109999999, lng: -105.00435830000004};
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
         icon: image
       });

}

//# sourceMappingURL=../maps/app.js.map
