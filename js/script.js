// event pada saat element diklik
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  let target = $(this).attr("href");

  // tangkap element ybs
  let elementTarget = $(target);

  let coba = $(elementTarget);

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
