$(function () {

    $.each($("#aboutAppRight img"), function (index, val) {

        $(this).delay(500 * index).fadeIn("fast");
    });
})();