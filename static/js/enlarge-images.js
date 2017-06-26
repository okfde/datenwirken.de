$(function () {
    $("main img").click(function (e) {
        e.stopPropagation();
        var $o = $("body #img-overlay");
        if ($o.length == 0) {
            $o = $("<div id='img-overlay'>" +
                "<div class='center'>" +
                "<a class='close'>&#10006;</a>" +
                "<div class='content'><img/>" +
                "</div>" +
                "</div>" +
                "</div>");
            $("body").prepend($o);
        }
        if ($o.is(":visible")) {
            $o.fadeOut();
        }
        else {
            $o.find('.content img').attr('src', $(this).attr('src'));
            $o.fadeIn();
        }
    })
    $("body").click(function () {
        $("body #img-overlay:visible").fadeOut();
    })
    $(window).scroll(function () {
        $("body #img-overlay:visible").fadeOut();
    });
})