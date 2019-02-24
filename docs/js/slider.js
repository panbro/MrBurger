$(document).ready(function() {
  const owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 700
  });
  $(".compos__arrow-next").click(function() {
    owl.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".compos__arrow-prev").click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel");
  });
});
