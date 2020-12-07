// JavaScript Document
$(document).ready(function () {
	
	$("body").append($("<div>", { "class": "scrolltop" }).add($("<div>", { "class": "marginTop"})).hide());
	
	$("h1,.banner-contents p").addClass("hidden4");
	$(".layers").addClass("hidden4");
	$(".services-lists li").addClass("hidden2");
	$(".team-details").addClass("hidden3");
	
	$(".menu-icon").click(function () {
        $(".collapse").toggle(function () {
			$(this).addClass("block")
		});
    });
	
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
	
    $window.scroll(function () {
		
            var winScrollTop = $window.scrollTop();
            var bottom_of_object1 = $firstServiceLi.offset().top + $servicesLi.outerHeight();
			var bottom_of_object2 = $firstTeamDetail.offset().top + $teamDetails.outerHeight() / 2;
			var bottom_of_object3 = $layers.offset().top + $layers.outerHeight()/4;
            var bottom_of_window = winScrollTop + $window.height();
			var parallax = scrollTop - winScrollTop * .75;
			var parallax2 = marginTop + winScrollTop * .65;
			
			$banner.css('height', parallax);
			$margin.css('margin-top', parallax2);
			
			if(bottom_of_window > bottom_of_object3){
				
				$layers.addClass("fadeIn2");
				
				setTimeout(function() {
					$(".layer1").addClass("animate1");
					$(".layer2").addClass("animate2");
					$(".layer3").addClass("animate3");
    			}, 300);
			}
			
			if(bottom_of_window > bottom_of_object1){
					$servicesLi.each(function (i, item) {
                    	setTimeout(function () {
        					$(item).addClass("fadeIn");
    					}, 200 * i);
        			});		
			}
			
			if(bottom_of_window > bottom_of_object2){		
				$teamDetails.each(function (i, item) {
                    	setTimeout(function () {
        					$(item).addClass("fadeIn");
    					}, 200 * i);
        			});
			}
			
    });   
			
});