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

	$('.carousel-item').each(function(){
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
		currentActive[i].classList.remove("active-background");
	}
	if (navItem.classList.contains("dropdown-item")) {
		var parentNav = navItem.parentNode.parentNode;
		$(parentNav).addClass("active-background");
		return;
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

function goto_contactpage_both() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#contact_page').removeClass("d-none");
	$('#contact_page_europe').removeClass("d-none");
	$('#contact_page_asia').removeClass("d-none");
	displayAdditionalNavs();
}

function goto_contactpage_asia() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#contact_page').removeClass("d-none");
	$('#contact_page_europe').addClass("d-none");
	$('#contact_page_asia').removeClass("d-none");
	displayAdditionalNavs();
}

function goto_contactpage_europe() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#contact_page').removeClass("d-none");
	$('#contact_page_europe').removeClass("d-none");
	$('#contact_page_asia').addClass("d-none");
	displayAdditionalNavs();
}

function goto_about_this_site(){
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#about_this_site_page').removeClass("d-none");
	displayAdditionalNavs();	
}

function goto_detailedpeoplepage(id) {
	shrinkNavbar();
	$('.page').addClass("d-none");
	build_detailed_people_page(id);
	$('#detailed_contact_page').removeClass("d-none");
	displayAdditionalNavs();
	hideSideNavs();
}

function clear_detailed_people_page() {
	$('#detailed_contact_page_title').empty();
	$('#detailed_contact_page_fst_paragraph').empty();
	$('#detailed_contact_page_snd_paragraph').empty();
}

function build_detailed_people_page(id) {
	clear_detailed_people_page();
	var myperson;
	console.log(id);
	for(var i = 0; i < people.length; i++) {
		console.log(people[i].id);
		if (people[i].id == id) {
			myperson = people[i];
			break;
		}
	}
	if (typeof myperson !== "undefined") {
		console.log(myperson);
		var imgPath = myperson.imgPath;
		var imgTitle = myperson.imgTitle;
		var fstParagraph = myperson.fstPar;
		var sndParagraph = myperson.sndPar;
		$('#detailed_contact_page_img').attr("src",imgPath);
		$('#detailed_contact_page_title').append(imgTitle);
		$('#detailed_contact_page_fst_paragraph').append(fstParagraph);
		$('#detailed_contact_page_snd_paragraph').append(sndParagraph);
	}
}

function displayAdditionalNavs() {
	$('#sticky-right').removeClass("d-none");
	$('#sticky-left').removeClass("d-none");
	$('#navbar-bottom').removeClass("d-none");
}

function hideSideNavs() {
	$('#sticky-right').addClass("d-none");
	$('#sticky-left').addClass("d-none");
}

function hideAdditionalNavs() {
	hideSideNavs();
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
