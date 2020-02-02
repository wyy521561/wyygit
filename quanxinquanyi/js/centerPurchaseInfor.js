$(document).ready(function(){
	$(".side_two_menu_ul li a.message").addClass("theme_color");
})
var clickup = true;
$(".clickup").click(function() {
	if(clickup == true) {
		$(".export").each(function() {
			
				
				$(this).slideUp();
			
			
		})
		clickup = false;
	} else {
		$(".export").each(function() {
		
				$(this).slideDown();

		})
		clickup = true;
	};
})
var clickup2 = true;
$(".clickup2").click(function() {
	if(clickup2 == true) {
		$(".templet").each(function() {
			
				
				$(this).slideUp();
			
			
		})
		clickup2 = false;
	} else {
		$(".templet").each(function() {
		
				$(this).slideDown();

		})
		clickup2 = true;
	};
})
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
var invoice_fold = false;
$(".invoice_fold").click(function() {
	if(invoice_fold == false) {
		$(".invoice_address_li").each(function() {
			if(!$(this).hasClass('default')) {
				$(this).slideUp();
				$(".invoice_fold").text("展开发票");
			}
		})
		invoice_fold = true;
	} else {
		$(".invoice_address_li").each(function() {
			if(!$(this).hasClass('default')) {
				$(this).slideDown();
				$(".invoice_fold").text("收起发票");
			}
		})
		invoice_fold = false;
	};
})