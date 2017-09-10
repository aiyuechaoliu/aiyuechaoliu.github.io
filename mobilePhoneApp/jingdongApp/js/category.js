var new_max_box=document.getElementById("new-max_box");
var sidebar_ul=document.getElementById("sidebar").querySelector("ul");
var category_main=document.getElementById("category_main");
var category_content=category_main.querySelectorAll(".category_content");
var win_height;

//去除高度兼容性
if(document.body.clientHeight){
	win_height=document.body.clientHeight;
}else{
	win_height=document.documentElement.clientHeight;
}

setInterval(function(){
//设置左右俩部分宽度
	if(getStyle(new_max_box,"width")!="100%"){
		sidebar_ul.style.width= parseInt(getStyle(new_max_box,"width"))*0.2+"px";
		category_main.style.width= parseInt(getStyle(new_max_box,"width"))*0.8+"px";
	}
//设置右边的高度
	if(parseInt(getStyle(category_main,"height"))<(win_height-40)){
		category_main.style.height=(win_height-40)+"px";
	}
},30);

//闭包的方法写分类
var sidebar_li=sidebar_ul.querySelectorAll("li");
for(var i=0;i<sidebar_li.length;i++){
	sidebar_li[i].onclick=Roll(i);
}
function Roll(m){
	return function(){
		for(var j=0;j<sidebar_li.length;j++){
			sidebar_li[j].className="";
			category_content[j].className="category_content";	
		}
		sidebar_li[m].className="active";
		category_content[m].className="category_content active";
	}
}

function checkcookie(){
    var strcookie=document.cookie;
    if( strcookie == ""){
        window.location.href="login.html";
    }else{
         window.location.href="info.html";
	}
}

function getStyle(obj,attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
}