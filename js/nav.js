$(document).ready(function(){
 $(".anchor").on("click","a", function (event) {
   event.preventDefault();
   var id  = $(this).attr('href'),
   top = $(id).offset().top - 50 + 'px';
   $('body,html').animate({scrollTop: top}, 1000);

 });
 //   $('#menu a').click(function() {
 //     $('#menuToggle input:checked ~ ul').css({"transform":"translate(-200%, 0)"});
 //     $('#menuToggle span:nth-last-child(2)').css({"transform-origin":"0% 100%"});
 //     $('#menuToggle input:checked ~ span').css({"transform":"none"});
 //     $('#menuToggle input:checked ~ span:nth-last-child(2)').css({"transform":"none"});
 //     $('#menuToggle input:checked ~ span:nth-last-child(3)').css({"transform":"none"});
 //     $('#menuToggle input:checked ~ span:nth-last-child(3)').css({"opacity":"1"});
 //  });
 //  $('#menuToggle').click(function() {
 //    $('#menuToggle input:checked ~ ul').css({"transform":"translate(200%, 0)"});
 // });
});
