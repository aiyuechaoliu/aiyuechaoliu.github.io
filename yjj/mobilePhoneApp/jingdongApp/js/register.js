//设置大div的高度
var new_max_box=document.getElementById("new-max_box");
if(document.body.clientHeight){
	new_max_box=document.body.clientHeight+"px"
}else{
	new_max_box.style.height=document.documentElement.clientHeight+"px";
}
/*点击更换密码框为文本框*/
var opentxt=document.querySelector(".icon-eye-open");

opentxt.onclick=function clickText(){
	if(this.className=="icon-eye-open icon-eye-close"){
		this.className="icon-eye-open";
		this.previousSibling.previousSibling.type="text";
	}else{
		this.className="icon-eye-open icon-eye-close"
		this.previousSibling.previousSibling.type="password";
	}
}

//注册验证
var Prompt=document.querySelector("form").querySelectorAll("b")[1];
//提示

function checkForm(){
	if(checkUsername()&&checkPassword()&&checkPwd()&&checkvalidate()){
		
		var password_val = document.getElementById("password").value;
		var username_val = document.getElementById("username").value;
		setCookie("username",username_val,1)
		setCookie("password",password_val,1)
		
		alert("注册完成");
		return true;
	}else{
		change();
		return false;
	}
}

function checkUsername(){
	var username = document.getElementById("username");
//	var regexp = /^\w{4,16}$/;
	if(username.value!=""){
		Prompt.innerHTML = "";
		return true;
	}else{
		Prompt.innerHTML = "请输入你的用户名";
		change();
		return false;
	}
}

function checkPassword(o){
	var password = document.getElementById("password");
	var regexp = /^[A-Za-z0-9]{6,16}$/;
	if(regexp.test(password.value)){
		Prompt.innerHTML = "";
		return true;
	}else{
		Prompt.innerHTML = "请输入6-20位登录密码";
		change();
		return false;
	}
}

function checkPwd(){
	var password = document.getElementById("password");
	var cPwd = document.getElementById("repassword");
	if(password.value===""){
		Prompt.innerHTML = "请先输入密码";
		change();
		return false;
	}else if(cPwd.value===password.value){
		Prompt.innerHTML = "";
		return true;
	}else{
		Prompt.innerHTML = "两次输入不一致,请重新输入";
		change();
		return false;
	}
}

function checkvalidate(){
	var validate=document.querySelector("form").querySelectorAll("div")[3].querySelector("b");
	var check=document.getElementById("check");
	if(check.value===""){
		Prompt.innerHTML = "请输入验证码";
		change();
		return false;
	}else if(check.value===validate.innerHTML){
		Prompt.innerHTML = "";
		return true;
	}else{
		Prompt.innerHTML = "验证码输入不正确，请重新输入";
		change();
		return false;
	}
}

//更换验证码
var validate=document.querySelector("form").querySelectorAll("div")[3].querySelector("b");
change();
function change(){
	var str="";
	for (var i = 0; i < 4; i++) {
		    var j = Math.floor(Math.random() * 10);
			str=str+j;
	}
	validate.innerHTML=str;
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
















