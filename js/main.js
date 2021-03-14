(function ($) {
    "use strict";
    jQuery(document).ready(function($){

        $('.product-list').masonry({

        });

        $('#header-carousel').owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            smartSpeed: 500,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-right'></i>", "<i class='fa fa-long-arrow-left'></i>"],
        });

        $('#promotion-carousel').owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            smartSpeed: 600,
            nav: false,
        });

        $(".menu-trigger").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").addClass("active");
            return false;
        });

        $(".menu-close-btn, .off-canvas-overlay").on("click", function() {
            $(".off-canvas-menu, .off-canvas-overlay").removeClass("active");
        });

        $(".search-btn").on("click", function() {
            $(".search-area, .off-canvas-overlay").addClass("popup-search-bar");
        });

        $(".off-canvas-overlay").on("click", function() {
            $(".search-area, .off-canvas-overlay").removeClass("popup-search-bar");
        });


    });

    jQuery(window).load(function($){
        
    });
}(jQuery));


