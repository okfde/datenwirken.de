// $(function() {
var $grid = $('.grid').isotope({
    itemSelector: '.e-card',
    // masonry: {
    //     columnWidth: 300,
    //     isFitWidth: true,
    //     gutter: 10
    // }
    layoutMode: 'fitRows',
    getSortData: {
        weight: function (item) {
            var $i = $(item);
            if ($i.hasClass("impact-comming-soon")) {
                return 2;
            }
            return Math.random();
        }
    },
    sortBy: 'weight'
});

$('#government-button').click(function () {
    TweenLite.to(window, 0.5, {scrollTo: $('#a-explore').offset().top, ease: Power2.easeOut});
    $('#impact-tab').click();
    $('.js-filter').removeClass('selected');
    $('#government-filter').addClass('selected');
    $grid.isotope({filter: '.impact-government, .impact-comming-soon'});
});

$('#citizens-button').click(function () {
    TweenLite.to(window, 0.5, {scrollTo: $('#a-explore').offset().top, ease: Power2.easeOut});
    $('#impact-tab').click();
    $('.js-filter').removeClass('selected');
    $('#citizens-filter').addClass('selected');
    $grid.isotope({filter: '.impact-citizens, .impact-comming-soon'});
});

$('#economic-button').click(function () {
    TweenLite.to(window, 0.5, {scrollTo: $('#a-explore').offset().top, ease: Power2.easeOut});
    $('#impact-tab').click();
    $('.js-filter').removeClass('selected');
    $('#economic-filter').addClass('selected');
    $grid.isotope({filter: '.impact-economic, .impact-comming-soon'});
});

$('#public-button').click(function () {
    TweenLite.to(window, 0.5, {scrollTo: $('#a-explore').offset().top, ease: Power2.easeOut});
    $('#impact-tab').click();
    $('.js-filter').removeClass('selected');
    $('#public-filter').addClass('selected');
    $grid.isotope({filter: '.impact-public, .impact-comming-soon'});
});


$('#see-all-btn').addClass('selected');

$('.js-filter').click(function (event) {
    event.preventDefault();
    var filterParam = $(this).attr('data-filter');
    filterBy(filterParam);
    $(this).addClass('selected');

});

$("#explore-link").on("click", function(){
    filterBy("*");
})

function filterBy(filterParam) {
    $('.js-filter').removeClass('selected');
    if (filterParam === '*') {
        $grid.isotope({filter: '*'})
    }
    else {
        $grid.isotope({filter: '.' + filterParam+" , .impact-comming-soon"})
    }

    if ($grid.data('isotope').filteredItems.length === 0) {
        $('#no-results').removeClass('m-hidden');
    } else {
        $('#no-results').addClass('m-hidden');
    }
}

// });