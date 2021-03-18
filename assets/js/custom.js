$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  $(window).scroll(function() {
    var thisScroll = $(this).scrollTop()
    if(thisScroll>0){
      $(".navbar-light").addClass('scrolled')
    }
    else{
      $(".navbar-light").removeClass('scrolled')
    }
  })
});