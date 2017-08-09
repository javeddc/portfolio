


$(document).ready(function($) {
  console.log('Hi there!');
  $('#accordion').find('.accordion-toggle').click(function(){

    //Expand or collapse this panel
    $(this).next().slideToggle(400);

    //Hide the other panels
    $(".accordion-content").not($(this).next()).slideUp(400);

  });
});
