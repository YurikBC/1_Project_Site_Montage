$(function() {
    
    $(".owl-carousel").owlCarousel({
        margin:10,
        nav:true,
        startPosition:1,
        navText:["<i class='fa fa-angle-double-left' aria-hidden='true'></i>", "<i class='fa fa-angle-double-right' aria-hidden='true'></i>"],
responsiveClass:true,
responsive:{
        0:{
            items:1,

        },
        480:{
            items:2,

        },
        768:{
            items:2,

        },
        992:{
            items:4,

        },
        1200:{
            items:4,

        }
    }
        });
    
    $(".section_4 p").equalHeights();
    $(".section_6_item p").equalHeights();
    $(".section_10_comment p").equalHeights();
    
	$(".post_header_1_container").waypoint(function() {
		$({blurRadius: 5}).animate({blurRadius: 0}, {
		duration: 1200,
		easing: 'swing',
		step: function() {
			$(".lines").css({
				"-webkit-filter": "blur("+this.blurRadius+"px)",
				"filter": "blur("+this.blurRadius+"px)"
			});
		}
	}
  );
	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator('');
	$(".lines").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			"font-size": "36px",
			numberStep: comma_separator_number_step},
			500);
	});   
		
		
	}, {
		offset:"80%"
        
	})    

 
	
    $(".post_header_1_container").waypoint(function(){
			$({blurRadius: 5}).animate({blurRadius: 0}, {
	duration: 1200,
	easing: 'swing',
	step: function() {
		$(".lines").css({
			"-webkit-filter": "blur("+this.blurRadius+"px)",
			"filter": "blur("+this.blurRadius+"px)"
		});
	}
});
var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
$(".lines").each(function() {
	var tcount = $(this).data("count");
	$(this).animateNumber({ number: tcount,
		easing: 'easeInQuad',
		"font-size": "40px",
		numberStep: comma_separator_number_step},
		1000);
});
		}, {
  offset: '90%'
	}); 
    
    
    
    
   $("a[href='#callback']").click(function() {
        var dataForm = $(this).data("form");
        var dataText = $(this).data("text");
        $(".section11_cont_second h3").text(dataText);
        $(".hidden [name=admin-data]").val(dataForm);
       
   });
    
    
    
    
    
    
    
    

    $(".section_5_item_1").each(function(e){
        
        var th = $(this);
        th.attr("href", "#portfolio-img" + e)
            .find(".portfolio-popup")
                .attr("id", "portfolio-img" + e)
        
        
    })
    
    
    $(".section_5_item_1, a[href='#callback']").magnificPopup({
        type: 'inline',
        mainClass: 'my-mfp-zoom-in',
        removalDelay: 300
    });
    
    
        
	
	
	$(document).ready(function() {
		$('.mfp-gallery-wrap').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			}
		});
	});   
		
	

	
	$(document).ready(function() {
		$('.buton2').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			}
		});
	});      
	
	
	
	
	
	
	
		$(".mouse-icon").click(function() {
		$("html, body").animate({
			scrollTop : $(".post_header_1").offset().top
		}, 800);
	});
	
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			th.find(".success").addClass("active");
			setTimeout(function() {
				// Done Functions
				th.find(".success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//Replace all SVG images with inline SVG
	$('img.img-svg').each(function(){
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

	});

	$(window).scroll(function() {
		if($(this).scrollTop() > $(this).height()) {
			$(".top").addClass("active");
		} else {
			$(".top").removeClass("active");
		}
	});
	
	
   
    $("body").append('<div class="scroll_button"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');
    
    $(".scroll_button").click(function() {
    $("html, body").animate({
        scrollTop : 0
    }, 800);
    });    
    
    $(window).scroll(function() {
        if($(this).scrollTop() > $(this).height()) {
        $(".scroll_button").addClass("active")  
    } else {
        $(".scroll_button").removeClass("active") 
    }
   });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
	/*
 * Replace all SVG images with inline SVG
 */
	$('img-svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

});
	
	
	
	
	
	
	
	
	
	
	
});











