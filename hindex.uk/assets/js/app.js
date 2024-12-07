$(document).ready(function () {
    // $(document).ready(function(){
    // $('[data-toggle="tooltip"]').tooltip();
    // });
    $(".testimonials-slider-inner").slick({
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        centerMode: true,
        centerPadding: '0px',
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        dots: true,
        touchMove: false,
        pauseOnHover: false,
        lazyLoad: 'progressive',
        responsive: [{breakpoint: 992, settings: {slidesToShow: 1, slidesToScroll: 1, infinite: true, vertical: false, centerPadding: '200px',}}, {
            breakpoint: 768,
            settings: {slidesToShow: 1, slidesToScroll: 1, infinite: true, vertical: false, centerPadding: '0px',}
        }]
    });
    $(".slider-to-bottom").slick({
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        vertical: true,
        slidesToScroll: 1,
        verticalDown: true,
        verticalSwiping: true,
        verticalReverse: true,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
        draggable: false,
        pauseOnHover: false,
        lazyLoad: 'progressive',
        responsive: [{breakpoint: 576, settings: {slidesToShow: 1, slidesToScroll: 1, infinite: true, vertical: false,}}]
    });
    $(".slider-to-top").slick({
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        vertical: true,
        slidesToScroll: 1,
        verticalSwiping: true,
        verticalReverse: true,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
        draggable: false,
        pauseOnHover: false,
        lazyLoad: 'progressive',
        responsive: [{breakpoint: 576, settings: {slidesToShow: 1, slidesToScroll: 1, infinite: true, vertical: false,}}]
    });
    $(".slider-row-publisher").slick({
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        slidesToShow: 2,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        vertical: false,
        slidesToScroll: 1,
        verticalSwiping: false,
        verticalReverse: false,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
        draggable: false,
        pauseOnHover: false,
        lazyLoad: 'progressive',
        responsive: [{breakpoint: 992, settings: {slidesToShow: 1, slidesToScroll: 1, infinite: true, vertical: false,}}]
    });
    $(".slider-row-publisher-rtl").slick({
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        slidesToShow: 2,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        vertical: false,
        slidesToScroll: 1,
        verticalSwiping: false,
        verticalReverse: false,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
        draggable: false,
        rtl: true,
        pauseOnHover: false,
        lazyLoad: 'progressive',
        responsive: [{breakpoint: 992, settings: {slidesToShow: 1, slidesToScroll: 1, infinite: true, vertical: false,}}]
    });
    $('.marketplace-carousel-init').slick({
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
        draggable: false,
        pauseOnHover: false,
        lazyLoad: 'progressive',
        dots: false,
        responsive: [{breakpoint: 1024, settings: {slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: false}}, {breakpoint: 767, settings: {slidesToShow: 2, slidesToScroll: 1, infinite: true,}}, {
            breakpoint: 480,
            settings: {slidesToShow: 1, slidesToScroll: 1, infinite: true,}
        }]
    });
    if (getCookie("consent")) {
        $(".legal-notice").remove();
    }
    if (typeof adblocked === 'undefined') {
        $('.message-disable-demo').html('Oops,<br />Please disable your adblock to see demo banners');
    }
});
var _activeForm = true;
$("body").on("click", ".disabled", function (e) {
    e.preventDefault();
}).on("click", ".question", function (e) {
    e.preventDefault();
    $(e.currentTarget).hasClass('active') ? $(e.currentTarget).removeClass('active') : $(e.currentTarget).addClass('active');
    $(e.currentTarget).next().stop(true, false).slideToggle(300);
}).on("click", ".consent", function (e) {
    e.preventDefault();
    $(".legal-notice").hide();
    setCookie("consent", "true", 30);
}).on("submit", "form", function (e) {
    var selector = $(this);
    if (_activeForm === false) {
        e.preventDefault();
        return;
    }
    _activeForm = false;
    if (!selector.attr("action")) {
        selector.submit();
        return;
    }
    if (selector.hasClass("post")) {
        selector.submit();
        return;
    }
    var formURL = "assets/api/" + selector.attr("action");
    var formData = new FormData(e.currentTarget);
    $.ajax({
        url: formURL, type: "POST", data: formData, mimeType: "multipart/form-data", contentType: false, cache: false, processData: false, success: function (data, textStatus, $XHR) {
            console.log(data);
            _activeForm = true;
            var response = JSON.parse(data);
            if (typeof response.success !== "undefined") {
                if (response.success === "false") {
                    swal("Oops!", response.message, "error");
                } else {
                    swal("Great!", response.message, "success");
                }
            } else {
                swal("Great!", response.message, "success");
            }
        }, error: function (request, status, error) {
            _activeForm = true;
            var response = JSON.parse(request.responseText);
            if (response.message) {
                swal("Oops!", response.message, "error");
            } else {
                window.location.href = 'https://coinzilla.com/maintenance/';
            }
        }
    });
    e.preventDefault();
}).on("click", ".item-scroll", function (e) {
    e.preventDefault();
    var scrollEl = $(e.currentTarget).attr("data-scroll");
    $("html,body").stop(true, false).animate({scrollTop: ($("#" + scrollEl).offset().top)}, 800);
});
$(window).on('scroll', function () {
    var scrollPos = $(document).scrollTop();
    $('.menu-scrollable .nav-item a').each(function () {
        var currLink = $(this);
        var refElement = $("#" + $(currLink).attr("data-scroll"));
        if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.outerHeight(true) >= scrollPos) {
            $('.menu-scrollable .nav-item a').removeClass("active");
            currLink.addClass("active");
        }
    });
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
// });
