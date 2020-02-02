$('.aboutUs').click(function() {
	$(".aboutUsDetail").show();
	$(".aboutUsDetailBg").show();
	$(".aboutUsDetailBlock").show();
})
$('.aboutUsDetailBg').click(function() {
	$(".aboutUsDetailBlock").hide();
	setTimeout(function() {
		$(".aboutUsDetail").hide();
	})
});
$('.problem').click(function() {
	$(".problemDetail").show();
	$(".problemDetailBg").show();
	$(".problemDetailBlock").show();
})
$('.problemDetailBg').click(function() {
	$(".problemDetailBlock").hide();
	setTimeout(function() {
		$(".problemDetail").hide();
	})
});
