$(function () {
	var tabsSwiper = new Swiper('.swiper-container', {
		speed: 500,
		onSlideChangeStart: function () {
			$(".tabs .active").removeClass('active');
			$(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
		}
	});

	$(".tabs a").on('touchstart mousedown', function (e) {
		e.preventDefault()
		$(".tabs .active").removeClass('active');
		$(this).addClass('active');
		tabsSwiper.swipeTo($(this).index());
	});

	$(".tabs a").click(function (e) {
		e.preventDefault();
	});
	var type = GetQueryString('type')
	$('.tabs').children('a').each(function () {
		if ($(this).html() == type) {
			$(this).addClass('active')
			tabsSwiper.swipeTo($(this).index());
		} else {
			$(this).removeClass('active')
		}
	})

	function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return decodeURI(r[2]);
		return null;
	}

});
