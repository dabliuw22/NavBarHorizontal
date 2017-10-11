$(document).ready(function() {
	$(window).resize(function() {
		if($(document).width() > 768) {
			$(".nav-bar").css({'display': 'block'});
		} else {
			$(".nav-bar").css({'display': 'none'});
		}
		$(".nav-bar").removeClass("activo");
	});

	$("#btn-menu-select").click(function() {
		if($(".nav-bar").hasClass("activo")) {
			//$(".nav-bar").slideUp();
			$(".nav-bar").css({'display': 'none'});
			$(".nav-bar").removeClass("activo");
		} else {
			//$(".nav-bar").slideDown();
			$(".nav-bar").css({'display': 'block'});
			$(".nav-bar").addClass("activo");
		}
	});
});