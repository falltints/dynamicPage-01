$(function () {

    // 修改banner轮播间隔
    $('.carousel').carousel({
        interval : 3000
    });

    // 搜索框弹出效果
    var open = false;
    var searchBox = $('.search-box');
    var input = $('.search-box input');
    var faSearch = $('.fa-search');

    faSearch.click(function () {
        if (!open) {
            open = true;
            searchBox.removeClass('widthDecrease');
            searchBox.addClass('widthIncrease');
            input.css('display','block');
        }else {
            open = false;
            searchBox.addClass('widthDecrease');
            searchBox.removeClass('widthIncrease');
            input.css('display','none');
        }
    });

    // 客户介绍轮播效果
    var prev = $('.prev'),
        next = $('.next'),
        list = $('#carousel-list');

    var calculate = function (offset) {
        return parseInt(list.css('left')) + offset;
    };

    next.click(function () {
        var newLeft = calculate(-570) + 'px';
        list.addClass('transition');
        list.on('transitionend',function () {
            if (parseInt(list.css('left')) <= -1710) {
                list.removeClass('transition');
                list.css({
                    'left' : '0px'
                })
            }
        });
        list.css({
            'left' : newLeft
        });

    });
    prev.click(function () {
        var newLeft = calculate(570) + 'px';
        list.addClass('transition');
        list.on('transitionend',function () {
            if (parseInt(list.css('left')) >= 0) {
                list.removeClass('transition');
                list.css({
                    'left' : '-1710px'
                })
            }
        });
        list.css({
            'left' : newLeft
        })
    });

    // 回到顶部按钮
    $(window).scroll(function () {
        var windowHeight = $(this).height(),
            scrollHeight = $(this).scrollTop();
        if (scrollHeight > (windowHeight/2)) {
            $('.toTop').css({
                'display' : 'block'
            })
        }else {
            $('.toTop').css({
                'display' : 'none'
            })
        }
    });

    $('.toTop').click(function () {
        $('body,html').animate({scrollTop : 0},1000,'swing');
    })
});