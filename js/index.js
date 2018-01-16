$("img").on('mouseover',function() {
    $(this)
        .animate({
          height: "60px", 
          width: "60px", 
          left: "-=55", 
          top: "-=55"  
        }, 400)
    });

$("img").on('mouseout',function() {
    $(this)
        .animate({
          height: "50px", 
          width: "50px",  
        }, 400)
    });

$('p').on('click', function() {
    $(this).toggleClass('bold');
});


