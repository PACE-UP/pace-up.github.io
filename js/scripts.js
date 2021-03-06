/**
 *
 */

const FRONTPAGE_ID = "#front_page";

$(document).ready(function() {

	goto_frontpage();
	let homenav = document.getElementById('home_nav');

	$('#frontpageCarousel').carousel({
		interval: 10000
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
		highlightNav(this);
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
	// $('#news_page').removeClass("d-none");
	// $('#news_page').addClass("mt-0");
	$('.navbar-collapse').collapse('hide');
}

function goto_homepage() {
	shrinkNavbar();
	hideAdditionalNavs();
	$('.page').addClass("d-none");
	$('#front_page').removeClass("d-none");
	$('#home_page').removeClass("d-none");
	// $('#news_page').removeClass("d-none");
	// $('#news_page').addClass("mt-0");
	$('.navbar-collapse').collapse('hide');
}

function goto_whopage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#who_page').removeClass("d-none");
	// $('#partners_page').removeClass("d-none");
	// $('#partners_page').addClass("mt-0");
	// $('#people_page').removeClass("d-none");
	// $('#people_page').addClass("mt-0");
	displayAdditionalNavs();
	// $('.navbar-collapse').collapse('hide');
}

function goto_partnerspage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#partners_page').removeClass("d-none");
	$('#partners_page').removeClass("mt-0");
	displayAdditionalNavs();
	$('.navbar-collapse').collapse('hide');
}

function goto_peoplepage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#people_page').removeClass("d-none");
	$('#people_page').removeClass("mt-0");
	displayAdditionalNavs();
	$('.navbar-collapse').collapse('hide');
}

function goto_objectivespage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#objectives_page').removeClass("d-none");
	displayAdditionalNavs();
	$('.navbar-collapse').collapse('hide');
}

function goto_activitiespage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#activities_page').removeClass("d-none");
	displayAdditionalNavs();
	$('.navbar-collapse').collapse('hide');
}

function goto_capspage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#capacitybuildings_page').removeClass("d-none");
	displayAdditionalNavs();
	$('.navbar-collapse').collapse('hide');
}

function goto_mappage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#map_page').removeClass("d-none");
	displayAdditionalNavs();
	$('.navbar-collapse').collapse('hide');
}

function goto_publicationspage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#publications_page').removeClass("d-none");
	displayAdditionalNavs();
	$('.navbar-collapse').collapse('hide');
}

function goto_newspage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#news_page').removeClass("d-none");
	// in case I forgot, this is for setting some top margin for the navbar-top
	// since this function display only news page.
	$('#news_page').removeClass("mt-0");
	displayAdditionalNavs();
	$('.navbar-collapse').collapse('hide');
}

function goto_loginpage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#login_page').removeClass("d-none");
	displayAdditionalNavs();
	$('.navbar-collapse').collapse('hide');
}

function goto_contactpage_asia() {
	var contactAsia = document.getElementById("contact-in-asia");
	if(contactAsia.classList.contains("d-none")) {
		contactAsia.classList.remove("d-none");
		$('#sticky-right-link').addClass("d-none");
	} else {
		contactAsia.classList.add("d-none");
		$('#sticky-right-link').removeClass("d-none");
	}
}

function goto_contactpage_europe() {
	var contactEU = document.getElementById("contact-in-eu");
	if(contactEU.classList.contains("d-none")) {
		contactEU.classList.remove("d-none");
	} else {
		contactEU.classList.add("d-none");
	}
}

function goto_about_this_site(){
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#about_this_site_page').removeClass("d-none");
	displayAdditionalNavs();
}

function goto_detailedpartnerpage(id) {
	shrinkNavbar();
	$('.page').addClass("d-none");
	build_detailed_partner_page(id);
	$('#detailed_partner_page').removeClass("d-none");
	displayAdditionalNavs();
	hideSideNavs();
}

function goto_detailedpeoplepage(id) {
	shrinkNavbar();
	$('.page').addClass("d-none");
	build_detailed_people_page(id);
	$('#detailed_contact_page').removeClass("d-none");
	displayAdditionalNavs();
	hideSideNavs();
}

function goto_eventspage() {
	shrinkNavbar();
	$('.page').addClass("d-none");
	$('#events_page').removeClass("d-none");
	displayAdditionalNavs();
	$('.navbar-collapse').collapse('hide');

	var elem = document.getElementsByClassName("li-content");
	var length = elem.length;
	for (var i = 0 ; i < length ; i++) {
		if ( !elem[i].classList.contains("d-none") ) {
			elem[i].classList.add("d-none");
		}
	}
}

function clear_detailed_people_page() {
	$('#detailed_contact_page_title').empty();
	$('#detailed_contact_page_fst_paragraph').empty();
	$('#detailed_contact_page_snd_paragraph').empty();
}

function clear_detailed_partner_page() {
	$('#detailed_partner_page_title').empty();
	$('#detailed_partner_page_fst_paragraph').empty();
	$('#detailed_partner_page_snd_paragraph').empty();
}

function build_detailed_partner_page(id) {
	clear_detailed_partner_page();
	var mypartner;
	for(var i = 0; i < partners.length; i++) {
		if (partners[i].id == id) {
			mypartner = partners[i];
			break;
		}
	}
	if (typeof mypartner !== "undefined") {
		var imgPath = mypartner.imgPath;
		var imgTitle = mypartner.imgTitle;
		var fstParagraph = mypartner.fstPar;
		var sndParagraph = mypartner.sndPar;
		$('#detailed_partner_page_img').attr("src",imgPath);
		$('#detailed_partner_page_title').append(imgTitle);
		$('#detailed_partner_page_fst_paragraph').append(fstParagraph);
		$('#detailed_partner_page_snd_paragraph').append(sndParagraph);
	}
}

function build_detailed_people_page(id) {
	clear_detailed_people_page();
	var myperson;
	for(var i = 0; i < people.length; i++) {
		if (people[i].id == id) {
			myperson = people[i];
			break;
		}
	}
	if (typeof myperson !== "undefined") {
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
	$('#sticky-right-contact').removeClass("d-none");
	$('#sticky-right-link').removeClass("d-none");
	$('#sticky-left-contact').removeClass("d-none");
	$('#navbar-bottom').removeClass("d-none");
}

function hideSideNavs() {
	$('#sticky-right-contact').addClass("d-none");
	$('#sticky-right-link').addClass("d-none");
	$('#sticky-left-contact').addClass("d-none");
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
		if ($(document).scrollTop() > 0) {
			if ($(document).scrollTop() > window.innerHeight*0.5) {
				displayAdditionalNavs();
			}
			shrinkNavbar();
		} else {
			expandNavbar();
			hideAdditionalNavs();
		}
	}
});

function openEvent(i) {
	var id = "li-"+i;
	let elem = document.getElementById(id);
	if (elem.classList.contains('d-none')) {		//if class contains d-none == trye
		elem.classList.remove('d-none');
	}
	else if (!elem.classList.contains('d-none')) {	//if class contains d-none == false
		elem.classList.add('d-none');
	}
	var rootid = "li-root-"+i;
	let root = document.getElementById(rootid);
	if (root.classList.contains('li-time')) {		//if class contains d-none == trye
		root.classList.remove('li-time');
		root.classList.add('li-time-clicked');
	}
	else if (!root.classList.contains('li-time')) {	//if class contains d-none == false
		root.classList.remove('li-time-clicked');
		root.classList.add('li-time');
	}
}
