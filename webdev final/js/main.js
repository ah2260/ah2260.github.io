// JavaScript Document

//initializes on page load 
$(document).ready(function () {
	
	$("body").append($("<div>", { "class": "scrolltop" }).add($("<div>", { "class": "marginTop"})).hide());
	
	$("h1,.banner-contents p").addClass("hidden4");
	// hides h1 and p on banner and img on sec2 initially
	$(".layers").addClass("hidden4");
	// hides items on services section initially
	$(".services-lists li").addClass("hidden2");
	// hides items on team section initially
	$(".team-details").addClass("hidden3");
	//toggle links appear under hamburger menu
	$(".menu-icon").click(function () {
        $(".collapse").toggle(function () {
			$(this).addClass("block")
		});
    });
	
	//after 200 ms adds fadeIn2 class to h1 and banner paragraph
	setTimeout(function () {
        $("h1").addClass("fadeIn2");
    }, 200);
	setTimeout(function () {
        $(".banner-contents p").addClass("fadeIn2");
    }, 500);
	
	var width = parseInt($(".scrolltop").css("width"));
	var scrollTop = parseInt($(".scrolltop").css("height"));
	var marginTop = parseInt($(".marginTop").css("top"));
	var $window = $(window);
	var $firstServiceLi = $(".services-lists li:first");
	var $servicesLi = $(".services-lists li");
	var $firstTeamDetail = $(".team-details:first");
	var $teamDetails = $(".team-details");
	var $layers = $(".layers");
	var $banner = $('#banner');
	var $margin = $('.margin');
	
	//functions on scroll
    $window.scroll(function () {
			//mathematical formulas for transitions to start depending on scroll position
            var winScrollTop = $window.scrollTop();
            var bottom_of_object1 = $firstServiceLi.offset().top + $servicesLi.outerHeight();
			var bottom_of_object2 = $firstTeamDetail.offset().top + $teamDetails.outerHeight() / 2;
			var bottom_of_object3 = $layers.offset().top + $layers.outerHeight()/4;
            var bottom_of_window = winScrollTop + $window.height();
			var parallax = scrollTop - winScrollTop * .75;
			var parallax2 = marginTop + winScrollTop * .65;
			//parallex scrolling
			$banner.css('height', parallax);
			$margin.css('margin-top', parallax2);
			
			//getting scroll positions on section 2
			if(bottom_of_window > bottom_of_object3){
				//makes image in section 2 visible
				$layers.addClass("fadeIn2");
				
				setTimeout(function() {
					//animates first layer of image on section 2
					$(".layer1").addClass("animate1");
					$(".layer2").addClass("animate2");
					$(".layer3").addClass("animate3");
    			}, 300);
			}
			
			if(bottom_of_window > bottom_of_object1){
				//fades items in services section 
				//fades in items one at a time 200 ms one after the other
				//elements transition down because they move from a negative to 0 margin
					$servicesLi.each(function (i, item) {
                    	setTimeout(function () {
        					$(item).addClass("fadeIn");
    					}, 200 * i);
        			});		
			}
			
			if(bottom_of_window > bottom_of_object2){
				//fades items in our team section 
				//fades in items one at a time 200 ms one after the other
				//elements transition up because they move from a positive to 0 margin
				$teamDetails.each(function (i, item) {
                    	setTimeout(function () {
        					$(item).addClass("fadeIn");
    					}, 200 * i);
        			});
			}
			
    });   
			
});