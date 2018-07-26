(function($,sr) {
	// debouncing function from John Hann
	// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	var debounce = function (func, threshold, execAsap) {
		var timeout;
		return function debounced () {
			var obj = this, args = arguments;
			function delayed () {
				if (!execAsap)
				                  func.apply(obj, args);
				timeout = null;
			}
			;
			if (timeout)
			              clearTimeout(timeout); else if (execAsap)
			              func.apply(obj, args);
			timeout = setTimeout(delayed, threshold || 100);
		}
		;
	}
	// smartresize 
	jQuery.fn[sr] = function(fn) {
		return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
	}
	;
}
)(jQuery,'smartresize');


$(document).ready(function() {
	///////////////////////////////
	// Set Home Slideshow Height
	///////////////////////////////
	function setHomeBannerHeight() {
		var windowHeight = jQuery(window).height();
		jQuery('#header').height(windowHeight);
	}
	///////////////////////////////
	// Center Home Slideshow Text
	///////////////////////////////
	function centerHomeBannerText() {
		var bannerText = jQuery('#header > .center');
		var bannerTextTop = (jQuery('#header').actual('height')/2) - (jQuery('#header > .center').actual('height')/2) - 20;
		bannerText.css('padding-top', bannerTextTop+'px');
		bannerText.show();
	}
	setHomeBannerHeight();
	centerHomeBannerText();
	//Resize events
	jQuery(window).smartresize(function() {
		setHomeBannerHeight();
		centerHomeBannerText();
	});
	
	function scroll() {
		if ($(window).scrollTop() == 0 ) {
			//$('.nav > li').removeClass('active');
			console.log($(window).scrollTop());
		} else {
			
		}
	}
	document.onscroll = scroll;
	var $scrollDownArrow = $('#scrollDownArrow');
	var animateScrollDownArrow = function() {
		$scrollDownArrow.animate( {
			top: 5,
		}
		, 400, "linear", function() {
			$scrollDownArrow.animate( {
				top: -5,
			}
			, 400, "linear", function() {
				animateScrollDownArrow();
			}
			);
		});
	}
	animateScrollDownArrow();
	//Set Down Arrow Button
	jQuery('#scrollDownArrow').click(function(e) {
		e.preventDefault();
		jQuery.scrollTo("#story", 1000, {
			offset:-(jQuery('#header #menu').height()), axis:'y'
		}
		);
	});
	jQuery('.nav > li > a, #logo a').click(function(e) {
		e.preventDefault();

		jQuery.scrollTo(jQuery(this).attr('href'), 400, {
			offset:-(jQuery('#header #menu').height()), axis:'y'
		}
		);
	});


});

//carousel

$(document).ready(function() {
  var first = $(".loc-wrap .loc-item:first-child");
  var last;

  function lastIcons() {
    var width = $(window).width();
    if (width < 991) {
      last = $(".loc-wrap .loc-item:nth-last-child(2)");
    } else if (width > 992 && width < 1199) {
      last = $(".loc-wrap .loc-item:nth-last-child(3)");
    } else if (width > 1200) {
      last = $(".loc-wrap .loc-item:nth-last-child(4)");
    }
  }
  lastIcons();
  $(window).resize(function() {
    lastIcons();
  });
  first.addClass("selected");
  $("#icons-left").click(function() {
    if (!first.hasClass("selected")) {
      $(".selected").removeClass("selected").prev().addClass("selected");
    } else if (first.hasClass("selected")) {
      $(".selected").removeClass("selected");
      last.addClass("selected");
    }
    $(".loc-wrap").animate({
      scrollLeft: $(".selected").position().left
    }, '500');
  });
  $("#icons-right").click(function() {
    if (!last.hasClass("selected")) {
      $(".selected").removeClass("selected").next().addClass("selected");
    } else if (last.hasClass("selected")) {
      $(".selected").removeClass("selected");
      first.addClass("selected");
    }
    $(".loc-wrap").animate({
      scrollLeft: $(".selected").position().left
    }, '500');
  });
});

/*Preloader*/


$(document).ready(function(){
	$(window).load(function(){
		$('body').removeClass('loading');
		preloaderFadeOutTime = 50;
		function hidePreloader(){
			var preloader = $('.spinner-wrapper');
			preloader.fadeOut(preloaderFadeOutTime);
		}
		hidePreloader();
});
});