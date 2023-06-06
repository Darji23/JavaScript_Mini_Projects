$('nav ul li a').click(function(){
    var thisSection = $(this).attr('href');
    var thisLink =$(this);
    
    $('html,body').stop().animate({
        scrollTop:$(thisSection).offest().top-200 
    },400,'easeOutCirc',function(){
        $('nav ul li a').removeAttr('class');
        thisLink.addClass("selected");
        //alert( $(window).offset());
    });
});