$(function () {
    $('.swiper-item img:nth-child(n+2)').hide();
    setInterval(function () {
        $(".swiper-item img:first-child").fadeOut(2000);
        $(".swiper-item img:nth-child(2)").fadeIn(2000);
        $(".swiper-item img:first-child").appendTo(".swiper-item");
    }, 4000);
});

$(function () {
    var $nav = $('#navArea');
    var $btn = $('.toggle_btn');
    var $mask = $('#mask');
    var open = 'open';

    $btn.on('click', function () {
        if (!$nav.hasClass(open)) {
            $nav.addClass(open);
        } else {
            $nav.removeClass(open);
        }
    });

    $mask.on('click', function () {
        $nav.removeClass(open);
    });
});

$(function () {
    AOS.init();
});

$(function () {
    $(window).scroll(function () {
        $('.header').addClass('change');
    });
});


$(function () {
    $('.information-item').click(function () {
        var index = $('.information-item').index(this);
        $('.information-item').removeClass('active');
        $(this).addClass('active');
        $('.information-container').removeClass('show').eq(index).addClass('show');
    });
});

$(function () {
    $('.modal-open').click(function (e) {
        e.preventDefault();
        $('.modal').addClass('show');
        $('.modal-background').addClass('show');
        return false;
    });
});

$(function () {
    $('.modal-close').click(function (e) {
        e.preventDefault();
        $('.modal').removeClass('show');
        $('.modal-background').removeClass('show');
        return false;
    });
});

$(function () {
    flatpickr('.flatpickr');
    const config = {
        minDate: "today",
        maxDate: "2021-12-31",
    }
    flatpickr('.flatpickr', config);
});
