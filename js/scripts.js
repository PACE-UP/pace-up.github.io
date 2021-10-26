/**
 * 
 */

const FRONTPAGE_ID = "#front_page";
 
$(document).ready(function() {
	console.log("This is our scripts file");

	setDisplayPage(FRONTPAGE_ID);

	$('.redirect-page-anchor').click(function(event) {
		var target_page_id = $(this).attr('href');
		setDisplayPage(target_page_id);
	});

	$('#recipeCarousel').carousel({
		interval: 250000
	})

	$('.front-carousel-item').each(function(){
		var minPerSlide = 2;
		var next = $(this);
	
		for (var i=0;i<minPerSlide;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
	
			next.children(':first-child').clone().appendTo($(this));
		}
	});
	
	$('.carousel .carousel-item').each(function(){
		var minPerSlide = 11;
		var next = $(this);
	
		for (var i=0;i<minPerSlide;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
	
			next.children(':first-child').clone().appendTo($(this));
		}
	});

	$('#partner-carousel').carousel({
		interval: 20000
	})
});

function highlightNav(navItem) {
	if (navItem.classList.contains("nav-link")) {
		$(navItem).addClass("active");
	}
	// The selection item is in the dropdown menu
	// -> highlight the parent nav option.
	// Only works now for one-level dropdown.
	if (navItem.classList.contains("dropdown-item")) {
		var parentNav = navItem.parentNode.parentNode;
		$(parentNav).addClass("active");
	}
}

function setDisplayPage(id) {
	$('.primary-page').addClass("d-none");
	$('.front-page').addClass("d-none");
	$(id).removeClass('d-none');
	if (id === FRONTPAGE_ID) {
		$('#navbar-bottom').addClass("d-none");
		$('#navbar-top').addClass("my-4");
	} else {
		$('#navbar-bottom').removeClass("d-none");
		$('#sticky-right').removeClass("d-none");
		$('#sticky-left').removeClass("d-none");
		$('#navbar-top').removeClass("my-4");
	}
	
}

	