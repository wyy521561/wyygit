(function() {
	var html = document.documentElement;
	var width = html.getBoundingClientRect().width;
	html.style.fontSize = width / 15 + 'px'; //至于除数15可自行设置
	//1rem=50px; 15rem=750px;2倍算
})()