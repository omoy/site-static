var dp = jQuery;
dp.noConflict();
dp(document).ready(function () {

//Unslider Plugin
    if (dp.fn.fullWidth) {
        dp('.full-width').fullWidth({
            maxFont: 16, // maximum font size, px
            minFont: 14 // minimum font size, px
        });
    }
    //SLIDER CODE SLIDER
    if (dp.fn.codeslider) {
        dp('.cs').codeslider();
    }
    //BACKGROUND STRETch
    if (dp.fn.anystretch) {
        dp('.stretch').anystretch();
    }
    if (dp.fn.foggy) {
        dp('.blurred').foggy({
            blurRadius: 1, // In pixels.
            opacity: 0.8, // Falls back to a filter for IE.
            cssFilterSupport: true  // Use "-webkit-filter" where available.
        });
    }
    //LIGHT BOX
    if (dp.fn.magnificPopup) {
        dp('.videolightbox').magnificPopup({
            type: 'iframe'
        });
        dp('.popup').magnificPopup({
            type: 'image'
        });
    }
    //BACK TO TOP
    //SMOOTH SCROLL 
    dp('.sscroll').bind('click.smoothscroll', function (e) {
        e.preventDefault();
        dp('html,body').animate({
            scrollTop: dp(this.hash).offset().top
        }, 1200);
    });
    //MASONRY
    if (dp.fn.masonry) {
        dp('.masonry-wrapper').masonry({
            itemSelector: '.masonry'
        });
    }
    if (dp.fn.multipleFilterMasonry) {
        dp('.masonry-wrapper').multipleFilterMasonry({
            itemSelector: '.masonry',
            filtersGroupSelector: '.filters'
        });
    }
    //COUNT DOWN COMING SOON
    if (dp.fn.countdown) {
        var endDate = "December 31, 2015  15:03:25"; // <-- Change to your date launch.
        dp('.countdown.styled').countdown({
            date: endDate,
            render: function (data) {
                dp(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
            }
        });
    }

    //HTML 5 Audio Player
    if (dp.fn.mediaelementplayer) {
        dp('audio , video').mediaelementplayer({
            loop: false,
            enableAutosize: false,
            features: ['playpause', 'progress', 'current', 'volume'],
            audioHeight: 40,
            alwaysShowHours: false

        });
    }

    //FITVIDS
    if (dp.fn.fitVids) {
        dp(".responsive-video").fitVids();
    }

    if (dp.carousel) {
        dp('.carousel').carousel();
    }

    //TOOLTIP
    if (dp.fn.tooltip) {
        dp("[data-toggle=tooltip]").tooltip();
    }
    if (dp.fn.owlCarousel) {
        dp(".owl-carousel").owlCarousel({
            pagination: false,
            items: 4,
            loop: true,
            navigation: false,
            responsive: {
                0: {
                    items: 2
                },
                479: {
                    items: 3
                },
                768: {
                    items: 4,
                    nav: false
                }
            }
        });
    }
    //TYPED 
    if (dp.fn.typed) {
        var $target = dp(".text-animation-content");
        var $text = $target.data('text');
        $target.typed({
            strings: $text,
            typeSpeed: 100,
            contentType: 'html',
            loop: true
        });
    }

    //COUNT UP ON SCREEN
    if (dp.fn.waypoint) {
        if (dp.fn.countTo) {
            dp('.countTo').waypoint(function (direction) {
                dp('.countTo').countTo();
                dp('.countTo').removeClass('countTo');
                dp(this).removeClass('timer');
            }, {
                offset: "80%"
            });
        }
    }

    dp('.ch-color li a').click(function (event) {
        val = dp(this).attr('data-color');
        dp("#clscheme").attr("href", "css/scheme/" + val + ".css");
    });
    dp('.cos-trigger').click(function (event) {
        value = dp('.cos-wrapper').css('left') === '-180px' ? 0 : '-180px';
        dp('.cos-wrapper').animate({
            left: value,
            duration: 750
        });
    });
    dp('.ch-color li').click(function (event) {
        dp('.ch-color li').removeClass('aktif');
        dp(this).addClass('aktif');
    });
    
});

//WOW Slider
if (typeof WOW == 'function') {
    new WOW().init();
}
