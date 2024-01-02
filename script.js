document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;

  function changeSlide(index) {
    for (let i = 0; i < 4; i++) {
      document.getElementById(`slide${i}`).classList.remove("active");
    }
    document.getElementById(`slide${index}`).classList.add("active");
    currentSlide = index;
  }

  setInterval(() => {
    let nextSlide = (currentSlide + 1) % 4;
    changeSlide(nextSlide);
  }, 5000);
});

function changeSlide(index) {
  $("#carouselExampleAutoplaying").carousel(index);
}

$("#carouselExampleAutoplaying").on("slide.bs.carousel", function (e) {
  $(".carousel-item img").addClass("bw");
});

$("#carouselExampleAutoplaying").on("slid.bs.carousel", function (e) {
  $(".carousel-item img").addClass("bw");
  $(e.relatedTarget).find("img").removeClass("bw").addClass("colorful");
});
