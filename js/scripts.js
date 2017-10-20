
var slides = $('.slider__slide').length;
for (i=1;i<=slides;i++){
  $('.slider__slide').eq(i-1).addClass('slide'+i);
}
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
$('.special-carousel--home').owlCarousel({
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
/*
if ($('.special-carousel--grid').length) {
  var items = $('.special-carousel--grid > .item').length;
  if (items >= 12) {
    var pages = Math.ceil(items/4);
    for (var i=1; i<=pages; i++){
      $('.special-carousel--grid > .item').slice(0,3).wrapAll("<div></div>");
    }
  }
}
*/
function updateSpecial() {
  $('.special-carousel--grid').owlCarousel({
  	loop:true,
  	margin:0,
  	nav:false,
  	dots:true,
  	autoplay:true,
    autoplayTimeout:6000,
  	autoplayHoverPause:true,
    responsive:{
          0:{
              items:1
          },
          767:{
              items:3,
              slideBy: 3
          },
          1279:{
              items:4,
              slideBy: 4
          }
    }
  });
}
updateSpecial();

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
            items:2,
            slideBy: 2
        },
        1023:{
            items:3,
            slideBy: 3
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
            items:2
        },
        1023:{
            items:3
        },
        1279:{
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
  $('.news-popup').fadeOut();
  $('.million-popup').fadeOut();
});

$('.special-carousel, .member-info').on('click','.item', function(){
  $('.special-popup').fadeIn();
});
$('.news-carousel__item').click(function(){
  $('.news-popup').fadeIn();
});
$('.about__million__btn .btn, .million .btn').click(function(){
  $('.million-popup').fadeIn();
});
function initMap() {
  if ($('#map').length) {
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
}

$('.check-all').click(function(){
  $(this).parent().find('.my_category_input').prop('checked',true);
});
$('.uncheck-all').click(function(){
  $(this).parent().find('.my_category_input').prop('checked',false);
})
$('.show-all').click(function(){
  $(this).parents().find('.my_category_input').prop('checked',true);
  $(this).parents().find('.letter-filter input').prop('checked',false);
  $(this).removeClass('active');
})
