$('#add_address_btn').click(function() {
	$(".add_address_modal").show();
	$(".add_address_bg").show();
	$(".add_address_block").animate({
		top: "15%"
	});
})
$('#close_add_address').click(function() {
	$(".add_address_block").animate({
		top: "-100%"
	}, 1000);
	setTimeout(function() {
		$(".add_address_modal").hide(100);
	}, 700)
});


var address_fold = false;
$(".address_fold").click(function() {
	if(address_fold == false) {
		$(".receiver_address_li").each(function() {
			if(!$(this).hasClass('default')) {
				
				$(this).slideUp();
				$(".address_fold").text("展开地址");
			}
		})
		address_fold = true;
	} else {
		$(".receiver_address_li").each(function() {
			if(!$(this).hasClass('default')) {
				$(this).slideDown();
				$(".address_fold").text("收起地址");
			}
		})
		address_fold = false;
	};
})



$(".remark_btn").click(function() {
	$(this).parent(".action_btn").siblings(".action_remark").toggle();
});

