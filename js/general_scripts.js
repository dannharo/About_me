$( function() {
    $( "#tabs" ).tabs();

    $(".menu li").click(function(){
    	$(".menu li").removeClass( "active" );
    	$(this).addClass("active");
    });

    $("#tabs li").click(function(){
    	$("#tabs li").removeClass( "active" );
    	$(this).addClass("active");
    });

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll >= 1663){
            $("#navbar li").removeClass( "active" );
            $("#nav-contact").addClass("active");
        }
        else if(scroll >= 1373){
            $("#navbar li").removeClass( "active" );
            $("#nav-hobbies").addClass("active");
        }
        else if(scroll >= 713){
            $("#navbar li").removeClass( "active" );
            $("#nav-my-work").addClass("active");
        }
        else{
            $("#navbar li").removeClass( "active" );
            $("#nav-about-me").addClass("active");
        }
    });
  } );