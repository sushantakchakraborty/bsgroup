$(document).ready(function () {
    // Owl Carousel Initializations
    if ($('.hero-slider').length) {
        $('.hero-slider').owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            navText: ['PREV', 'NEXT'],
            smartSpeed: 1000,
            autoplay: true,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    nav: false,
                },
                768: {
                    nav: true,
                }
            }
        });
    }

    if ($('#projects-slider').length) {
        $('#projects-slider').owlCarousel({
            loop: true,
            nav: false,
            items: 2,
            dots: true,
            smartSpeed: 600,
            center: true,
            autoplay: true,
            autoplayTimeout: 4000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2,
                    margin: 8,
                }
            }
        });
    }

    if ($('.reviews-slider').length) {
        $('.reviews-slider').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            smartSpeed: 900,
            items: 1,
            margin: 24,
            autoplay: true,
            autoplayTimeout: 4000,
        });
    }

    // Scroll To Top Button logic
    let topBtn = document.getElementById("topBtn");
    if (topBtn) {
        window.onscroll = function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        };

        topBtn.onclick = function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
    }
});
