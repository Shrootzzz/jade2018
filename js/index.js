$("img").hover(function() {
    $(this).closest(".img").css("z-index", 1);

    $(this)
        .animate({
          height: "75px", 
          width: "75px", 
          left: "-=55", 
          top: "-=55"  
        }, 400, function() {
            $(this).animate({height: "50px", width: "50px"}, 100);
    });

$('p').on('click', function() {
    $(this).toggleClass('bold');
});
})

