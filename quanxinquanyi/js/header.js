$(".first_menu_ul>li").each(function(){
	
	var e = $(this);
	console.log(e.children(".two_menu_box").length);
	e.children(".two_menu_box").length && e.addClass("has-two-menu");
});



$(".first_menu_ul_li").mouseover(function(){
	$(".header_block").addClass('is_open');
	$(this).addClass('is_open_li');
}).mouseout(function(){
	$(".header_block").removeClass('is_open');
	$(this).removeClass('is_open_li');
});


var mouseover_tid = [];
var mouseout_tid = [];
jQuery(document).ready(function() {
	jQuery('.first_menu_ul_li.has-two-menu').each(function(index) {
		jQuery(this).hover(
			function() {
				var _self = this;
				clearTimeout(mouseout_tid[index]);
				mouseover_tid[index] = setTimeout(function() {
					jQuery(_self).find('.two_menu_box').slideDown(300);
				}, 50);
			},
			function() {
				var _self = this;
				clearTimeout(mouseover_tid[index]);
				mouseout_tid[index] = setTimeout(function() {
					jQuery(_self).find('.two_menu_box').slideUp(300);
				}, 50);
			}

		);
	});
});

$(".two_menu_li>ul>li").each(function() {
	var e = $(this);
	e.children(".dropdown").length && e.addClass("has-three-menu")
});

$('.two_menu_li>ul>li.has-three-menu').mouseover(function() {

	$(this).find(".dropdown").css('display', 'block');
	$(this).find("a").addClass('arrow');

	var twoMenuUlOffset = $(".two_menu_ul").offset();
	var navWidth = $(".two_menu_ul").width();
	var aOffset = $(this).find("a").offset();
	var aHeight = $(this).find("a").height();

	console.log('aHeight=' + aHeight);
	console.log('dropdownHeight=' + dropdownHeight);

	$(this).find(".dropdown").css({
		'width': navWidth,
		'left': -(aOffset.left - twoMenuUlOffset.left),
	});
	var dropdownHeight = $(this).find('.dropdown').height();
}).mouseout(function() {
	$(this).find("a").removeClass('arrow');
	$(this).find(".dropdown").css({
		'display': 'none'
	})
})

var mouseover_login_tid = [];
var mouseout_login_tid = [];
jQuery(document).ready(function() {
	jQuery('.login_popup_parent').each(function(index) {
		jQuery(this).hover(
			function() {
				var _self = this;
				clearTimeout(mouseout_login_tid[index]);
				mouseover_login_tid[index] = setTimeout(function() {
					jQuery(_self).find('.login_popup_block').slideDown(300);
				}, 50);
			},
			function() {
				var _self = this;
				clearTimeout(mouseover_login_tid[index]);
				mouseout_login_tid[index] = setTimeout(function() {
					jQuery(_self).find('.login_popup_block').slideUp(300);
				}, 50);

			}

		);
	});
});

$(".login_popup_parent").mouseover(function() {
	if($(".header_block").hasClass('new_height')) {
		$(this).addClass('is_open_li');
	} else {
		$(".header_block").addClass('is_open');
		$(this).addClass('is_open_li');
	}
}).mouseout(function() {
	$(".header_block").removeClass('is_open');
	$(this).removeClass('is_open_li');
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	if(top > 0) {
		$(".header_block").addClass('new_height');
	}
});

var headerOffTop = $(".header_block").offset().top;
$(document).scroll(function() {
	var scTop = document.documentElement.scrollTop || document.body.scrollTop;
	if(scTop > 0) {
		if($(".header_block").hasClass('is_open')) {
			
			
		} else {
			$(".header_block").addClass('new_height');
		}
	} else {
		$(".header_block").removeClass('new_height');
	}
})
