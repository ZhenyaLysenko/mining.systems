$(document).ready(function(){
 $(".anchor").on("click","a", function (event) {
   event.preventDefault();
   var id  = $(this).attr('href'),
   top = $(id).offset().top - 50 + 'px';
   $('body,html').animate({scrollTop: top}, 1000);

 });
  $('#menu a').click(function() {
    $('#menuToggle input').click();
 });
});
