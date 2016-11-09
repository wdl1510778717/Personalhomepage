	
	addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 

	//楼层跳转
	jQuery(document).ready(function($) {
				$(".scroll").click(function(event){		
					event.preventDefault();
					$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
				});
			});

    var $ = jQuery.noConflict();
		$(function() {
		$('#activator').click(function(){
		$('#box').animate({
			'top':'0px'
		},500);
	});
		$('#boxclose').click(function(){
		$('#box').animate({'top':'-700px'},500);
		});
	});
		$(document).ready(function(){
		$(".toggle_container").hide(); 
		$(".trigger").click(function(){
			$(this).toggleClass("active").next().slideToggle("slow");
				return false; 
						});
											
					});

        $(document).ready(function() {
			$('.popup-with-zoom-anim').magnificPopup({
							type: 'inline',
							fixedContentPos: false,
							fixedBgPos: true,
							overflowY: 'auto',
							closeBtnInside: true,
							preloader: false,
							midClick: true,
							removalDelay: 300,
							mainClass: 'my-mfp-zoom-in'
						});
																						
			});

        $(document).ready(function() {
			$().UItoTop({ easingType: 'easeOutQuart' });
										
			});




