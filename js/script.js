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
   $(".xzoom").xzoom();

   $(".js-example-basic-single").select2();

   // owl carousel
   $(".testimonials").owlCarousel({
      loop: true,
      margin: 25,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
         0: {
            items: 1,
         },
         768: {
            items: 2,
         },
         992: {
            items: 3,
         },
      },
   });
   $(".products-slider").owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
         0: {
            items: 1,
         },
         768: {
            items: 2,
         },
         992: {
            items: 3,
         },
      },
   });

   $(".categories-alphabet").owlCarousel({
      loop: false,
      margin: 0,
      nav: true,
      dots: false,
      autoplay: false,
      autoplayTimeout: 3000,
      responsive: {
         0: {
            items: 5,
         },
         768: {
            items: 10,
         },
         992: {
            items: 15,
         },
         1200: {
            items: 20,
         },
      },
   });

   // RANGE SLIDER
   $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 1000,
      from: 200,
      to: 500,
      grid: true,
   });

   $("#shareBlock").socialSharingPlugin({
      urlShare: window.location.href,
      description: $("meta[name=description]").attr("content"),
      title: $("title").text(),
   });

   // leaflet js
   const leaflet = L.map("map");
   const map = leaflet.setView([48.8566, 2.3522], 13);
   L.tileLayer(
      "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=sxhLg9zZgwiGPxqkM7SM"
   ).addTo(map);

   async function setMapMarker(selector) {
      let lat = $(selector).data("lat");
      let long = $(selector).data("long");
      let title = $(selector).data("title");
      await leaflet.setView([lat, long], 13);
      await L.marker([lat, long]).addTo(map).bindPopup(title).openPopup();
   }

   setMapMarker($(".listing-map-box:first"));

   $(document).on("click", ".listing-map-box", function () {
      setMapMarker(this);
   });
});

// horizontal scroll
const element = document.querySelector("#categories");
element.addEventListener("wheel", (event) => {
   event.preventDefault();
   element.scrollBy({
      left: event.deltaY < 0 ? -30 : 30,
   });
});

(function ($) {
   $(document).ready(function () {
      $(".xzoom, .xzoom-gallery").xzoom({
         zoomWidth: 400,
         title: true,
         tint: "#333",
         Xoffset: 15,
      });
      $(".xzoom2, .xzoom-gallery2").xzoom({
         position: "#xzoom2-id",
         tint: "#ffa200",
      });
      $(".xzoom3, .xzoom-gallery3").xzoom({
         position: "lens",
         lensShape: "circle",
         sourceClass: "xzoom-hidden",
      });
      $(".xzoom4, .xzoom-gallery4").xzoom({ tint: "#006699", Xoffset: 15 });
      $(".xzoom5, .xzoom-gallery5").xzoom({ tint: "#006699", Xoffset: 15 });

      //Integration with hammer.js
      var isTouchSupported = "ontouchstart" in window;

      if (isTouchSupported) {
         //If touch device
         $(".xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5").each(function () {
            var xzoom = $(this).data("xzoom");
            xzoom.eventunbind();
         });

         $(".xzoom, .xzoom2, .xzoom3").each(function () {
            var xzoom = $(this).data("xzoom");
            $(this)
               .hammer()
               .on("tap", function (event) {
                  event.pageX = event.gesture.center.pageX;
                  event.pageY = event.gesture.center.pageY;
                  var s = 1,
                     ls;

                  xzoom.eventmove = function (element) {
                     element.hammer().on("drag", function (event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                     });
                  };

                  xzoom.eventleave = function (element) {
                     element.hammer().on("tap", function (event) {
                        xzoom.closezoom();
                     });
                  };
                  xzoom.openzoom(event);
               });
         });

         $(".xzoom4").each(function () {
            var xzoom = $(this).data("xzoom");
            $(this)
               .hammer()
               .on("tap", function (event) {
                  event.pageX = event.gesture.center.pageX;
                  event.pageY = event.gesture.center.pageY;
                  var s = 1,
                     ls;

                  xzoom.eventmove = function (element) {
                     element.hammer().on("drag", function (event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                     });
                  };

                  var counter = 0;
                  xzoom.eventclick = function (element) {
                     element.hammer().on("tap", function () {
                        counter++;
                        if (counter == 1) setTimeout(openfancy, 300);
                        event.gesture.preventDefault();
                     });
                  };

                  function openfancy() {
                     if (counter == 2) {
                        xzoom.closezoom();
                        $.fancybox.open(xzoom.gallery().cgallery);
                     } else {
                        xzoom.closezoom();
                     }
                     counter = 0;
                  }
                  xzoom.openzoom(event);
               });
         });

         $(".xzoom5").each(function () {
            var xzoom = $(this).data("xzoom");
            $(this)
               .hammer()
               .on("tap", function (event) {
                  event.pageX = event.gesture.center.pageX;
                  event.pageY = event.gesture.center.pageY;
                  var s = 1,
                     ls;

                  xzoom.eventmove = function (element) {
                     element.hammer().on("drag", function (event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                     });
                  };

                  var counter = 0;
                  xzoom.eventclick = function (element) {
                     element.hammer().on("tap", function () {
                        counter++;
                        if (counter == 1) setTimeout(openmagnific, 300);
                        event.gesture.preventDefault();
                     });
                  };

                  function openmagnific() {
                     if (counter == 2) {
                        xzoom.closezoom();
                        var gallery = xzoom.gallery().cgallery;
                        var i,
                           images = new Array();
                        for (i in gallery) {
                           images[i] = { src: gallery[i] };
                        }
                        $.magnificPopup.open({
                           items: images,
                           type: "image",
                           gallery: { enabled: true },
                        });
                     } else {
                        xzoom.closezoom();
                     }
                     counter = 0;
                  }
                  xzoom.openzoom(event);
               });
         });
      } else {
         //If not touch device

         //Integration with fancybox plugin
         $("#xzoom-fancy").bind("click", function (event) {
            var xzoom = $(this).data("xzoom");
            xzoom.closezoom();
            $.fancybox.open(xzoom.gallery().cgallery, {
               padding: 0,
               helpers: { overlay: { locked: false } },
            });
            event.preventDefault();
         });

         //Integration with magnific popup plugin
         $("#xzoom-magnific").bind("click", function (event) {
            var xzoom = $(this).data("xzoom");
            xzoom.closezoom();
            var gallery = xzoom.gallery().cgallery;
            var i,
               images = new Array();
            for (i in gallery) {
               images[i] = { src: gallery[i] };
            }
            $.magnificPopup.open({
               items: images,
               type: "image",
               gallery: { enabled: true },
            });
            event.preventDefault();
         });
      }
   });
})(jQuery);
