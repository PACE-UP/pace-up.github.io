/**
 *
 */

const FRONTPAGE_ID = "#front_page";

$(document).ready(function() {

	goto_frontpage();
	let homenav = document.getElementById('home_nav');
	highlightNav(homenav);

	$('#frontpageCarousel').carousel({
		interval: 25000
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

	$('#who_navbutton').click(function(event) {
		goto_whopage();
	});

	$(".nav-link").on("click", function() {
		highlightNav(this);//navItem
	});
});

function highlightNav(navItem) {
	var currentActive = document.getElementsByClassName("active-background");
	for (var i = 0 ; i < currentActive.length ; i++) {
		currentActive[i].className = currentActive[i].className.replace(" active-background", "");
		//delete the background for non-selected item
	}
	// The selection item is in the dropdown menu
	// -> highlight the parent nav option.
	// Only works now for one-level dropdown.
	if (navItem.classList.contains("dropdown-item")) {
		var parentNav = navItem.parentNode.parentNode;
		$(parentNav).addClass("active-background");
		return;
		//does not need to consider parentNav option.
	}
	if (navItem.classList.contains("nav-link")) {
		$(navItem).addClass("active-background");
	}
}

function goto_frontpage() {
	expandNavbar();
	hideAdditionalNavs();
	$('.page').addClass("d-none");
	$('#front_page').removeClass("d-none");
	$('#home_page').removeClass("d-none");
	$('#news_page').removeClass("d-none");
	$('#news_page').addClass("mt-0");
}

function goto_whopage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#who_page').removeClass("d-none");
	$('#partners_page').removeClass("d-none");
	$('#partners_page').addClass("mt-0");
	$('#partners_page').removeClass("margin-nav-bottom");
	$('#people_page').removeClass("d-none");
	$('#people_page').addClass("mt-0");
	displayAdditionalNavs();
}

function goto_partnerspage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#partners_page').removeClass("d-none");
	$('#partners_page').removeClass("mt-0");
	$('#partners_page').addClass("margin-nav-bottom");
	displayAdditionalNavs();
}

function goto_peoplepage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#people_page').removeClass("d-none");
	$('#people_page').removeClass("mt-0");
	displayAdditionalNavs();
}

function goto_objectivespage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#objectives_page').removeClass("d-none");
	displayAdditionalNavs();
}

function goto_activitiespage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#activities_page').removeClass("d-none");
	displayAdditionalNavs();
}

function goto_capspage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#capacitybuildings_page').removeClass("d-none");
	displayAdditionalNavs();
}

function goto_mappage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#map_page').removeClass("d-none");
	displayAdditionalNavs();
}

function goto_publicationspage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#publications_page').removeClass("d-none");
	displayAdditionalNavs();
}

function goto_newspage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#news_page').removeClass("d-none");
	// in case I forgot, this is for setting some top margin for the navbar-top
	// since this function display only news page.
	$('#news_page').removeClass("mt-0");
	displayAdditionalNavs();
}

function goto_loginpage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#login_page').removeClass("d-none");
	displayAdditionalNavs();
}

function goto_contactpage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#contact_page').removeClass("d-none");
	displayAdditionalNavs();
}

function displayAdditionalNavs() {
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
	$('#navbar-bottom').removeClass("d-none");
}

function hideAdditionalNavs() {
	$('#sticky-right').addClass("d-none");
	$('#sticky-left').addClass("d-none");
	$('#navbar-bottom').addClass("d-none");
}

function shrinkNavbar() {
	$('#navbar-top').addClass('shrink');
	$('#navbar-top').children().first().addClass('shrink');
}

function expandNavbar() {
	$('#navbar-top').removeClass('shrink');
	$('#navbar-top').children().first().removeClass('shrink');
}

$(window).scroll(function() {
	let front_page = document.getElementById('front_page');
	if (!front_page.classList.contains("d-none")) {
		if ($(document).scrollTop() > window.innerHeight*0.5) {
			shrinkNavbar();
			displayAdditionalNavs();
		} else {
			expandNavbar();
			hideAdditionalNavs();
		}
	}
});
