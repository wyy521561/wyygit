$('#buyQuick').click(function() {
	$(".buy_modal").show();
	$(".buy_bg").show(slow);
	$(".buyDetail").show(slow);
})
$(".buy_bg").click(function(){
	$(".buy_modal").hide();
	$(".buy_bg").hide(slow);
	$(".buyDetail").hide(slow);	
})

var star = false;
$(".star").click(function() {
	if(star == false) {
		$(".star").addClass("starOpen");
		
		star = true;
	} else {
		$(".star").removeClass("starOpen");
		star = false;
	};
})


var oneSuit = true;
$(".oneSuit").click(function(){
	if(oneSuit == false) {
		$(".oneSuit").addClass("oneSuitBorder");
		
		oneSuit = true;
	} else {
		$(".oneSuit").removeClass("oneSuitBorder");
		oneSuit = false;
	};
})
