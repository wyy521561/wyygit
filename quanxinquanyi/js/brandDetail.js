$(".brand_more").click(function() {
	var brandDetailCloseHidden = $(".brand_detail_close_block").attr('data_hidden');
	if (brandDetailCloseHidden == "false") {
		$(".brand_detail_close_block").hide();
		$(".brand_detail_close_block").attr('data_hidden', 'true');

		$(".brand_detail_open_block").show();
		$(".brand_detail_open_block").attr('data_hidden', 'false');

		$(this).html('收起');

	} else {
		$(".brand_detail_close_block").show();
		$(".brand_detail_close_block").attr('data_hidden', 'false');

		$(".brand_detail_open_block").hide();
		$(".brand_detail_open_block").attr('data_hidden', 'true');
		$(this).html('更多');
	}

})
$(".class_more").click(function() {
	var classDetailOpenHidden = $(".class_detail_open_block").attr('data_hidden');
	if (classDetailOpenHidden == "false") {
		$(".class_detail_open_block").hide();
		$(".class_detail_open_block").attr('data_hidden', 'true');
		$(this).html('更多');
	} else {
		$(".class_detail_open_block").show();
		$(".class_detail_open_block").attr('data_hidden', 'false');
		$(this).html('收起');
	}
})

$('.class_detail_open_ul>li').each(function() {
	var e = $(this);
	e.children(".class_two_menu_block").length && e.addClass("has-two-menu");
	e.click(function() {
		var openUlOffset = $('.class_detail_open_ul').offset();
		e.siblings('li').removeClass('selected');
		e.siblings('li').find('.class_two_menu_block').hide();
		if (e.hasClass("has-two-menu")) {
			if (e.hasClass("selected")) {
				e.removeClass('selected');
				e.find('.class_two_menu_block').hide();
			} else {
				e.addClass('selected');
				e.find('.class_two_menu_block').show();
				var eOffset = e.offset();
				e.find('.class_two_menu_block').css("margin-left", openUlOffset.left - eOffset.left + 35);
			}
		} else {
			$('.class_detail_open_ul>li').removeClass('selected');
			$('.class_detail_open_ul>li').find('.class_two_menu_block').hide();
		}
	})
})
