jQuery(document).ready(function($) {


    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Header fixed on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    // Real view height for mobile devices
    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#intro').css({ height: $(window).height() });
    }

    // Initiate the wowjs animation library
    new WOW().init();

    // Initialize Venobox
    $('.venobox').venobox({
        bgcolor: '',
        overlayColor: 'rgba(6, 12, 34, 0.85)',
        closeBackground: '',
        closeColor: '#fff'
    });

    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });

    // Mobile Navigation
    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    $(document).ready(function() {
        $(".owl-carousel").owlCarousel({
            items: 3,
            autoplay: true,
            margin: 30,
            loop: true,
            dots: true
                //      nav:true,
                //      navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>" ]
        });
    });

    // Smooth scroll for the menu and links with .scrollto classes
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                /* var top_space = 0;

                 if ($('#header').length) {
                     top_space = $('#header').outerHeight();

                     if (!$('#header').hasClass('header-fixed')) {
                         top_space = top_space - 20;

                     }
                 }*/

                $('html, body').animate({

                    scrollTop: target.offset().top
                }, 1500);


                /* scrollTop: target.offset().top - top_space
                }, 1000, 'easeInOutExpo'); // 1500 --- 300*/

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }

    });

    // Set date
    var countdownDate = new Date(
        "April 19, 2021 00:00:00"
    ).getTime(); /* hrs: min: sec */

    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countdownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element
        document.querySelector("#d").innerText = addZero(days);
        document.querySelector("#h").innerText = addZero(hours);
        document.querySelector("#m").innerText = addZero(minutes);
        document.querySelector("#s").innerText = addZero(seconds);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-box").innerHTML =
                '<span class="cdi cdd">The most awaited event is here!</span>';
            document.querySelector(".title").innerText = "";
        }
    }, 1000);

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function isMobile() {
        if (window.innerWidth < 775) {
            return true;
        } else {
            return false;
        }
    }

       // custom code
    var $cell = $('.card2');

    //open and close card when clicked on card
    $cell.find('.js-expander').click(function() {

        var $thisCell = $(this).closest('.card2');

        if ($thisCell.hasClass('is-collapsed')) {
            $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
            $thisCell.removeClass('is-collapsed').addClass('is-expanded');

            if ($cell.not($thisCell).hasClass('is-inactive')) {
                //do nothing
            } else {
                $cell.not($thisCell).addClass('is-inactive');
            }

        } else {
            $thisCell.removeClass('is-expanded').addClass('is-collapsed');
            $cell.not($thisCell).removeClass('is-inactive');
        }
    });

    //close card when click on cross
    $cell.find('.js-collapser').click(function() {

        var $thisCell = $(this).closest('.card2');

        $thisCell.removeClass('is-expanded').addClass('is-collapsed');
        $cell.not($thisCell).removeClass('is-inactive');

    });

});