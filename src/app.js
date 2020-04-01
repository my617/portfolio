$(function (){
    //SPメニュー
    $('.top__menu-toggle').on('click', function(){
        $(this).toggleClass('active');
        
        if($(this).hasClass('active')) {
            $('.top__menu').addClass('active');
        } else {
            $('.top__menu').removeClass('active');
        }
    });

    //モーダル
    $('.works__img01').on('click', function () {
        var modalWidth = $('.modal').width();
        var windowWidth = $(window).width();
        $('.modal').attr('style', 'margin-left: ' + (windowWidth/2 - modalWidth/2) + 'px');
        $('.modal').show();
        $('.cover').show();
    });

    $('.modal__close').on('click', function () {
        $('.modal').fadeOut();
        $('.cover').fadeOut();
    });

    $('.cover').on('click', function() {
        $(this).fadeOut();
        $('.modal').fadeOut();
    });

    //スクロール
    $(window).scroll(function () {
        scroll_effect();
    });
});

function scroll_effect() {
    var top = $(window).scrollTop();
    var height = $(window).height();
    $('.fadein').each(function () {
        var toggle = $(this).offset().top+200;
        if(top > toggle - height) {
            $(this).addClass('done');
        }
    });
}