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
function downloadAll(files) {
    if (files.length == 0) return;
    file = files.pop();
    var theAnchor = $('<a />')
        .attr('href', file[1])
        .attr('download', file[0])
        // Firefox does not fires click if the link is outside
        // the DOM
        .appendTo('body');

    theAnchor[0].click();
    theAnchor.remove();
    downloadAll(files);
}
