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
    $('.works__item').on('click', function () {
        var modalIndex = $(this).index();
        $('#modal').eq(modalIndex).fadeIn();

        //モーダルの位置を中央にする
        function modalResize() {
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();

            var modalWidth = (windowWidth - $(modal).outerWidth(true)) / 2;
            var modalHeight = (windowHeight - $(modal).outerHeight(true)) / 2;

            $(modal).css({'left': modalWidth + 'px','top': modalHeight + 'px'});
        }
        modalResize();

        $(modal).fadeIn();

        $('.modal__close, .modal__cover').off().click(function () {
            $('#modal').fadeOut();
            $('.modal__cover').fadeOut('slow', function () {
                $('.modal__cover').remove();
            });
        });

        $(window).on('resize', function () {
            modalResize();
        });
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