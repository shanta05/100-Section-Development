(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


          

         $('body').perfectScrollbar();
         $('.scrolled-item').perfectScrollbar({
            theme:'yellow'
         });



          $(".portfolio-filter li").on('click',function(){


            var filterdata = $(this).attr("data-filter");


                $(".portfilo-list").isotope({

                    filter: filterdata,
                    
                 });

                $('.portfolio-filter li').removeClass('active');

                $(this).addClass('active');
          });


          $(".portfilo-list").isotope({

              itemSelector: '.single-portfolio-item',
              percentPosition: true,
              masonry: {
                 horizontalOrder: true,
                columnWidth: '.single-portfolio-item'
              }
          });





            var homepage = $(".homepage-slides-12");
               homepage.owlCarousel({
                    items:1,
                    autoplay:false,
                    loop:true,
                    dots:true,
                    nav:true,
                    navText:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
               });

               homepage.on('translate.owl.carousel', function(event) {

                  
                    $(".welcome-text h1").removeClass("animated jackInTheBox")
            });
             homepage.on('translated.owl.carousel', function(event) {

                   
                    $(".welcome-text h1").addClass("animated jackInTheBox")
            });

                 $('.welcome-area-bg-video').YTPlayer({
                        fitToBackground: true,
                        videoId: 'LSmgKRx5pBo'
                   });





        $('.team-carousel').owlCarousel({
                items:3,
                margin:30,
                loop:true,
                nav:true,
                navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            });

        $('.portfolio-item-22').owlCarousel({
                items:5,
                loop:true,
                dots:true,
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
            	
         

         $(".video-play").magnificPopup({
                type:'video'

            });



         $(".video-play-32").modalVideo();


        



       

        
     



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	