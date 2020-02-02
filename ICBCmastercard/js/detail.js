
var fitCard = false;
$(".fitCard").click(function() {
	if (fitCard == false) {
		$(".card").each(function() {

			$(this).show();

		})
		fitCard = true;
	} else {
		$(".card").each(function() {
			$(this).hide();

		})
		fitCard = false;
	};
})

var detailRules = false;
$(".detailRules").click(function() {
	if (detailRules == false) {
		$(".rules").each(function() {

			$(this).show();

		})
		detailRules = true;
	} else {
		$(".rules").each(function() {
			$(this).hide();

		})
		detailRules = false;
	};
})
