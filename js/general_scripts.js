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

  } );