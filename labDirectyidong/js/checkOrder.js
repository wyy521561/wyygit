$(function () {

	//默认选中第一个
	var addressItem = $(".address_item").eq(0);
	addressItem.addClass("default");
	addressItem.find(".check_li").find('input').attr("checked", true);
	addressItem.find(".check_li").find('.check_box').addClass('checked');


	//单选框
	$(".address_item .check_li").click(function () {
		$(this).parent(".address_item").addClass("default");
		$(this).parent(".address_item").siblings(".address_item").removeClass("default");
		$(this).parent(".address_item").siblings(".address_item").find('input').attr("checked", false);
		$(this).parent(".address_item").siblings(".address_item").find('.check_box').removeClass('checked');
		$(this).find('input').attr("checked", true);
		$(this).find('.check_box').addClass('checked');
		// recalculateTotal();
	});


	//默认选中第一个
	var invoice_item = $(".invoice_item").eq(0);
	invoice_item.addClass("default");
	invoice_item.find(".check_li").find('input').attr("checked", true);
	invoice_item.find(".check_li").find('.check_box').addClass('checked');


	//单选框
	$(".invoice_item .check_li").click(function () {
		$(this).parent(".invoice_item").addClass("default");
		$(this).parent(".invoice_item").siblings(".invoice_item").removeClass("default");
		$(this).parent(".invoice_item").siblings(".invoice_item").find('input').attr("checked", false);
		$(this).parent(".invoice_item").siblings(".invoice_item").find('.check_box').removeClass('checked');
		$(this).find('input').attr("checked", true);
		$(this).find('.check_box').addClass('checked');
		// recalculateTotal();
	});


	// 点击展开/收起
	var address_fold = false;
	$("#address_hide").click(function () {
		if (address_fold == false) {
			$(".address_item").each(function () {
				if (!$(this).hasClass('default')) {
					$(this).slideUp();
					$("#address_hide").text("点击展开");
				}
			});
			address_fold = true;
		} else {
			$(".address_item").each(function () {
				if (!$(this).hasClass('default')) {
					$(this).slideDown();
					$("#address_hide").text("点击收起");
				}
			});
			address_fold = false;
		}
	});

	// 点击展开/收起
	var invoice_fold = false;
	$("#invoice_hide").click(function () {
		if (invoice_fold == false) {
			$(".invoice_item").each(function () {
				if (!$(this).hasClass('default')) {
					$(this).slideUp();
					$("#invoice_hide").text("点击展开");
				}
			});
			invoice_fold = true;
		} else {
			$(".invoice_item").each(function () {
				if (!$(this).hasClass('default')) {
					$(this).slideDown();
					$("#invoice_hide").text("点击收起");
				}
			});
			invoice_fold = false;
		}
	});
	$('#confirm_order').click(function () {
		// if (!$('.receiver_address_li.checked').attr('data-id')) {
		// 	$.Toast('Lab Direct:', "请选择地址", "error", {
		// 		position_class: 'toast-top-left',
		// 		fullscreen: true,
		// 		has_close_btn: false,
		// 	});
		// 	return false
		// }
		// if (!$('.invoice_address_li.default').attr('data-id')) {
		// 	$.Toast('Lab Direct:', "请选择发票", "error", {
		// 		position_class: 'toast-top-left',
		// 		fullscreen: true,
		// 		has_close_btn: false,
		// 	});
		// 	return false
		// }
		form = {};
		form['address_id'] = $('.address_item').children('.check_li').children('.check_box.checked').attr('data-id');
		form['order_token'] = GetUrlParam('ordersn');
		form['bill'] = $('.invoice_item').children('.check_li').children('.check_box.checked').attr('data-id');
		form['remark'] = $('#order_remark').val();
		console.log(form)
		$.ajax({
			"dataType": "json",
			"type": "post",
			"url": '/LabDirect/customer/validOrder/',
			data: JSON.stringify(form),
			success: function (data) {
				window.location.href = `/LabDirect/mobile/submitOrder/?ordersn=${data.data}`;
			}
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


});