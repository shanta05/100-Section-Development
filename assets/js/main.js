(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

       
        	$('.team-carousel').owlCarousel({
				items:3,
				margin:30,
			    loop:true,
			    nav:true,
			    navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			});

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	
