$(document).ready(function($) {
  console.log('Hi there!');
  $('#accordion').find('.accordion-toggle').click(function(){
    $(this).next().slideToggle(400);
    $(".accordion-content").not($(this).next()).slideUp(400);
  });
});
