/**
* ---------------------------------------------------------------------------
Template Name: Finance business template 
URL: http://finance.imranhoshain.com
Author: spytoever
Version: 1.0
* --------------------------------------------------------------------------- 
*/
(function ($) {
    "use strict";

    $(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        /*---------------------------------------------------
                    Camera slider
        ---------------------------------------------------*/

        if ($("#camera_wrap_4").length) {
            $("#camera_wrap_4").camera({
                height: '590px',
                pagination: false,
                thumbnails: false,
                imagePath: 'img/',
                playPause: false,
                loader: 'none',
                time: 3000,
                transPeriod: 1500,
            });
        }

        /*---------------------------------------------------
                    Owlcarousel slider
        ---------------------------------------------------*/

        $(".choose-slider").owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            smartSpeed: 1000,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        });

        $(".testi-slider").owlCarousel({
            items: 3,
            autoplay: true,
            margin: 15,
            loop: true,
            smartSpeed: 3000,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });

        /*---------------------------------------------------
                    Smooth menu
        ---------------------------------------------------*/

        $('li.smooth-menu a').on('click', function () {
            if ($(this).attr('tag'))
            {
                var headerH = "70";
                $('html, body').animate({
                    scrollTop: $($(this).attr('tag')).offset().top - headerH + 'px'
                }, 1208, 'easeInOutExpo');
            }
        });

        /*---------------------------------------------------
                    Counter
        ---------------------------------------------------*/

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        /*---------------------------------------------------
                    Isotop menu
        ---------------------------------------------------*/

        var $portfolio = $('.portfolios');

        $portfolio.isotope({
            itemSelector: '.col-md-4',
            layoutMode: 'masonry',
            filter: '*',
            percentPosition: true,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });

        $('.portfolio-menu li').on('click', function () {
            $('.portfolio-menu li').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector,
            });
        });

        /*---------------------------------------------------
                    Lightbox
        ---------------------------------------------------*/

        $(".gallery-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        /*---------------------------------------------------
                    Sticky menu
        ---------------------------------------------------*/

        $(".header-bottom-area").sticky({
            topSpacing: 0
        });

        /*---------------------------------------------------
                    Scrool Top
        ---------------------------------------------------*/

        $('#scrollTop').on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        /*---------------------------------------------------
                    Google Map
        ---------------------------------------------------*/
        /* var myCenter = new google.maps.LatLng(40.7143528, -74.0059731);

        function initialize() {
            var mapProp = {
                center: myCenter,
                scrollwheel: false,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
            var marker = new google.maps.Marker({
                position: myCenter,
                animation: google.maps.Animation.BOUNCE,
                icon: '',
                map: map,
            });
            var styles = [{
                stylers: [{
                        hue: "#96C346"
                    },
                    {
                        saturation: -100
                    }
                ]
            }, ];
            map.setOptions({
                styles: styles
            });
            marker.setMap(map);
        }
        google.maps.event.addDomListener(window, 'load', initialize); */

    });


    $(window).load(function () {

    });

}(jQuery));