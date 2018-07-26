function initMap() {
      	var featureOpts = [
		    {
		        "featureType": "administrative",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#444444"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#f2f2f2"
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "labels.text",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "all",
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "lightness": 45
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#a6eaad"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels.text",
		        "stylers": [
		            {
		                "color": "#797171"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "lightness": "-100"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "saturation": "-100"
		            },
		            {
		                "lightness": "87"
		            },
		            {
		                "gamma": "3.54"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#2f50a2"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.line",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#c70fef"
		            },
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#ce3c50"
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#8bc6dd"
		            }
		        ]
		    }
		];



var uluru = {lat: 22.419480, lng: 72.897385}; 
      	var mapOpts = {
      		zoom:15,
      		center: uluru,
      		disableDefaultUI : true,
      		styles:featureOpts
      	}; 
        var map = new google.maps.Map(document.getElementById('map1'),mapOpts);
        map.controls[google.maps.ControlPosition.CENTER].push(document.getElementById('overlay1'));
        var marker = new google.maps.Marker({
    		position: uluru,
    			icon: "images/p.png",
   				 draggable: false,
   				 map: map
  		});

		var uluru = {lat: 22.552235, lng: 72.922596}; 
      	var mapOpts = {
      		zoom:15,
      		center: uluru,
      		disableDefaultUI : true,
      		styles:featureOpts
      	}; 
        var map = new google.maps.Map(document.getElementById('map2'),mapOpts);
        map.controls[google.maps.ControlPosition.CENTER].push(document.getElementById('overlay2'));
        var marker = new google.maps.Marker({
    		position: uluru,
    			icon: "images/p.png",
   				 draggable: false,
   				 map: map
  		});



  		var uluru = {lat: 22.557470, lng: 72.956144}; 
      	var mapOpts = {
      		zoom:15,
      		center: uluru,
      		disableDefaultUI : true,
      		styles:featureOpts
      	}; 
        var map = new google.maps.Map(document.getElementById('map3'),mapOpts);
        map.controls[google.maps.ControlPosition.CENTER].push(document.getElementById('overlay3'));
        var marker = new google.maps.Marker({
    		position: uluru,
    			icon: "images/p.png",
   				 draggable: false,
   				 map: map
  		});
}