$(document).ready(function() {
  afficherTexte(0);
});

function afficherTexte(index) {
  $(".txtDates").css("display", "none");
  $(".txtDates").eq(index).css("display", "block");

  $(".frise .dates > div").removeClass();
  $(".frise .dates > div").eq(index).addClass("active");
}

function ouvrirPhoto(image) {
  $("#apercuImage").css("display", "block");
  $("#imageApercu").attr("src", image.src);
}

$("#apercuImage").click(function() {
  $("#apercuImage").css("display", "none");
})
