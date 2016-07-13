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
              { "color": "#00000" }
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
              { "lightness": -100 }
          ]
      },{
      },{
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
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
         map: map,
         icon: image
       });
 //  var DenverArtMuseum = new google.maps.Marker({ position: {lat: 39.7371878, lng: -104.9893451}, map: map,
 // });
}

//# sourceMappingURL=../maps/app.js.map
