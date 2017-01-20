jQuery(function($){

	
        $(".header__mobile-menu-sidebar").sidebar();

	$(".header__mobile-menu[data-action]").on("click", function () {
        var $this = $(this);
        var action = $this.attr("data-action");
        var side = $this.attr("data-side");

        $(".header__mobile-menu-sidebar").trigger("sidebar:" + action);
        return false;
    });

    $(window).load(function() { 

    	//home

    	$('#slider-home').flexslider({
    		animation: "slide"
  		});


		$('#carousel').flexslider({
	        animation: "slide",
	        controlNav: false,
	        animationLoop: false,
	        slideshow: false,
	        itemWidth: 210,
	        itemMargin: 5,
	        asNavFor: '#slider'
	      });

	      $('#slider').flexslider({
	        animation: "slide",
	        animationLoop: false,
	        slideshow: true,
	        sync: "#carousel",
	        start: function(slider){
	          $('body').removeClass('loading');
	        }
	      });
      });

});