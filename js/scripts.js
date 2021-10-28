/**
 * 
 */

const FRONTPAGE_ID = "#front_page";
 
$(document).ready(function() {

	goto_frontpage();

	$('.redirect-page-anchor').click(function(event) {
		var target_page_id = $(this).attr('href');
		setDisplayPage(target_page_id);
	});

	$('#recipeCarousel').carousel({
		interval: 25000
	})

	$('#partner-carousel').carousel({
		interval: 2000
	})

	$('.front-carousel-item').each(function(){
		var minPerSlide = 3;
		var next = $(this);
	
		for (var i=0;i<minPerSlide;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
	
			next.children(':first-child').clone().appendTo($(this));
		}
	});
	
	$('.partner-carousel-item').each(function(){
		var minPerSlide = 12;
		var next = $(this);
	
		for (var i=0;i<minPerSlide;i++) {
			next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
	
			next.children(':first-child').clone().appendTo($(this));
		}
	});

	$('#who_navbutton').click(function(event) {
		goto_whopage();
	});
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

function goto_frontpage() {
	expandNavbar();
	$('.page').addClass("d-none");
	$('#front_page').removeClass("d-none");
	$('#home_page').removeClass("d-none");
	$('#news_page').removeClass("d-none");
	$('#navbar-bottom').removeClass("fixed-bottom");
}

function goto_homepage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#home_page').removeClass("d-none");
	$('#navbar-bottom').addClass("fixed-bottom");
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
}

function goto_whopage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#who_page').removeClass("d-none");
	$('#partners_page').removeClass("d-none");
	$('#people_page').removeClass("d-none");
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
	$('#navbar-bottom').addClass("fixed-bottom");
}

function goto_partnerspage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#partners_page').removeClass("d-none");
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
	$('#navbar-bottom').addClass("fixed-bottom");
}

function goto_peoplepage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#people_page').removeClass("d-none");
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
	$('#navbar-bottom').addClass("fixed-bottom");
}

function goto_objectivespage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#objectives_page').removeClass("d-none");
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
	$('#navbar-bottom').addClass("fixed-bottom");
}

function goto_activitiespage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#activities_page').removeClass("d-none");
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
	$('#navbar-bottom').addClass("fixed-bottom");
}

function goto_capspage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#capacitybuildings_page').removeClass("d-none");
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
	$('#navbar-bottom').addClass("fixed-bottom");
}

function goto_mappage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#map_page').removeClass("d-none");
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
	$('#navbar-bottom').addClass("fixed-bottom");
}

function goto_publicationspage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#publications_page').removeClass("d-none");
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
	$('#navbar-bottom').addClass("fixed-bottom");
}

function goto_newspage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#news_page').removeClass("d-none");
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
	$('#navbar-bottom').addClass("fixed-bottom");
}

function goto_loginpage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#login_page').removeClass("d-none");
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
	$('#navbar-bottom').addClass("fixed-bottom");
}

function goto_contactpage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#contact_page').removeClass("d-none");
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
	$('#navbar-bottom').addClass("fixed-bottom");
}

function setDisplayPage(id) {
	$('.page').addClass("d-none");
	$('.front-page').addClass("d-none");
	$(id).removeClass('d-none');
	if (id === FRONTPAGE_ID) {
		$('#navbar-bottom').addClass("d-none");
	} else {
		$('#navbar-bottom').removeClass("d-none");
		$('#sticky-right').removeClass("d-none");
		$('#sticky-left').removeClass("d-none");
	}
	
}

function shrinkNavbar() {
	$('#navbar-top').children().first().addClass('shrink');
	$('#navbar-top').children().first().addClass('mb-2');
	$('#navbar-top').children().first().removeClass('mb-4');
}

function expandNavbar() {
	$('#navbar-top').children().first().removeClass('shrink');
	$('#navbar-top').children().first().addClass('mb-4');
	$('#navbar-top').children().first().removeClass('mb-2');
}

$(window).scroll(function() {
	if ($(document).scrollTop() > 10) {
	  	shrinkNavbar();
	} else {
	  	expandNavbar();
	}
});

	