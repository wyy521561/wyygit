$(function () {
    $('.approve_info_foot input').click(function () {
        $('.if_approve').attr('ifcheck', '0');
        $(this).attr('ifcheck', '1');
    })

    $('#submit_approve').click(function () {
        form = {};
        form['order_token'] = GetUrlParam('orderid');
        form['if_approve'] = '';
        $('.if_approve').each(function () {
            if ($(this).attr('checked') == 'checked') {
                form['if_approve'] = $(this).attr('data-boolean')
            }
        });
        if (!form['if_approve']) {
            $.Toast('Lab Direct:', "请选择是否审批通过", "error", {
                position_class: 'toast-top-left',
                fullscreen: true,
                has_close_btn: false,
            });
        }
        form['approve_remark'] = $('#approve_remark').val();
        $.ajax({
            "dataType": "json",
            "type": "post",
            "url": "/LabDirect/customer/approveOrder/",
            data: JSON.stringify(form),
            success: function (data) {
                if (!data.error) {
                    window.location.href="/LabDirect/mobile/approve/";
                } else {
									console.log(data.error)
                }
            }
        })

    })
})

function GetUrlParam(paraName) {
    var url = document.location.toString();
    var arrObj = url.split("?");

    if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;

        for (var i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split("=");

            if (arr != null && arr[0] == paraName) {
                return arr[1];
            }
        }
        return "";
    }
    else {
        return "";
    }
}
