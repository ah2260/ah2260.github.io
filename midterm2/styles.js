// JavaScript Document

$( document ).ready(hoverfunction);

$('.animation1').addClass('animate');

function hoverfunction2(){
	
	$('.icon1').hover(function(){
		$(this).css('color', '#F14088');
	});

	$('.icon2').hover(function(){
		$(this).css('color', '#00739B');
	});

	$('.icon3').hover(function(){
		$(this).css('color', '#187FB8');
	});

	$('.icon4').hover(function(){
		$(this).css('color', '#24A9E6');
	});

	$('.icon5').hover(function(){
		$(this).css('color', '#2a5b83');
	});

	$('.icon6').hover(function(){
		$(this).css('color', '#1cb1e6');
	});
	$('.icon').mouseout(function(){
		$(this).css('color','#65667B')
	});

}

function hoverfunction(){

$('.icon1').hover(function(){
		$('.border1').css("border", "2px solid #F14088");
	});
$('.icon1').mouseout(function(){
		$('.border1').css("border", "2px solid transparent");
	});
		
$('.icon2').hover(function(){
	$('.border2').css("border", "2px solid #00739B");
	});

$('.icon2').mouseout(function(){
	$('.border2').css("border", "2px solid transparent");
	});
	
$('.icon3').hover(function(){
	$('.border3').css("border", "2px solid #187FB8");
	});

$('.icon3').mouseout(function(){
	$('.border3').css("border", "2px solid transparent");
	});

$('.icon4').hover(function(){
	$('.border4').css("border", "2px solid #24A9E6");
	});

$('.icon4').mouseout(function(){
	$('.border4').css("border", "2px solid transparent");
	});
	
$('.icon5').hover(function(){
	$('.border5').css("border", "2px solid #2a5b83");
	});

$('.icon5').mouseout(function(){
	$('.border5').css("border", "2px solid transparent");
	});

$('.icon6').hover(function(){
	$('.border6').css("border", "2px solid #1cb1e6");
	});

$('.icon6').mouseout(function(){
	$('.border6').css("border", "2px solid transparent");
	});
}


$('.icon-click').bind({
click:function (event){
	$('.icon').hover(function(){
	$('.border').css("border", "2px solid transparent");
	});
}
});

$('.trigger').on('click',function(){
	  $( ".animation1" ).removeClass('animate');
	setTimeout(function() {
    	$('.animation1').addClass('animate');
	},500);
	  
});

$('.back-icon').bind("click",mainclick);
$('.back-icon').bind("click",hoverfunction2);

function mainclick(){
	$('.extra-text').css("visibility", "visible");
	$('.main-text').text("Vim erat oratio signiferumque no, in nisl omnesque dissentiet eos. Mutat suscipit sapientem has ut. Eu magna viris noluisse his, ad quo quis error fierent. Partem impetus alterum usu in, mei no sale persequeris. Vis ponderum sapientem ex. Odio vidisse volumus ei per, nusquam atomorum praesent ius ea, ad homero laoreet probatus vix.");
	$('.Entire-frame').css("background-color","#eee");
	$('.color').css('color','#65667B');
	$('.nav-middle-container ul li a').css('border', '2px solid #65667B');
	$('.selected').css('background-color', '#65667B');
	$('.selected span').css('color', '#eee');
	$('object').css('border', '1px solid #65667B');
	$('.fa-arrow-left').css('visibility', 'hidden');
	$('.border1, .border2, .border3, .border4, .border5, .border6').removeClass("border-background");
	$('.icon').css("color", "#65667B");
	$('h1').text("Alison");
	$('h2').text("Huang");
	$('object span').text("Place Object 1");
	$('html').css("background-color","#eee"),3000;
}

$('.back-icon').bind("click",hoverfunction);

