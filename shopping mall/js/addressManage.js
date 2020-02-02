
var cancel = false;
$(".cancel").click(function(){
	if(cancel == false){
	$(this).find(".addressCircle").addClass("addressCircleOpen");
	cancel = true;
	}else{
	 $(this).find(".addressCircle").removeClass("addressCircleOpen");
	 cancel = false;
	}
})

var cancelMoRen = false;
$(".cancel").click(function(){
	if(cancelMoRen == false){
	$(this).find(".cancelMoRen").addClass("cancelMoRenOpen");
	cancelMoRen = true;
	}else{
	 $(this).find(".cancelMoRen").removeClass("cancelMoRenOpen");
	 cancelMoRen = false;
	}
})


$(".delete").click(function(){
	$(this).parents(".addressInformation").remove();
})
	
$(".cancel").click(function(){
    $(this).children(".addressCircle").addClass("addressCircleOpen");
    $(this).children(".cancelMoRen").addClass("cancelMoRenOpen");
    $(this).parents(".addressInformation").siblings(".addressInformation").find(".addressCircle").removeClass("addressCircleOpen");
    $(this).parents(".addressInformation").siblings(".addressInformation").find(".cancelMoRen").removeClass("cancelMoRenOpen");
})
