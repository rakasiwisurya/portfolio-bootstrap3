// event pada saat element diklik
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  let target = $(this).attr("href");

  // tangkap element ybs
  let elementTarget = $(target);

  // pindahlan scroll
  $("html, body").animate(
    {
      scrollTop: elementTarget.offset().top - 50,
    },
    1250,
    "easeInOutExpo"
  );

  e.preventDefault;
});

// parallax

// about
$(window).on("load", function () {
  $(".about p").addClass("show");
});

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  // jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });

  // portfolio
  if (wScroll > $(".portfolio").offset().top - 250) {
    $(".portfolio .thumbnail").each(function (i) {
      setTimeout(() => {
        $(".portfolio .thumbnail").eq(i).addClass("show");
      }, 300 * (i + 1));
    });
  }
});
