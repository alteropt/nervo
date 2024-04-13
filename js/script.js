$(document).ready(function () {
  $(".portfolio__works").slick({
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 3,
    dots: true,
  });

  $(".stack__inner").slick({
    slidesToShow: 10,
    infinite: false,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });

  $(".portfolio__tabs ul li").on("click", function () {
    $(".portfolio__tabs ul li").removeClass("active");
    $(this).addClass("active");

    $(".portfolio__works").removeClass("active");
    $(".portfolio__works").slick("unslick");

    document.querySelectorAll(".portfolio__works").forEach((work) => {
      if (work.dataset.portfolioType === this.dataset.portfolioType) {
        work.classList.add("active");

        $(".portfolio__works").slick({
          slidesToShow: 3,
          infinite: false,
          slidesToScroll: 3,
          dots: true,
        });
      }
    });
  });
});
