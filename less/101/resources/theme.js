$(document).ready(function () {
    $("nav > ul > li").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass('active');
    });
});


