$(window).on("load", function () {
  $(".preloader").fadeOut();
});

$(document).ready(function () {
  // Fixed Upper Wrapper (Header)

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $(".upper-wrapper").addClass("fixed");
    } else {
      $(".upper-wrapper").removeClass("fixed");
    }
  });

  // **************************************************************************************************
  // Handle click on body to close (Cart Menu & Filter Box)
  $(document).on("click", function (e) {
    const excludedElements = [
      ".cartMenu",
      ".cart-btn",
      ".filter-box",
      ".filter-btn",
    ];

    const isExcluded = excludedElements.some(
      (selector) => $(e.target).closest(selector).length
    );

    if (!isExcluded) {
      $(".cartMenu").removeClass("show-cartMenu");
      $("body").removeClass("overflowHidden");
      $(".filter-box").hide();
      $(".filter-btn").removeClass("bordered");
    }
  });

  // **************************************************************************************************

  // SWIPERS

  // Categories Swiper
  const CategoriesSwiper = new Swiper(".categories .swiper", {
    loop: false,
    // autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".categories .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: " .categories .swiper-button-next",
      prevEl: ".categories .swiper-button-prev",
    },
    slidesPerView: "auto",
    breakpoints: {
      350: {
        spaceBetween: 8,
      },
      768: {
        spaceBetween: 24,
      },
    },
  });

  // Filters Swiper
  if ($(window).width() < 768) {
    const filtersSwiper = new Swiper(".filters .swiper", {
      loop: false,
      autoplay: false,
      draggable: false,
      speed: 800,
      slidesPerView: "auto",
      breakpoints: {
        350: {
          spaceBetween: 10,
        },
        768: {
          spaceBetween: 16,
        },
      },
    });
  }

  // Banners Swiper
  const bannersSwiper = new Swiper(".banners .swiper", {
    loop: false,
    autoplay: false,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".banners .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: " .banners .swiper-button-next",
      prevEl: ".banners .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
    },
  });

  // Picks Swiper
  const picksSwiper = new Swiper(".picks .swiper", {
    loop: false,
    // autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".picks .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: " .picks .swiper-button-next",
      prevEl: ".picks .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 1.4,
        spaceBetween: 19,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
    },
  });

  // Featured Stores Swiper
  const featuredStoresSwiper = new Swiper(".featured-stores .swiper", {
    loop: false,
    // autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".featured-stores .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: " .featured-stores .swiper-button-next",
      prevEl: ".featured-stores .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 1.4,
        spaceBetween: 19,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
    },
  });

  // Flash Offers Swiper
  const flashOffersSwiper = new Swiper(".flash-offers .swiper", {
    loop: true,
    // autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".flash-offers .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: " .flash-offers .swiper-button-next",
      prevEl: ".flash-offers .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 1.85,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
    },
  });

  // Top Pizza Offers Swiper
  const topPizzaOffersSwiper = new Swiper(".topPizzaOffers .swiper", {
    loop: false,
    // autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".topPizzaOffers .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: " .topPizzaOffers .swiper-button-next",
      prevEl: ".topPizzaOffers .swiper-button-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 1.3,
        spaceBetween: 19,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 12,
      },
    },
  });
  // **************************************************************************************************

  // Timer Counter in Flash offers Section

  function startTimer(container) {
    let timeLeft = parseInt($(container).data("time-left"));
    const hoursEl = $(container).find(".hours");
    const minutesEl = $(container).find(".minutes");
    const secondsEl = $(container).find(".seconds");

    function formatTime(totalSeconds) {
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      return { hours, minutes, seconds };
    }

    function updateDisplay() {
      const { hours, minutes, seconds } = formatTime(timeLeft);
      hoursEl.text(hours.toString().padStart(2, "0"));
      minutesEl.text(minutes.toString().padStart(2, "0"));
      secondsEl.text(seconds.toString().padStart(2, "0"));
    }

    updateDisplay();

    setInterval(function () {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      }
    }, 1000);
  }

  $(".timer-container").each(function () {
    startTimer(this);
  });

  // **************************************************************************************************

  // Side Menu

  $(".sideMenuBtn").on("click", function () {
    $("body").addClass("overflowHidden");
    $(".sideMenu").addClass("show-sideMenu");
    if ($(window).width() > 768) {
      $(".sideMenu .overlay").fadeIn(100);
    }
  });

  $(".closeSideMenuBtn").on("click", function () {
    $(".sideMenu").removeClass("show-sideMenu");
    $("body").removeClass("overflowHidden");
  });

  $(".sideMenu").on("click", function (e) {
    e.stopPropagation();
  });
  $(".sideMenu .overlay").on("click", function () {
    $(".sideMenu").removeClass("show-sideMenu");
    $("body").removeClass("overflowHidden");
    if ($(window).width() > 768) {
      $(".sideMenu .overlay").fadeOut(50);
    }
  });

  // **************************************************************************************************

  // Cart Menu
  $(".cart-btn").on("click", function () {
    $("body").addClass("overflowHidden");
    $(".cartMenu").addClass("show-cartMenu");
    if ($(window).width() < 768) {
      $(".cartMenu .overlay").fadeIn(100);
    }
  });

  $(".closeCartBtn").on("click", function () {
    $(".cartMenu").removeClass("show-cartMenu");
    $("body").removeClass("overflowHidden");
    if ($(window).width() < 768) {
      $(".cartMenu .overlay").fadeOut(100);
    }
  });

  $(".cartMenu .overlay").on("click", function () {
    $(".cartMenu").removeClass("show-cartMenu");
    $("body").removeClass("overflowHidden");
    $(".cartMenu .overlay").fadeOut(50);
  });
  // **************************************************************

  // Order Counter in Cart Menu

  $(".order-counter .increment").on("click", function () {
    let $counter = $(this).closest(".order-counter");
    let $num = $counter.find(".value");
    let currentVal = parseInt($num.text()) || 0;
    $num.text(currentVal + 1);
  });

  $(".order-counter .decrement").on("click", function () {
    let $counter = $(this).closest(".order-counter");
    let $num = $counter.find(".value");
    let currentVal = parseInt($num.text()) || 0;
    if (currentVal > 1) {
      $num.text(currentVal - 1);
    }
  });

  // **************************************************************************************************

  // Delivery pick change

  $(".delivery-pick button").on("click", function () {
    $(".delivery-pick button").removeClass("active");
    $(this).addClass("active");
  });

  // **************************************************************************************************

  // Filters Boxes

  $(".filter-btn").on("click", function () {
    $(".filter-btn").removeClass("bordered");
    $(this).addClass("bordered");
    $(".filter-box").hide();
    $(this).siblings(".filter-box").show();
  });

  $(".closeBoxBtn").on("click", function (e) {
    $(".filter-box").hide();
    $(".filter-btn").removeClass("bordered");
  });

  // **************************************************************************************************

  // FILTER RANGE SLIDERS 

  // Discount filter 
  const discountSlider = document.getElementById("discountSlider");
  const discountSelectedValue = $(".discountFilterBox .selected-value");
  const discoutResetBtn = $(".discountFilterBox .reset-btn");

  noUiSlider.create(discountSlider, {
    start: 25,
    step: 1,
    range: {
      min: 15,
      "25%": 25,
      "50%": 50,
      "75%": 70,
      max: 90,
    },
    snap: true,
    connect: [true, false],
    tooltips: false,
  });

  discountSlider.noUiSlider.on("update", function (values, handle) {
    discountSelectedValue.text(`Over ${Math.round(values[handle])}%`);
  });

  discoutResetBtn.on("click", function () {
    discountSlider.noUiSlider.set(25);
  });

  // ************************************

  // Rate filter 
  const rateSlider = document.getElementById("rateSlider");
  const rateSelectedValue = $(".rateFilterBox .selected-value");
  const rateResetBtn = $(".rateFilterBox .reset-btn");

  noUiSlider.create(rateSlider, {
    start: 3.5,
    step: 0.5,
    range: {
      min: 3,
      "25%": +3.5,
      "50%": +4,
      "75%": +4.5,
      max: 5,
    },
    snap: true,
    connect: [true, false],
    tooltips: false,
  });

  rateSlider.noUiSlider.on("update", function (values, handle) {
    rateSelectedValue.text(`Over ${values[handle]}`);
  });

  rateResetBtn.on("click", function () {
    rateSlider.noUiSlider.set(+3.5);
  });

  // ************************************

  // Fees filter
  const feesSlider = document.getElementById("feesSlider");
  const feesSelectedValue = $(".feesFilterBox .selected-value");
  const feesResetBtn = $(".feesFilterBox .reset-btn");

  noUiSlider.create(feesSlider, {
    start: 1,
    step: 0.5,
    range: {
      min: 0.5,
      "25%": 1,
      "50%": 1.5,
      "75%": 2,
      max: 3,
    },
    snap: true,
    connect: [true, false],
    tooltips: false,
  });

  feesSlider.noUiSlider.on("update", function (values, handle) {
    feesSelectedValue.text(`Under ${values[handle]} KD`);
  });

  rateResetBtn.on("click", function () {
    feesResetBtn.noUiSlider.set(1);
  });


  
}); // End of document ready
