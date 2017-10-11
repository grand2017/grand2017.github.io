$('.slider').owlCarousel({
  animateOut: 'fadeOutLeftBig',
  animateIn: 'fadeInRightBig',
	loop:true,
	margin:10,
	nav:true,
	dots:false,
	center: true,
	autoplay:true,
  autoplayTimeout:6000,
	smartSpeed: 1000,
	autoplayHoverPause:true,
  items: 1
});
$('.about-slider').owlCarousel({
	loop:true,
	margin:10,
	nav:false,
	dots:true,
	center: true,
	autoplay:true,
  autoplayTimeout:5000,
	smartSpeed: 1000,
	autoplayHoverPause:true,
  items: 1
});
$('.special-carousel').owlCarousel({
	loop:true,
	margin:0,
	nav:true,
	dots:false,
	center: true,
	autoplay:true,
  autoplayTimeout:3000,
	autoplayHoverPause:true,
  responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        }
  }
});
$('.speakers-carousel').owlCarousel({
	loop:true,
	margin:0,
	nav:true,
	dots:false,
  responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        }
  }
});
$('.news-carousel').owlCarousel({
	loop:true,
	margin:0,
	nav:false,
	dots:true,
	autoplay:true,
  autoplayTimeout:3000,
	autoplayHoverPause:true,
  responsive:{
        0:{
            items:1
        },
        767:{
            items:4
        }
  }
});
$('.partners-carousel--members').marquee({
  	duration: 20000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    setStartPosition: 100
});
$('.themes-filters__item').click(function(){
	$('.themes-filters__item').removeClass('active');
	$(this).addClass('active');
	var theme = $(this).data('theme');
	var date = $('.date-filters__item.active').data('date');
	$('.events__item').removeClass('active');
	$('[data-theme=' + theme + '][data-date=' + date + ']').addClass('active');
});
$('.date-filters__item').click(function(){
	$('.date-filters__item').removeClass('active');
	$(this).addClass('active');
	var date= $(this).data('date');
	var theme = $('.themes-filters__item.active').data('theme');
	$('.events__item').removeClass('active');
	$('[data-theme=' + theme + '][data-date=' + date + ']').addClass('active');
});
$('.special-popup__img').click(function(){
  $('.special-popup__img').removeClass('active');
  $(this).addClass('active');
});
$('.popup-close').click(function(){
  $('.special-popup').fadeOut();
});
$('.item__btn').click(function(){
  $('.special-popup').fadeIn();
});
function initMap() {
	var myLatLng = {lat: 55.886767, lng: 37.436494};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: myLatLng,
		scrollwheel: false,
		disableDefaultUI: true
	});
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'МТК "ГРАНД"',
		icon: 'img/icons/marker.svg'
	});
}
