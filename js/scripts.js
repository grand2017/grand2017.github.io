
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
if ($(window).width() > 767) {
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
}
if ($(window).width() > 767) {
    $('.special-carousel--home').owlCarousel({
        lazyLoad:true,
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
} else {
    $('.special-carousel--home .item').hide();
    $('.special-carousel--home .item').eq(0).show();
    $('.special-carousel--home .item').eq(1).show();
    $('.special-carousel--home .item').eq(2).show();
    $('.special-carousel--home .item').eq(3).show();
    for (i=0;i<4;i++){
        var imgsrc = $('.special-carousel--home .item').eq(i).find('.owl-lazy').data('src');
        $('.special-carousel--home .item').eq(i).find('.owl-lazy').attr('src',imgsrc);
    }
}

function updateSpecial() {
    if ($('.special-carousel--grid').length) {
        var items = $('.special-carousel--grid > .item').length;
        if (items>=12) {
            var pages = Math.ceil(items/3);
            for (var i=1; i<=pages; i++){
                $('.special-carousel--grid > .item').slice(0,3).wrapAll("<div></div>");
            }
        }
    }
    $('.special-carousel--grid').owlCarousel({
        loop:false,
        lazyLoad:true,
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
    $('.date-filters__item, .themes-filters__item, .events__item').removeClass('active');
    $(this).addClass('active');
    var theme = $(this).data('theme');
    if (theme == 'tab6'){
        $('[data-date=18][data-theme=tab6]').addClass('active');
        $('.date-filters__item[data-date=18]').addClass('active');
    }
    if (theme == 'tab7'){
        $('[data-date=22][data-theme=tab7]').addClass('active');
        $('.date-filters__item[data-date=22]').addClass('active');
    }
    if (theme == 'tab8'){
        $('[data-date=23][data-theme=tab8]').addClass('active');
        $('.date-filters__item[data-date=23]').addClass('active');
    }
});
$('.date-filters__item').click(function(){
    $('.date-filters__item').removeClass('active');
    $(this).addClass('active');
    var date= $(this).data('date');
    $('.themes-filters__item').removeClass('active');
    $('.events__item').removeClass('active');
    if (date == '23'){
        $('.themes-filters__item[data-theme=tab8]').addClass('active');
        var theme = $('.themes-filters__item.active').data('theme');
        $('[data-date=' + date + '][data-theme=' + theme + ']').addClass('active');
    }
    else if (date == '22'){
        $('.themes-filters__item[data-theme=tab7]').addClass('active');
        var theme = $('.themes-filters__item.active').data('theme');
        $('[data-date=' + date + '][data-theme=' + theme + ']').addClass('active');
    }
    else {
        $('.themes-filters__item[data-theme=tab6]').addClass('active');
        var theme = $('.themes-filters__item.active').data('theme');
        $('[data-date=' + date + '][data-theme=' + theme + ']').addClass('active');
    }
});
$('.special-popup').on('click','.special-popup__img', function(){
    $('.special-popup').fadeIn();
    $('.special-popup__img').removeClass('active');
    $(this).addClass('active');
});
var ticket = Math.floor((Math.random() * 1000000) + 1);
$('.dashboard .main__left .btn').click(function(){
    $('.ticket-info__number span').html(ticket);
    $('.ticket-info__name span').html($('#reg-name').val());
    $('.ticket-info__surname span').html($('#reg-surname').val());
    $('.ticket-popup').fadeIn();
    var printing_css='<style media="print">.ticket-info {position: absolute; top: 135px; left: 370px; font-size: 26px; font-family: Arial;} .ticket-btns {display:none;}</style>';
    var html_to_print=printing_css+$('#print-content').html();
    var iframe=$('<iframe id="print_frame">');
    $('body').append(iframe);
    var doc = $('#print_frame')[0].contentDocument || $('#print_frame')[0].contentWindow.document;
    doc.getElementsByTagName('body')[0].innerHTML=html_to_print;
});
function printTicket() {
    var win = $('#print_frame')[0].contentWindow || $('#print_frame')[0];
    win.print();
}
$('.popup-close').click(function(){
    $('.special-popup').fadeOut();
    $('.news-popup').fadeOut();
    $('.million-popup').fadeOut();
    $('.ticket-popup').fadeOut();
    $('.video-popup').fadeOut();
});

//В эту функцию нужно вставить подставление src видео в video-popup__inner перед fadeIn
$('.speaker__video').click(function(){

  $('.video-popup').fadeIn();
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
            title: 'Р   Р РЋРЎв„ўР   Р РЋРЎвЂєР   Р РЋРІвЂћСћ "Р   Р Р†Р вЂљРЎС™Р    Р   Р РЋРІР‚в„ўР   Р РЋРЎС™Р   Р Р†Р вЂљРЎСљ"',
            icon: '/bitrix/templates/corp_services_gray/img/icons/marker.svg'
        });
    }
}

$('.check-all').click(function(){
    //$(this).parent().find('.my_category_input').prop('checked',true);
    $(this).parent().find('.my_category_input').each(function () {
        this.checked = true;
        last = this;
    });
    $(last).change();
});
$('.uncheck-all').click(function(){
    $(this).parent().find('.my_category_input').each(function () {
        this.checked = false;
        last = this;
    });
    $(last).change();
});

$('.show-all').click(function(){
    $(this).parents().find('.my_category_input').prop('checked',true);
    $(this).parents().find('.letter-filter input').prop('checked',false);
    $("#search_text").val("");
    $(this).removeClass('active');
    $("input[name='search_for_text']").click();
})
function popupspecial() {
    $(".my_spec").on("click", function () {
        console.log($(this).attr("data-id"));
        $.ajax({
            url      : '/query.php',             // Р  Р Р‹Р РЋРІР‚СљР   Р РЋРІР‚СњР   Р вЂ™Р’В°Р   Р вЂ™Р’В·Р  Р Р‹Р Р†Р вЂљРІвЂћвЂ“Р   Р  РІР‚ Р   Р вЂ™Р’В°Р   Р вЂ™Р’ВµР   Р РЋР’В URL Р   Р РЋРІР‚В
            dataType : "json",                     // Р  Р Р‹Р Р†Р вЂљРЎв„ўР   Р РЋРІР‚ВР   Р РЋРІР‚вЂќ Р   Р вЂ™Р’В·Р   Р вЂ™Р’В°Р   Р РЋРІР‚вЂњР  Р Р‹Р  РІР‚С™Р  Р Р‹Р РЋРІР‚СљР   Р вЂ™Р’В¶Р   Р вЂ™Р’В°Р   Р вЂ™Р’ВµР   Р РЋР’ВР  Р Р‹Р Р†Р вЂљРІвЂћвЂ“Р  Р Р‹Р Р†Р вЂљР’В¦ Р   Р СћРІР‚ВР   Р вЂ™Р’В°Р   Р  РІР‚В¦Р   Р  РІР‚В¦Р  Р Р‹Р Р†Р вЂљРІвЂћвЂ“Р  Р Р‹Р Р†Р вЂљР’В¦
            data     : {
                "ID" : $(this).attr("data-id"),
            },
            type     : "POST",
            success  : function (data) { // Р   Р  РІР‚ Р   Р вЂ™Р’ВµР  Р Р‹Р Р†РІР‚С™Р’В¬Р   Р вЂ™Р’В°Р   Р вЂ™Р’ВµР   Р РЋР’В Р  Р Р‹Р  РЎвЂњР   Р  РІР‚ Р   Р РЋРІР‚СћР   Р Р†РІР‚С›РІР‚вЂњ Р   Р РЋРІР‚СћР   Р вЂ™Р’В±Р  Р Р‹Р  РІР‚С™Р   Р вЂ™Р’В°Р   Р вЂ™Р’В±Р   Р РЋРІР‚СћР  Р Р‹Р Р†Р вЂљРЎв„ўР  Р Р‹Р Р†Р вЂљР Р‹Р   Р РЋРІР‚ВР   Р РЋРІР‚Сњ Р   Р  РІР‚В¦Р   Р вЂ™Р’В° Р  Р Р‹Р Р†Р вЂљРЎвЂєР  Р Р‹Р РЋРІР‚СљР   Р  РІР‚В¦Р   Р РЋРІР‚СњР  Р Р‹Р Р†Р вЂљ Р   Р РЋРІР‚ВР  Р Р‹Р  РІР‚в„– success
                console.log(data);
                $("#company").html("");
                $("#company").html(data["NAME"]);
                $("#text").html("");
                $("#text").html(data["DETAIL_TEXT"]);
                $("#spec").html("");
                $("#spec").html(data["offer"]);
                $("#spec_images").html("");
                for (var key in data["images"]) {
                    if (key == 0)
                        $("#spec_images").append("<div class='special-popup__img active'><img src=" + data["images"][key] + "></div>");
                    else
                        $("#spec_images").append("<div class='special-popup__img'><img src=" + data["images"][key] + "></div>");
                }
            }
        });
    });
}

$('.about form').submit(function(){
    dataLayer.push({
        "event": "submitForm",
        "formName": "subscribe"
    });
});

$('.reg form').submit(function(){
    dataLayer.push({
        "event": "submitForm",
        "formName": "register"
    });
});

$('.special-popup form').submit(function(){
    dataLayer.push({
        "event": "submitForm",
        "formName": "special"
    });
});
function setMember() {
    $(".member_check").change(function () {
        var checkbox = $(".member_check:checked");
        console.log(checkbox);
        var setmember = [];
        for (var i = 0; i < checkbox.length; i++) {
            setmember.push(checkbox[i].dataset.id);
        }
        console.log(setmember);
        $.ajax({
            url      : '/query.php',             // Р РЋРЎвЂњР  РЎвЂќР  Р’В°Р  Р’В·Р РЋРІР‚в„–Р  Р вЂ Р  Р’В°Р  Р’ВµР  РЎВ URL Р  РЎвЂ
            dataType : "json",                     // Р РЋРІР‚С™Р  РЎвЂР  РЎвЂ” Р  Р’В·Р  Р’В°Р  РЎвЂ“Р РЋР вЂљР РЋРЎвЂњР  Р’В¶Р  Р’В°Р  Р’ВµР  РЎВР РЋРІР‚в„–Р РЋРІР‚В¦ Р  РўвЂР  Р’В°Р  Р вЂ¦Р  Р вЂ¦Р РЋРІР‚в„–Р РЋРІР‚В¦
            data     : {
                "UF_MEMBER"  : setmember,
                "NOT_MEMBER" : "Y",

            },
            type     : "POST",

        });
        //}

    });
}
$('#all-members').click(function(){
    $('.members-grid input + label').show();
});
$('#selected-members').click(function(){
    $('.members-grid input + label').hide();
    $('.members-grid input:checked + label').show();
});
$(document).ready(function(){
    if ($(window).width() < 1025) {
        $('head meta').prevAll('link').detach();
    }
});
