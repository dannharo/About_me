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

  } );