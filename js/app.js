$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".dropdown-button").dropdown();
  $('.carousel').carousel({indicators:true});
  window.setInterval(function(){$('.carousel').carousel('next')},5000);
  $('.parallax').parallax();
  $('.modal').modal();
});

twttr.widgets.createTimeline({
    sourceType: "profile",
    screenName: "fabric"
  },document.getElementById("tw")
);

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.9&appId=820277861463329";
	fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk')
);

