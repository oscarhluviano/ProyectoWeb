$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  window.setInterval(function(){$('.carousel').carousel('next')},6000)
  });

twttr.widgets.createTimeline(
  {
    sourceType: "profile",
    screenName: "fabric"
  },
  document.getElementById("tw")
);