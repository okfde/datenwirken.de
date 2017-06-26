$(function () {
    $(".dropdown").click(function (e) {
        e.stopPropagation();
        var $t = $(this);
        if ($t.data('timer')) clearTimeout($t.data("timer"));

        var timer = setTimeout(function () {
            $t.removeClass('js-opened');
        }, 3000);
        $t.data('timer', timer);

        if ($(this).hasClass("js-opened")) {
            $(this).removeClass("js-opened");
        }
        else {
            $(".dropdown.js-opened").removeClass('js-opened');
            $(this).addClass("js-opened");
        }
    })
    $("body").on("click", function () {
        var $t = $(".dropdown.js-opened");
        $t.removeClass("js-opened");
        $t.each(function () {
            if ($(this).data('timer'))
                clearTimeout($(this).data("timer"));
            $(this).data('timer', null);
        })
    });

    function isTouchDevice() {
        return !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);
    };

    if (isTouchDevice()) $("body").addClass("is-touch");
});