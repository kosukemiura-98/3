function slideSwitch() {
    var $active = $('#mainimage ul li.active');

    if ($active.length == 0) $active = $('#mainimage ul li:last');

    var $next = $active.next().length ? $active.next() : $('#mainimage ul li:first');

    if ($(window).width() >= 980) {
        $active.animate({ 'width': '110%', 'left': '-5%' }, 5000).delay(1000).queue(function () {
            $active.find('img').animate({ 'opacity': '0' }, 1000, function () {
                $active.addClass('last-active');
                $next.addClass('active');
                $active.find('img').css({ 'opacity': '1.0' });
                $active.removeClass('active last-active').css({ 'width': '100%', 'left': '0' }).dequeue();
            });
        });
    } else {
        $active.animate({ 'width': '110%', 'left': '-5%' }, 7000).delay(1000).queue(function () {
            $active.find('img').animate({ 'opacity': '0' }, 1000, function () {
                $active.addClass('last-active');
                $next.addClass('active');
                $active.find('img').css({ 'opacity': '1.0' });
                $active.removeClass('active last-active').css({ 'width': '100%', 'left': '0' }).dequeue();
            });
        });
    }
};

$(function () {
    slideSwitch();
    setInterval("slideSwitch()", 1000);
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
