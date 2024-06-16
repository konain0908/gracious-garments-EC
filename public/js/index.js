var swiper = new Swiper(".product-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: false,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  on: {
    init: function () {
      var index = this.activeIndex;

      var target = $(".product-slider__item").eq(index).data("target");

      console.log(target);

      $(".product-img__item").removeClass("active");
      $(".product-img__item#" + target).addClass("active");
    },
    slideChange: function () {
      var index = this.activeIndex;

      var target = $(".product-slider__item").eq(index).data("target");

      console.log(target);

      $(".product-img__item").removeClass("active");
      $(".product-img__item#" + target).addClass("active");

      if (this.isEnd) {
        $(".prev").removeClass("disabled");
        $(".next").addClass("disabled");
      } else {
        $(".next").removeClass("disabled");
      }

      if (this.isBeginning) {
        $(".prev").addClass("disabled");
      } else {
        $(".prev").removeClass("disabled");
      }

      // Show the corresponding product slider item
      $(".product-slider__item").eq(index).show();

      // Hide other product slider items
      $(".product-slider__item")
        .not(":eq(" + index + ")")
        .hide();
    },
  },
});

$(".js-fav").on("click", function () {
  $(this).find(".heart").toggleClass("is-active");
});

// Trigger initial slide change to set up the visibility of items
swiper.on("init", function () {
  this.emit("slideChange");
});
