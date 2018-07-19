/*
  Theme Name: Materio
  Theme URL: -
  Author: oprns
  Author URI: -
  Description: Onepage Responsive HTML Mobile App Landing Page
  Version: 1.0
*/

"use strict";

//custom js file for materio
(function() {
  var Materio = {
    
    init: function() {
      this.launchPreLoader();
      this.materialize();
      this.owlCarousel();
      this.loadMap();
    },

    //init materialize framewoek features
    materialize: function() {
      $(".button-collapse").sideNav();
      
      $(".dropdown-button").dropdown({
        hover: false
      });

      //wow on load animate init
      new WOW().init();

      //nice scroll plugin  init
      $("html").niceScroll({
        mousescrollstep : 50
      });
    },

    //init owl carousel
    owlCarousel: function() {
      
      $("#reviews-carousel").owlCarousel({
        items : 1,
        singleItem : true,
        itemsCustom : false,
        autoPlay: 5000
      });

      $("#screenshot-carousel").owlCarousel({
        items : 6,
        itemsCustom : false,
        autoPlay: 6000
      });
    },

    //show preloader while 
    launchPreLoader: function() {
      $(window).load(function() {
        $(".preloader").fadeOut("5000", function() {
          $(this).remove();
          $("body").removeClass("loading").addClass("loaded");
        });
      });    
    },

    //load google map via api
    loadMap: function() {

      // The latitude and longitude of your business / place
      var position = [25.7215, -80.2684];

      var styles = [
      {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
               "invert_lightness": true
            },
            {
              "saturation": 10
            },
            {
              "lightness": 30
            },
            {
              "gamma": 0.5
            },
            {
              "hue": "#435158"
            }
          ]
        }
      ];
       
      var latLng = new google.maps.LatLng(position[0], position[1]);

      var mapOptions = {
          scrollwheel: false,
          zoom: 12,
          zoomControl: true,
          streetViewControl: false,
          scaleControl: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: latLng
      };

      var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

      // Show the default red marker at the location
      var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          draggable: false,
          animation: google.maps.Animation.DROP
      });

      map.setOptions({
        styles: styles
      });
    }
  }

  Materio.init();

})();


$(document).ready(function() {

  //remove this in production
  //customizer events
  $('.customizer .toggle-btn').on('click', function(event) {
    $('.customizer .interface').animate({
      right: [ "toggle", "swing" ],
    }, 0);
  });

  $('#color li').on('click', function(event) {
    var color = $(this).attr('class');
    $('link[data-id="style-switch"]').attr("href", "assets/css/materio-"+color+".css");
  });  

});