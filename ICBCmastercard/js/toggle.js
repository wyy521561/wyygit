$(function () {
    $(".recommend").each(function () {
        var recommendHeader_itemsCard = $(this).children(".recommendHeader_itemsCard");
        var recommendHeader_itemsCard_length = recommendHeader_itemsCard.length;
        var moreCard = $(this).siblings(".moreCard");
        var moreCardHide = $(this).siblings(".moreCardHide");
        if (recommendHeader_itemsCard_length > 2) {
            moreCard.show();
            recommendHeader_itemsCard.hide();
            recommendHeader_itemsCard.filter(":lt(2)").show();
            moreCard.click(function () {
                recommendHeader_itemsCard.show();
                moreCard.hide();
                moreCardHide.show();
            })
            moreCardHide.click(function () {
                moreCard.show();
                recommendHeader_itemsCard.hide();
                recommendHeader_itemsCard.filter(":lt(2)").show();
                moreCardHide.hide();
            })
        }

    });

});
