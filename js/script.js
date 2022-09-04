// pre loader
const preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
   setTimeout(() => {
      preloader.style.cssText = `opacity: 0; visibility: hidden;`;
   }, 1000);
});

// active nav item
const navItem = document.getElementsByClassName("nav-link");
for (const element of navItem) {
   element.addEventListener("click", () => {
      for (const ele of navItem) {
         ele.classList.remove("active");
      }
      element.classList.add("active");
   });
}

// input file preview
const previewImage = (id) => {
   document.getElementById(id).src = URL.createObjectURL(event.target.files[0]);
};

// toggle sidebar
const toggleSidebar = (id) => {
   const element = document.getElementById(id);
   element.classList.toggle("active");
};
const removeClass = (id) => {
   const element = document.getElementById(id);
   element.classList.remove("active");
};

// dark mode
const darkMode = () => {
   document.body.classList.toggle("dark-mode");
};

$(document).ready(function () {
   $(function () {
      $(".custom-select").customselect();
   });
   // SKITTER SLIDER
   $(function () {
      $(".skitter-large").skitter({
         dots: false,
         interval: 3000,
         stop_over: false,
      });
   });

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
   $(".live-matches-slider").owlCarousel({
      loop: true,
      margin: 15,
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
            items: 2,
         },
         1200: {
            items: 4,
         },
      },
   });

   // AOS ANIMATION
   // AOS.init();

   // COUNTER UP
   // $(".counter").counterUp({
   //    delay: 10,
   //    time: 3000,
   // });

   // SCROLL TOP
   $(".scroll-up").fadeOut();
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $(".scroll-up").fadeIn();
      } else {
         $(".scroll-up").fadeOut();
      }
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
