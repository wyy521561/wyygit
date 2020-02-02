$(function() {
	//加的效果
	$(".add").click(function() {
		var n = $(this).siblings('.num_val').val();
		var num = parseInt(n) + 1;
		$(this).siblings('.num_val').val(num);

	});
	//减的效果
	$(".reduce").click(function() {
		var n = $(this).siblings('.num_val').val();
		if(n == 1) {
			return
		} else {
			var num = parseInt(n) - 1;
		}
		$(this).siblings('.num_val').val(num);

	});
	//全选选择框
	$(".footer_top .check_li").click(function() {

		if($(this).find('.check_box').hasClass('checked')) {
			$(this).find('input').attr("checked", false);
			$(this).find('.check_box').removeClass('checked');
			$(".cart_box .cart_item").each(function() {
				$(this).find(".check_li").find('.check_box').removeClass('checked');
				$(this).find(".check_li").find('input').attr("checked", false);
			})
		} else {

			$(this).find('input').attr("checked", true);
			$(this).find('.check_box').addClass('checked');

			$(".cart_item").each(function() {
				$(this).find(".check_li").find('.check_box').addClass('checked');
				$(this).find(".check_li").find('input').attr("checked", true);
			})
		}
		recalculateTotal();
	});
	//单个选择框
	$(".cart_item .check_li").click(function() {
		if($(this).find('.check_box').hasClass('checked')) {
			$(this).find('input').attr("checked", false);
			$(this).find('.check_box').removeClass('checked');

			$(".footer_top .check_li").find('input').attr("checked", false);
			$(".footer_top .check_li").find('.check_box').removeClass('checked');
		} else {
			$(this).find('input').attr("checked", true);
			$(this).find('.check_box').addClass('checked');
		}
		recalculateTotal();
	});

	$('.num_val').bind('input propertychange keyup', function(e) {
		var num = Number($(this).val());
		if(num < 0) {
			num = 0;
			$(this).val(0)
		}
	});

	//点击编辑
	$(".header_order_right.edit").click(function() {
		$(this).hide();
		$(".header_order_right.finish").css("display", "flex");
		$(".footer_top .flex_box").hide();
		$(".footer_top .del_box").show();
		$(".footer_bottom").hide();
		$(".cart_item").each(function() {
			$(this).find(".check_li").find('.check_box').removeClass('checked');
			$(this).find(".check_li").find('input').attr("checked", false);
		});
		$(".footer_top .check_li").find('input').attr("checked", false);
		$(".footer_top .check_li").find('.check_box').removeClass('checked');
	});
	//点击完成
	$(".header_order_right.finish").click(function() {
		$(this).hide();
		$(".header_order_right.edit").show();
		$(".footer_top .flex_box").show();
		$(".footer_top .del_box").hide();
		$(".footer_bottom").show();
		$(".cart_item").each(function() {
			$(this).find(".check_li").find('.check_box').removeClass('checked');
			$(this).find(".check_li").find('input').attr("checked", false);
		});
		$(".footer_top .check_li").find('input').attr("checked", false);
		$(".footer_top .check_li").find('.check_box').removeClass('checked');
	})

});