(function ($) {
	jQuery(document).ready(function(){
        /*
        Sticky Menu Js
        ============================*/
        $(function () {
            $(window).on("scroll", function () {
                var scrolling = $(window).scrollTop();
                if (scrolling > 0) {
                    $("header ").addClass("sticky_menu");
                } else if (scrolling == 0) {
                    $("header ").removeClass("sticky_menu");
                }
            });
        });

        /*
        Dentist Slider JS
        ============================*/
        // const swiper = new Swiper('.dentist-slider-wrapper', {
        //     loop: true,
        //     slidesPerView: 'auto',
        //     draggable: yes,
        //     arrows: true,
        //     autoplay: {
        //         delay: 4000,
        //     },
        //     navigation: {
        //          nextEl: ".next-btn",
        //          prevEl: ".prev-btn",
        //     },
        // });
        // const listSlider = new Swiper('.listing-card-slider', {
        //     loop: true,
        //     slidesPerView: 'auto',
        //     autoplay: {
        //         delay: 4000,
        //     },
        //     navigation: {
        //         nextEl: ".swiper-button-next",
        //         prevEl: ".swiper-button-prev",
        //       },
        // });

        // Brand Marquee Wrapper
        var swiper2 = new Swiper('.listing-slider', {
        loop: true,
        speed: 2000,
        slidesPerView: 4,
        autoplay: {
            delay: 2000,
        },
        breakpoints: {
            1100: {
                slidesPerView: 4,
            },
            767: {
                slidesPerView: 3,
            },
            577: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        }
    })
         $(".listing-card-slider").swiper({
            infinite: true,
            slidesToShow: 2,
            autoplay:true,
            mobileFirst:true,
            dots: false,
            arrows: true,
            variableWidth: true,
            prevArrow:"<button type='button' class='dentist-slider-btn prev-btn'><i class='icon-arrow-left'></i></button>",
            nextArrow:"<button type='button' class='dentist-slider-btn next-btn'><i class='icon-arrow-right'></i></button>",
        
            responsive: [ {
                breakpoint: 1045,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        
        });

        // $(".dentist-slider-wrapper").slick({
        //     infinite: true,
        //     slidesToShow: 2,
        //     autoplay:true,
        //     mobileFirst:true,
        //     dots: false,
        //     arrows: true,
        //     variableWidth: true,
        //     prevArrow:"<button type='button' class='dentist-slider-btn prev-btn'><i class='icon-arrow-left'></i></button>",
        //     nextArrow:"<button type='button' class='dentist-slider-btn next-btn'><i class='icon-arrow-right'></i></button>",
        //
        //     responsive: [ {
        //         breakpoint: 1045,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //         }
        //     },
        //         {
        //             breakpoint: 1024,
        //             settings: {
        //                 slidesToShow: 2,
        //                 slidesToScroll: 1,
        //             }
        //         },
        //         {
        //             breakpoint: 768,
        //             settings: {
        //                 slidesToShow: 2,
        //                 slidesToScroll: 1
        //             }
        //         },
        //         {
        //             breakpoint: 640,
        //             settings: {
        //                 slidesToShow: 2,
        //                 slidesToScroll: 1
        //             }
        //         },
        //         {
        //             breakpoint: 0,
        //             settings: {
        //                 slidesToShow: 1,
        //                 slidesToScroll: 1
        //             }
        //         }
        //     ]
        //
        // });

        /*
        Dentist Slider JS
        ============================*/
        const partnerSwiper = new Swiper('.partner-wrapper', {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 32,
            autoplay: {
                delay: 4000,
            },
            // Responsive breakpoints
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }
        });

        // $(".partner-wrapper").slick({
        //     infinite: true,
        //     slidesToShow: 4,
        //     autoplay:true,
        //     mobileFirst:true,
        //     dots: false,
        //     arrows: false,
        //     adaptiveHeight: true,
        //     prevArrow:"<button type='button' class='dentist-slider-btn prev-btn'><i class='icon-arrow-left'></i></button>",
        //     nextArrow:"<button type='button' class='dentist-slider-btn next-btn'><i class='icon-arrow-right'></i></button>",
        //
        //     responsive: [ {
        //         breakpoint: 1045,
        //         settings: {
        //             slidesToShow: 4,
        //             slidesToScroll: 1,
        //         }
        //     },
        //         {
        //             breakpoint: 1024,
        //             settings: {
        //                 slidesToShow: 4,
        //                 slidesToScroll: 1,
        //             }
        //         },
        //         {
        //             breakpoint: 768,
        //             settings: {
        //                 slidesToShow: 4,
        //                 slidesToScroll: 1
        //             }
        //         },
        //         {
        //             breakpoint: 640,
        //             settings: {
        //                 slidesToShow: 3,
        //                 slidesToScroll: 1
        //             }
        //         },
        //         {
        //             breakpoint: 0,
        //             settings: {
        //                 slidesToShow: 2,
        //                 slidesToScroll: 1
        //             }
        //         }
        //     ]
        //
        // });

        /*
        Login Page Slider JS
        ============================*/
        const loginSwiper = new Swiper('.login-slider-wrapper', {
            loop: true,
            slidesPerView: 1,
            autoplay: {
                delay: 4000,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });


        // $(".login-slider-wrapper").slick({
        //     infinite: true,
        //     slidesToShow: 1,
        //     autoplay:true,
        //     mobileFirst:true,
        //     dots: true,
        //     arrows: false,
        // });



        /*
        Scroll To Top Js
        ============================*/
        $(function () {
            $("#scrollTop").hide();
            var position = $(window).scrollTop();
            var timer;
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                clearTimeout(timer);
                if (scrollTop > 100) {
                    if (scrollTop > position) {
                        $('#scrollTop').fadeOut();
                    } else {
                        $('#scrollTop').fadeIn();
                        timer = window.setTimeout(function() {
                            $("#scrollTop").fadeOut();
                        }, 3000);
                    }
                    position = scrollTop;
                } else {
                    $('#scrollTop').fadeOut();
                }
            });
            $(".scrollup").click(function() {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        });



        /*
        Jquery Background Image
        ============================*/
        $('[data-bg]').each(function () {
                    var beforeImage = $(this).data('bg');
                    $(this).css({
                        'background-image': 'url("' + beforeImage + '")'
                    });
                });	
        });


        /*
        Jquery Accordion
        ============================*/
        $(function() {
            $('.bookedFusionSingleAc').click(function(){
                $(this).toggleClass(' open ');
                $(this).siblings().removeClass(' open ');
                $('.accordion-body').stop().slideUp();
                $('.open .accordion-body').stop().slideDown();
                return false;
            });
        });

        /*
        Jquery Tab
        ============================*/
        $(function(){
            $('.tabs').tabslet({
                animation: true,
                autorotate: true,
                pauseonhover:true,
                delay: 6000
            });
        });



    // if ($('.tabmenu').hasClass('.activeTab')){
    //     var i = 0;
    //     if (i == 0) {
    //         i = 1;
    //         var elem = document.getElementById("myBar");
    //         var width = 1;
    //         var id = setInterval(frame, 10);
    //         function frame() {
    //             if (width >= 100) {
    //                 clearInterval(id);
    //                 i = 0;
    //             } else {
    //                 width++;
    //                 elem.style.width = width + "%";
    //             }
    //         }
    //     }
    // }
    // else {
    //     clearInterval(id);
    // }




})(jQuery);
	
	