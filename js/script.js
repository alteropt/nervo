$(document).ready(function () {
  const portfolioSlickParams = {
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  $(".portfolio__works").slick(portfolioSlickParams);

  $(".stack__inner").slick({
    slidesToShow: 10,
    infinite: false,
    slidesToScroll: 1,
    dots: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  });

  $(".portfolio__tabs ul li").on("click", function () {
    $(".portfolio__tabs ul li").removeClass("active");
    $(this).addClass("active");

    $(".portfolio__works").removeClass("active");
    $(".portfolio__works").slick("unslick");

    document.querySelectorAll(".portfolio__works").forEach((work) => {
      if (work.dataset.portfolioType === this.dataset.portfolioType) {
        work.classList.add("active");

        $(".portfolio__works").slick(portfolioSlickParams);
      }
    });
  });

  $(".part.yours > ul li").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".part.yours > ul li").removeClass("active");
      $(this).addClass("active");
    }
  });

  $(".part.ours > ul li").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".part.ours > ul li").removeClass("active");
      $(this).addClass("active");
    }
  });

  $("#burger").on("click", function () {
    $("body").addClass("modal-opened");
    $("header").addClass("active");
  });

  $("#header-close").on("click", function () {
    $("body").removeClass("modal-opened");
    $("header").removeClass("active");
  });

  $(".header__navigation ul li").on("click", function () {
    $("body").removeClass("modal-opened");
    $("header").removeClass("active");
  });
});
