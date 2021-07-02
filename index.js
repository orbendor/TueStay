
$("button")[0].addEventListener("click", function(){

document.addEventListener("click", function(){

  var x = document.getElementById("navbarResponsive");
  x.classList.remove('show');
});
});



$('#about').click(function() {
  $('.ceo').slideToggle("slow");

  if($('#aboutceo').hasClass('hiddenDiv')){
  $('.hiddenDiv').addClass('hiddenDivOpen').removeClass('hiddenDiv');
  }else{
    $('.hiddenDivOpen').addClass('hiddenDiv').removeClass('hiddenDivOpen');
  }
});

$('#navbarResponsive ul li a').on('click',function(event){
   var $anchor = $(this);
   $('html, body').animate({
     scrollTop: $($anchor.attr('href')).offset().top + "px"
   }, 1500);
   event.preventDefault();
});
