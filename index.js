
$("button")[0].addEventListener("click", function(){

document.addEventListener("click", function(){

  //$("div .navbarResponsive").slideUp(400);
  var x = document.getElementById("navbarResponsive");
  x.classList.remove('show');
});
});



$('#about').click(function() {
  $('.ceo').slideToggle("slow");

});
