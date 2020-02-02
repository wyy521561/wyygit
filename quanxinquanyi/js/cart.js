$(".remark_btn").click(function(){
	$(this).parent(".action_btn").siblings(".action_remark").toggle();
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