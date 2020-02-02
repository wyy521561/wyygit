var moRenCircle = false;
$(".moRenCircle").click(function(){
	if( moRenCircle == false){
		$(this).addClass("moRenCircleOpen");
	    moRenCircle = true;
	}else{
		$(this).removeClass("moRenCircleOpen");
		moRenCircle = false;
	}
	
})
