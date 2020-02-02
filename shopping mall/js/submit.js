$('#information').click(function() {
	$(".address_modal").show();
	$(".address_bg").show();
	$(".addressDetail").show();

})
$(".address_bg").click(function() {
	$(".address_modal").hide();
	$(".address_bg").hide();
	$(".addressDetail").hide();

})

$(".addNewAddress").click(function() {

	$(".shouhuo_modal").show();
	$(".shouhuo_bg").show();
	$(".shouhuoInformation").show();
})
$(".shouhuo_bg").click(function() {

	$(".shouhuo_modal").hide();
	$(".shouhuo_bg").hide();
	$(".shouhuoInformation").hide();
})

$(".makeSure").click(function() {
	$(".address_modal").hide();

	$(".shouhuo_modal").hide();

})

$(".cancel").click(function() {
	$(".address_modal").hide();

	$(".shouhuo_modal").hide();

})

$(".delete").click(function() {
    $(".makeDecision_modal").show();
    $(".makeDecision_bg").show();
    $(".makeDecisionDetail").show();
	
})
$(".delete").click(function(){
	$(this).parent(".addressInformation").remove();
})


var ziTiCircleLi = false;
$(".ziTiCircleLi").click(function() {
	if(ziTiCircleLi == false) {
		$(".ziTiXiangQi").show();

		ziTiCircleLi = true;
	} else {
		$(".ziTiXiangQi").hide();

		ziTiCircleLi = false;
	};

})

$(".ziTiCircleLi").click(function() {

	$(".ziTi_modal").show();
	$(".ziTi_bg").show();
	$(".ziTiInformation").show();
})

$(".selectCancel").click(function() {
	$(".ziTi_modal").hide();

})

$(".selectMakeSure").click(function() {
	$(".ziTi_modal").hide();
})

$(".jiFenCircleLi").click(function() {

	$(".jiFen_modal").show();
	$(".jiFen_bg").show();
	$(".jiFenDetail").show();
})

$(".jiFenCancel").click(function() {
	$(".jiFen_modal").hide();
})

$(".jiFenSure").click(function() {
	$(".jiFen_modal").hide();
})

$(".extraCircleLi").click(function() {

	$(".vipExtra_modal").show();
	$(".vipExtra_bg").show();
	$(".vipExtraDetail").show();
})

$(".extraCancel").click(function() {
	$(".vipExtra_modal").hide();
})

$(".extraSure").click(function() {
	$(".vipExtra_modal").hide();
})

$(".youHuiCircleLi").click(function() {

	$(".youHui_modal").show();
	$(".youHui_bg").show();
	$(".youHuiDetail").show();
})

$(".youHuiCancel").click(function() {
	$(".youHui_modal").hide();
})

$(".youHuiSure").click(function() {
	$(".youHui_modal").hide();
})

$(".expressCircle").click(function() {
	$(this).addClass("expressCircleOpen");
	$(".ziTi").find(".ziTiCircle").removeClass("expressCircleOpen");
	$(".ziTiXiangQi").hide();
})

$(".ziTiCircle").click(function() {
	$(this).addClass("expressCircleOpen");
	$(".express").find(".expressCircle").removeClass("expressCircleOpen");
})

$(".selectCircle").click(function() {
	$(this).addClass("selectCircleOpen");
	$(this).parents(".selectUl").siblings(".selectUl").find(".selectCircle").removeClass("selectCircleOpen");
})

$(".InformationLeft").click(function() {
	$(this).addClass("InformationLeftOpen");
	$(this).parents(".addressInformation").siblings(".addressInformation").find(".InformationLeft").removeClass("InformationLeftOpen");
})

var jiFenCircle = false;
$(".jiFenCircle").click(function() {
	if(jiFenCircle == false) {
		$(this).addClass("jiFenCircleOpen");
		jiFenCircle = true;
	} else {
		$(this).removeClass("jiFenCircleOpen");
		jiFenCircle = false;
	}

})

var extraCircle = false;
$(".extraCircle").click(function() {
	if(extraCircle == false) {
		$(this).addClass("extraCircleOpen");
		extraCircle = true;
	} else {
		$(this).removeClass("extraCircleOpen");
		extraCircle = false;
	}
})

var youHuiCircle = false;
$(".youHuiCircle").click(function() {
	if(youHuiCircle == false) {
		$(this).addClass("youHuiCircleOpen");
		youHuiCircle = true;
	} else {
		$(".youHui_modal").hide();
		$(this).removeClass("youHuiCircleOpen");
		youHuiCircle = false;
	}
})

