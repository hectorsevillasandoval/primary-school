jQuery(function($){

	
        $(".header__mobile-menu-sidebar").sidebar();

	$(".header__mobile-menu[data-action]").on("click", function () {
        var $this = $(this);
        var action = $this.attr("data-action");
        var side = $this.attr("data-side");

        $(".header__mobile-menu-sidebar").trigger("sidebar:" + action);
        return false;
    });


});