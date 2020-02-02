$("#search").click(function () {
    $(".homePage").hide();
    $(".searchPage").show();
});
$(".searchCancel").click(function () {
    $(".searchPage").hide();
    $(".homePage").show();
});
$("#searchSure").click(function () {
    var searchContent = $('#searchContent').val();
    var test_conten = String(searchContent).replace(/\s+/g,"");
    if (test_conten.length>0) {
        setHistoryItems(searchContent);
    }
    else{
        return false;
    }
    window.location = '/bocomm/showOfferH5OfferSearchResult?keywords='+encodeURI(searchContent);
});
function loadhistory() {
    var history_html = '';
    if (localStorage.historyItems != undefined) {
        if(localStorage.historyItems.length!=0) {
            var history_arr = localStorage.historyItems.split('|');
            history_html = '<ul>';
            for (i = 0; i < history_arr.length; i++) {
                if (history_arr[i]) {
                    history_html += '<li>\n' +
                        '             <a href="/bocomm/showOfferH5OfferSearchResult?keywords=' + encodeURI(history_arr[i]) + '"><span>' + history_arr[i] + '</span></a>\n' +
                        '                    <i tag="' + history_arr[i] + '"></i>\n' +
                        '                </li>';
                }
            }
            history_html += '</ul>';
            $('.historyBox').show();
        }
        else{
            $('.historyBox').hide();
        }

    }
    else {
        $('.historyBox').hide();
    }
    $('#historyContent').html(history_html);
    $(".history i").click(function () {
        $(this).parent('li').remove();
        $(".history ul").each(function () {
            var li_length = $(".history li").length;
            if (li_length == 0) {
                $(".history p").show();
            }
        });
        removeHistoryItems($(this).attr('tag'));
    });
}


function setHistoryItems(keyword) {
    let {historyItems} = localStorage;
    if (historyItems === undefined) {
        localStorage.historyItems = keyword;
    } else {
        historyItems = keyword + '|' + historyItems.split('|').filter(e => e != keyword).join('|');
        localStorage.historyItems = historyItems;
    }
}

function removeHistoryItems(keyword) {
    var remove_word = keyword + '|';
    localStorage.historyItems = String(localStorage.historyItems).replace(remove_word, '');

}
