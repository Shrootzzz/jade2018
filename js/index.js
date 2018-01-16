$(document).ready(function() {
  
  var windowHeight = $( window ).height();
  $("div.body-text").css({top: windowHeight});
  $("div.body-text").css({height: windowHeight});

  $("img.facebook").on('mouseover',function() {
    // var img = document.getElementsByClassName("facebook");
    // var width = img.clientWidth * 1.2;
    // var height = img.clientHeight * 1.2;
    $(this)
        .animate({
          height: "120%", 
          width: "120%", 
          // left: "-=width/2", 
          // top: "-=height/2"  
        }, 400)
  });

  $("img.facebook").on('mouseout',function() {
      $(this)
          .animate({
            height: "100%", 
            width: "100%",  
          }, 400)
  });

  $('p').on('click', function() {
      $(this).toggleClass('bold');
  });

});




