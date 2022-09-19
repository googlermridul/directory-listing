// pre loader
// const preloader = document.getElementById("preloader");
// window.addEventListener("load", () => {
//    setTimeout(() => {
//       preloader.style.cssText = `opacity: 0; visibility: hidden;`;
//    }, 1000);
// });

// add bg to nav
window.addEventListener("scroll", function () {
    let scrollpos = window.scrollY;
    const header = document.querySelector("nav");
    const headerHeight = header.offsetHeight;

    if (scrollpos >= headerHeight) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

// active nav item
const shortNavItem = document.getElementsByClassName("short-nav-item");
for (const element of shortNavItem) {
    element.addEventListener("click", () => {
        for (const ele of shortNavItem) {
            ele.classList.remove("active");
        }
        element.classList.add("active");
    });
}

const listingMapBox = document.getElementsByClassName("listing-map-box");
for (const element of listingMapBox) {
    element.addEventListener("click", () => {
        for (const ele of listingMapBox) {
            ele.classList.remove("active");
        }
        element.classList.add("active");
    });
}

$(document).ready(function () {
    $(".js-example-basic-single").select2();

    // owl carousel
    $(".testimonials").owlCarousel({
        loop: true, margin: 25, nav: false, dots: true, autoplay: true, autoplayTimeout: 3000, responsive: {
            0: {
                items: 1,
            }, 768: {
                items: 2,
            }, 992: {
                items: 3,
            },
        },
    });
    $(".products-slider").owlCarousel({
        loop: true, margin: 15, nav: true, dots: false, autoplay: true, autoplayTimeout: 3000, responsive: {
            0: {
                items: 1,
            }, 768: {
                items: 2,
            }, 992: {
                items: 3,
            },
        },
    });

    // RANGE SLIDER
    $(".js-range-slider").ionRangeSlider({
        type: "double", min: 0, max: 1000, from: 200, to: 500, grid: true,
    });

    $("#shareBlock").socialSharingPlugin({
        urlShare: window.location.href,
        description: $("meta[name=description]").attr("content"),
        title: $("title").text(),
    });

    // SCROLL TOP
    $(".scroll-up").fadeOut();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll-up").fadeIn();
        } else {
            $(".scroll-up").fadeOut();
        }
    });

    // leaflet js
    const leaflet = L.map("map");
    const map = leaflet.setView([48.8566, 2.3522], 13);
    L.tileLayer("https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=sxhLg9zZgwiGPxqkM7SM").addTo(map);

    async function setMapMarker(selector) {
        let lat = $(selector).data('lat');
        let long = $(selector).data('long');
        let title = $(selector).data('title');
        await leaflet.setView([lat, long], 13);
        await L.marker([lat, long]).addTo(map).bindPopup(title).openPopup();
    }

    setMapMarker($('.listing-map-box:first'))

    $(document).on('click', '.listing-map-box', function () {
        setMapMarker(this);
    });
});


