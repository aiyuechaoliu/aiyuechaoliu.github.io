var autoinp=document.getElementById("main_top").querySelector("input");
var new_max_box=document.getElementById("new-max_box");
var search=document.getElementById("search");
autoinp.onfocus=function(){
	document.body.style.background="#f8f8f8";
	new_max_box.style.display="none";
	search.style.display="block";
	document.querySelector("footer").style.display="none";
}

var close=search.querySelector("span");
close.onclick=function(){
	document.body.style.background="";
	new_max_box.style.display="block";
	search.style.display="none";
	document.querySelector("footer").style.display="block";
}



//快讯
var newsflash_ul=document.getElementById("newsflash").getElementsByTagName("ul")[0];
var searchTop=0;
var time1=setInterval(function(){
	if(searchTop<=-50){
		searchTop=0;
		newsflash_ul.style.marginTop=searchTop+"px";
	}else{
		searchTop-=25;
		newsflash_ul.style.marginTop=searchTop+"px";
	}
},3000)

//轮播图
var num=0;
var index;
var banner_content=document.getElementById("banner_content");
var li=document.getElementById("banner").getElementsByTagName("li");
var a_img=banner_content.getElementsByTagName("a");
var time=setInterval(autoMove,2000);
function autoMove(){
	index=num+1;
	if(index==a_img.length){
		index=0;//超出最后一张图片就返回第一张
	}
		move1();//没有对象调用，this指向window
	}
	banner_content.onmouseover=function(){
		clearInterval(time);
	}
	banner_content.onmouseout=function(){
		time=setInterval(autoMove,5000);
	}
	for(var i=0;i<a_img.length;i++){
		li[i].index=i;//存储对应<a>的下标
		li[i].onmouseover=move1; //有对象调用，this指向调用者
	}
	function move1(){
		li[num].className="";
		li[this.index].className="active";
		a_img[num].className="";
		a_img[this.index].className="active";
		num=this.index;
	}
	
	function checkcookie()
   {
      var strcookie=document.cookie;
       if( strcookie == ""){
          window.location.href="login.html";
        }else{
          window.location.href="info.html";
		}
    }















