$(document).ready(function(){
    // slider active
    $('.slider_active').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Project active
    $('.project_active').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    });

    // blog active
    $('.blog_active').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // testimonial active
    $('.testimonial_active').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // brand active
    $('.brand_active').owlCarousel({
        loop:true,
        nav:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:6
            },
            1000:{
                items:6
            }
        }
    });

    // video popup
    $('.video_popup').magnificPopup({
        type: 'iframe'
        // other options
      });

})