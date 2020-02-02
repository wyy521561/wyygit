$('#add_invoice_btn').click(function() {
	$(".add_invoice_modal").show();
	$(".add_invoice_bg").show();
	$(".add_invoice_block").animate({
		top: "15%"
	});
})
$('#close_add_invoice').click(function() {
	$(".add_invoice_block").animate({
		top: "-100%"
	}, 1000);
	setTimeout(function() {
		$(".add_invoice_modal").hide(100);
	}, 700)
})

var invoice_fold = false;
$(".invoice_fold").click(function() {
	if(invoice_fold == false) {
		$(".invoice_address_li").each(function() {
			if(!$(this).hasClass('default')) {
				$(this).slideUp();
				$(".invoice_fold").text("展开地址");
			}
		})
		invoice_fold = true;
	} else {
		$(".invoice_address_li").each(function() {
			if(!$(this).hasClass('default')) {
				$(this).slideDown();
				$(".invoice_fold").text("收起地址");
			}
		})
		invoice_fold = false;
	};
})
$(".add").click(function() {
	var n =$(this).siblings('#num_val').val();
	var num = parseInt(n) + 1;
	$(this).siblings('#num_val').val(num);
});
//减的效果
$(".reduce").click(function() {
	var n = $(this).siblings('#num_val').val();
	if(n == 1) {
		return
	} else {
		var num = parseInt(n) - 1;
	}
	$(this).siblings('#num_val').val(num);
});