$('.icon-click').bind("click", clickfunction);
function clickfunction(){
	$('.color').css('color','#fff');
	$('.color2').css('color','#fff');
	$('.nav-middle-container ul li a').css('border', '2px solid #fff');
	$('.selected').css('background-color', '#fff');
	$('object').css('border', '1px solid #fff');
	$('.fa-arrow-left').css('visibility', 'visible');
	$('h1').text("My");
	
}
$('.icon-click1').bind("click", clickfunction1);
function clickfunction1(){
	$('h2').text("Dribbble");
	$('.Entire-frame').css("background-color","#F14088");
	$('.extra-text').css("visibility", "hidden");
	$('.main-text').text("Vim erat oratio signiferumque no, in nisl omnesque dissentiet eos. Mutat suscipit sapientem has ut. Eu magna viris noluisse his, ad quo quis error fierent. Partem impetus alterum usu in, mei no sale persequeris. Vis ponderum sapientem ex. Odio vidisse volumus ei per, nusquam atomorum praesent ius ea, ad homero laoreet probatus vix. Et mel indoctum qualisque");
	$('object span').text("Place Object 2");
	$('html').css("background-color","#F14088");
	$('.icons ul li a').removeClass("border-background");
	$('.border1').addClass("border-background");
	$('.border-background').css("border", "2px solid #fff");
	$('.icon1').css("color", "#F14088");
	$('.selected span').css("color", "#F14088");
	$('.icon1').mouseout(function(){
		$(this).css('color', '#F14088');
	});
	$('.icon1').hover(function(){
		$(this).css('color', '#F14088')
	});
	$('.icon6, .icon2, .icon3, .icon4, .icon5').hover(function(){
		$(this).css('color', '#fff');
	});
	

	
}
$('.icon-click2').bind("click", clickfunction2);
function clickfunction2(){
	$('h2').text("Behance");
	$('.Entire-frame').css("background-color","#00739B");
	$('.extra-text').css("visibility", "hidden");
	$('.main-text').text("Vim erat oratio signiferumque no, in nisl omnesque dissentiet eos. Mutat suscipit sapientem has ut. Eu magna viris noluisse his, ad quo quis error fierent. Partem impetus alterum usu in, mei no sale persequeris. Vis ponderum sapientem ex. Odio vidisse volumus ei per, nusquam atomorum praesent ius ea, ad homero laoreet probatus vix.");
	$('object span').text("Place Object 3");
	$('html').css("background-color","#00739B");
	$('.icons ul li a').removeClass("border-background");
	$('.border2').addClass("border-background");
	$('.border-background').css("border", "2px solid #fff");
	$('.icon2').css("color", "#00739B");
	$('.selected span').css("color", "#00739B");
	$('.icon2').mouseout(function(){
		$(this).css('color', '#00739B');
	});
	$('.icon2').hover(function(){
		$(this).css('color', '#00739B');
	});
	$('.icon1, .icon6, .icon3, .icon4, .icon5').hover(function(){
		$(this).css('color', '#fff');
	});
	
	
}
$('.icon-click3').bind("click", clickfunction3);
function clickfunction3(){
	$('h2').text("Linkedin");
	$('.Entire-frame').css("background-color","#187FB8");
	$('.extra-text').css("visibility", "hidden");
	$('.main-text').text("Vim erat oratio signiferumque no, in nisl omnesque dissentiet eos. Mutat suscipit sapientem has ut. Eu magna viris noluisse his, ad quo quis error fierent. Partem impetus alterum usu in, mei no sale persequeris. Vis ponderum sapientem ex. Odio vidisse volumus ei per, nusquam atomorum praesent ius ea, ad homero laoreet probatus vix.");
	$('object span').text("Place Object 4");
	$('html').css("background-color","#187FB8");
	$('.icons ul li a').removeClass("border-background");
	$('.border3').addClass("border-background");
	$('.border-background').css("border", "2px solid #fff");
	$('.icon3').css("color", "#187FB8");
	$('.selected span').css("color", "#187FB8");
	$('.icon3').mouseout(function(){
		$(this).css('color', '#187FB8');
	});
	$('.icon3').hover(function(){
		$(this).css('color', '#187FB8');
	});
	$('.icon1, .icon2, .icon6, .icon4, .icon5').hover(function(){
		$(this).css('color', '#fff');
	});
	
	
}
$('.icon-click4').bind("click", clickfunction4);
function clickfunction4(){
	$('h2').text("Twitter");
	$('.Entire-frame').css("background-color","#24A9E6");
	$('.extra-text').css("visibility", "hidden");
	$('.main-text').text("Vim erat oratio signiferumque no, in nisl omnesque dissentiet eos. Mutat suscipit sapientem has ut. Eu magna viris noluisse his, ad quo quis error fierent. Partem impetus alterum usu in, mei no sale persequeris. Vis ponderum sapientem ex. Odio vidisse volumus ei per, nusquam atomorum praesent ius ea, ad homero laoreet probatus vix. ad quo quis error fierent.");
	$('object span').text("Place Object 5");
	$('html').css("background-color","#24A9E6");
	$('.icons ul li a').removeClass("border-background");
	$('.border4').addClass("border-background");
	$('.border-background').css("border", "2px solid #fff");
	$('.icon4').css("color", "#24A9E6");
	$('.selected span').css("color", "#24A9E6");
	$('.icon4').mouseout(function(){
		$(this).css('color', '#24A9E6');
	});
	$('.icon4').hover(function(){
		$(this).css('color', '#24A9E6');
	});
	$('.icon1, .icon2, .icon3, .icon6, .icon5').hover(function(){
		$(this).css('color', '#fff');
	});
	
	
}
$('.icon-click5').bind("click", clickfunction5);
function clickfunction5(){
	$('h2').text("Instagram");
	$('.Entire-frame').css("background-color","#2a5b83");
	$('.extra-text').css("visibility", "hidden");
	$('.main-text').text("Vim erat oratio signiferumque no, in nisl omnesque dissentiet eos. Mutat suscipit sapientem has ut. Eu magna viris noluisse his, ad quo quis error fierent. Partem impetus alterum usu in, mei no sale persequeris. Vis ponderum sapientem ex. Odio vidisse volumus ei per, nusquam atomorum praesent ius ea, ad homero laoreet probatus vix. ad quo quis error fierent.");
	$('object span').text("Place Object 6");
	$('html').css("background-color","#2a5b83");
	$('.icons ul li a').removeClass("border-background");
	$('.border5').addClass("border-background");
	$('.border-background').css("border", "2px solid #fff");
	$('.icon5').css("color", "#2a5b83");
	$('.selected span').css("color", "#2a5b83");
	$('.icon5').mouseout(function(){
		$(this).css('color', '#2a5b83');
	});
	$('.icon5').hover(function(){
		$(this).css('color', '#2a5b83');
	});
	$('.icon1, .icon2, .icon3, .icon4, .icon6').hover(function(){
		$(this).css('color', '#fff');
	});
	
}
$('.icon-click6').bind("click", clickfunction6);
function clickfunction6(){
	$('h2').text("Vimeo");
	$('.Entire-frame').css("background-color","#1cb1e6");
	$('.extra-text').css("visibility", "hidden");
	$('.main-text').text("Vim erat oratio signiferumque no, in nisl omnesque dissentiet eos. Mutat suscipit sapientem has ut. Eu magna viris noluisse his, ad quo quis error fierent. Partem impetus alterum usu in, mei no sale persequeris. Vis ponderum sapientem ex. Odio vidisse volumus ei per, nusquam atomorum praesent ius ea, ad homero laoreet probatus vix. ad quo quis error fierent.");
	$('object span').text("Place Object 7");
	$('html').css("background-color","#1cb1e6");
	$('.icons ul li a').removeClass("border-background");
	$('.border6').addClass("border-background");
	$('.border-background').css("border", "2px solid #fff");
	$('.icon6').css("color", "#1cb1e6");
	$('.selected span').css("color", "#1cb1e6");
	$('.icon6').mouseout(function(){
		$(this).css('color', '#1cb1e6');
	});
	$('.icon6').hover(function(){
		$(this).css('color', '#1cb1e6');
	});
	$('.icon1, .icon2, .icon3, .icon4, .icon5').hover(function(){
		$(this).css('color', '#fff');
	});
	
}

