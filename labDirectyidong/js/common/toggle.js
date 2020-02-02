$(function () {
    $(".order_card_body ul").each(function () {
        var strip = $(this).children(".strip");
        var strip_length = strip.length;
        var strip_more = $(this).siblings(".strip_more");
        var strip_more_hide = $(this).siblings(".strip_more_hide");

        if (strip_length > 2) {
            strip_more.show();
            strip.hide();
            strip.filter(":lt(2)").show();
            strip_more.click(function () {
                strip.show();
                strip_more.hide();
                strip_more_hide.show();

            })
            strip_more_hide.click(function () {
                strip_more.show();
                strip.hide();
                strip.filter(":lt(2)").show();
                strip_more_hide.hide();

            })
        }

    });

});
