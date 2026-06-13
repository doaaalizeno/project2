 const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // تغيير الأيقونة
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '🌙'; // شمس
  } else {
    toggleButton.textContent = ' ☀️'; // قمر
  }
});


// init Isotope
var $products = $('.all-products').isotope({
  // options
  originLeft: false

});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $products.isotope({ filter: filterValue });
});




const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal', // أو احذف هذا السطر لأنه الوضع الافتراضي
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },




   breakpoints: {
    320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
    
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
        // 1024: {
        //   slidesPerView: 5,
        //   spaceBetween: 50,
        // },
      },
});




