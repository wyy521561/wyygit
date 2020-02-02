$(".delete").click(function() {
	//var shop = $(this).parentNode;
	//shop.parentNode.removeChild(shop);
	$(this).parent(".shoppingDetail").remove();
})

var footerCircle = false;
$(".footerCircle").click(function() {
	if(footerCircle == false) {
		$(".shoppingCircle").addClass("shoppingCircleOpen");
		$(".footerCircle").addClass("footerCircleOpen");
		footerCircle = true;
	} else {
		$(".shoppingCircle").removeClass("shoppingCircleOpen");
		$(".footerCircle").removeClass("footerCircleOpen");
		footerCircle = false;
	};
})

//var shoppingCircle = false;
$(".shoppingCircle").click(function() {

	//	if(shoppingCircle == false){
	//		$(this).addClass("shoppingCircleOpen");
	//		shoppingCircle = true;
	//	} else{
	//		$(this).removeClass("shoppingCircleOpen");
	//		shoppingCircle = false;
	//	}
	if($(this).hasClass("shoppingCircleOpen")) {
		$(this).removeClass("shoppingCircleOpen");
		//shoppingCircle = false;
	} else {
		$(this).addClass("shoppingCircleOpen");
		//shoppingCircle = true;

	}
})



// var Delete = document.getElementsByClassName("delete");
// function deleteElement(Delete){
//      Delete.parentNode.parentNode.removeChild(Delete.parentNode);
// }