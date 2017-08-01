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

        $('.product-carousel').owlCarousel({
                items:4,
                margin:30,
                loop:true,
                nav:true,
                navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            });
    	$('.homepage-slides').owlCarousel({
				items:1,
				margin:30,
                autoplay:true,
			    loop:true,
			    nav:true,
			    navText:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
			});


     



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	
