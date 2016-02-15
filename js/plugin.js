(function($){
	
	$.fn.hoverImage = function() {
		
		
		$(".composition").mouseenter(function() {
	
	$(this).addClass("hovered");
	$(".hovered .image").addClass("imagehover");
	$(".hovered .text").addClass("texthover");
	$(".hovered .text").animate({"bottom": '+20%'});
		



});

$(".composition").mouseleave(function() {
		
		$(this).removeClass("hovered");	
		$(".image").removeClass("imagehover");
		$(".text").removeClass("texthover");
		$(".text").animate({"bottom": '-20%'});


});

$(".composition").click(function(){
	
	
	$(this).addClass("hovered");
	$(".hovered .image").animate({"width": "0px", "height": "0px"});
	$(".hovered .text").animate({"width": "0px", "height": "0px"}, function (){
				$(".composition").unbind("mouseleave");
				$(".composition").unbind("mouseenter");
	});
	
});
		

			
		
		
		
	};
	
	
	
})(jQuery)

