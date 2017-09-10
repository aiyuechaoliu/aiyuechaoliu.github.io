var new_max_box=document.getElementById("new-max_box");
if(document.body.clientHeight){
	new_max_box=document.body.clientHeight+"px"
}else{
	new_max_box.style.height=document.documentElement.clientHeight+"px";
}

var form=document.getelement
function checkForm(){
	if(returnForm()){
		console.log("1");
		return true;
	}else{
		return false;
	}
}
function returnForm(){
	var user = document.getElementById("username").value;
	var pwd = document.getElementById("password").value;
	var coo = document.cookie;
	var arr = coo.split(";");
	var arr2=[];
	for (var i=0;i<arr.length;i++) {
		arr2[i]=arr[i].split("=");
	}
	console.log(arr2);
	if(user==arr2[0][1]){
		if(pwd!=arr2[1][1]){
			alert("密码不正确");
			return false;
		}else{
			alert("登录成功");
			return true;
		}
	}else{
		alert("用户名不正确");
		return false;
	}
}