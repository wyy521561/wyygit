	var goodsPrice = false;
$(".goodsPrice").click(function() {
	if(goodsPrice == false) {
		$(".priceDetail").each(function() {
				$(this).slideDown();
				$(".discountDetail").slideUp();
			   
		})
		goodsPrice = true;
	} else {
		$(".priceDetail").each(function() {
			    
				$(this).slideUp();
				
			
		})
		goodsPrice = false;
	};
})

var goodsDiscount = false;
$(".goodsDiscount").click(function() {
	if(goodsDiscount == false) {
		$(".discountDetail").each(function() {
				
				$(this).slideDown();
				$(".priceDetail").slideUp();
				
			
		})
		goodsDiscount = true;
	} else {
		$(".discountDetail").each(function() {
				$(this).slideUp();
				
			
		})
		goodsDiscount = false;
	};
})
var headerFenlei = true;
$(".headerFenlei").click(function() {
	if(headerFenlei == false) {
		$(".milk").show();
		$(".milkOpen").hide();
		headerFenlei = true;
	} else {
		$(".milk").hide();
		$(".milkOpen").show();
		headerFenlei = false;
	};
})

