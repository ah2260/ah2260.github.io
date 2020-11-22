
function getdate(){
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
             if(s<10){
                 s = "0"+s;
             }

            $("h1").text(h+" : "+m+" : "+s);
             setTimeout(function(){getdate()}, 500);
            };


(function($){
    
 
 
 $.fn.time = function(options) {
            
            var defaults = {};
            var options = $.extend(defaults, options);
            
            
           
            return this.each(function() {
            var obj = $(this);    
            obj.html('<div id="secondi"></div><div id="minuti"></div><div id="ore"></div>');
            var $secondi = $('#secondi');
            var $ora = $('#ore');
            var $minuti = $('#minuti');
            
            
            /* function ora esatta per ora esatta*/
            function oraesatta (a,b,c){
            var dataintera = new Date();
            var HH = dataintera.getHours();
            var MM = dataintera.getMinutes();
            var SS = dataintera.getSeconds();
            var degsec = SS*6;
            var degora = (HH*30)+((1/2)*MM);
            var degmin = MM*6;
             
            a.css({'transform':'rotate('+degsec+'deg)',
                   '-o-transform':'rotate('+degsec+'deg)',
                   '-ms-transform':'rotate('+degsec+'deg)',
                   '-moz-transform':'rotate('+degsec+'deg)',
                   '-webkit-transform': 'rotate('+degsec+'deg)'}); 
            
            b.css({'transform':'rotate('+degora+'deg)',
                       '-o-transform':'rotate('+degora+'deg)',
                       '-ms-transform':'rotate('+degora+'deg)',
                       '-moz-transform':'rotate('+degora+'deg)',
                       '-webkit-transform': 'rotate('+degora+'deg)'});
            
           c.css({'transform':'rotate('+degmin+'deg)',
                      '-o-transform':'rotate('+degmin+'deg)',
                      '-ms-transform':'rotate('+degmin+'deg)',
                      '-moz-transform':'rotate('+degmin+'deg)',
                      '-webkit-transform': 'rotate('+degmin+'deg)'});
             
                     };
             /* function oraesatta per ora esatta*/
           
      oraesatta($secondi , $ora , $minuti);
     
      setInterval(function(){oraesatta($secondi,$ora,$minuti)},1000);     
               
    });   
         
           
         
 };  
})(jQuery);

 $(document).ready(function(){
         getdate();
	 	$('#clock').time();
	 
	 $( "button" ).click(function() {
		 $( ".toggle" ).toggle();
		  $(this).toggleText('Before', 'After');;
	 });
	 
    });