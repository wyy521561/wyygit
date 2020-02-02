$(function () {

	isLogin()
	$('#login').click(function () {
		var form = {};
		form['code'] = getQueryVariable('code');
		form['username'] = $('#username').val();
		form['password'] = $('#password').val();
		$.ajax({
			"dataType": "json",
			"type": "post",
			"url": "/LabDirect/api/login/",
			data: JSON.stringify(form),
			success: function (data) {
				if (!data.error) {
					console.log(data.data)
					localStorage.setItem("username", data.data.username)
					localStorage.setItem("password", data.data.password)
					window.location.href = "/LabDirect/mobile/index/";
				} else {
					alert(data.error)
				}
			}
		});
	})

	function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(null);
	}

	function isLogin() {
		$('.loading').show()
		$('.login_header').hide()
		$('.form').hide()
		var username = localStorage.getItem("username");
		var password = localStorage.getItem("password");
		if (!username||!password){
			$('.loading').hide()
			$('.login_header').show()
			$('.form').show()
			return
		}
		if (username != '' && password != '') {
			var form = {};
			form['username'] = username
			form['password'] = password
			$.ajax({
				"dataType": "json",
				"type": "post",
				"url": "/LabDirect/api/login/",
				data: JSON.stringify(form),
				success: function (data) {
					if (!data.error) {
						console.log(data.data)
						localStorage.setItem("username", data.data.username)
						localStorage.setItem("password", data.data.password)
						window.location.href = "/LabDirect/mobile/index/";
					} else {
						alert(data.error)
					}
				}
			});
		}else{

		}

	}
})
