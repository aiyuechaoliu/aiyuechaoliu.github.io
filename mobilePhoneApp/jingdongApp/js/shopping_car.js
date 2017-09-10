$(function(){
	if($("#new-max_box").height()<$(window).height()){
		$("#new-max_box").css("height",parseInt($(window).height())+"px");
	}
	
	$("footer a").click(function(){
		$(this).addClass("active");
		$("this").siblings("a").removeClass("active");
	});
	$(".title").click(function(){
		$(this).toggleClass("select");
		if($(this).hasClass("select")){
			$(this).siblings().children(".product_content").addClass("select");
			$(this).text("取消");
		}else{
			$(this).siblings().children(".product_content").removeClass("select");
			$(this).text("全选");
		}
		if($(".title").hasClass("select")||$(".product_content").hasClass("select")){
			$(".pay").css("display","block");
			for(var i=0,total=0;i<$(".main .product_content.select").length;i++){
				var x=$(".main .product_content.select")[i];
				total+=$(x).children(".detail").children(".price_num").children(".price").children("span").text()*$(x).children(".detail").children(".price_num").children(".num").children("span").text();
			}
			$(".pay p span").text(parseFloat(total).toFixed(2));
			$(".pay a span").text($(".main .product").length);
		}else{
			$(".pay").css("display","none");
		}
	});
	
	$(".product_content").click(function(){
		$(this).toggleClass("select");
		if($(".main .product_content.select").length===0){
			$(".title").removeClass("select");
		}
		if($(".title").hasClass("select")||$(".product_content").hasClass("select")){
			$(".pay").css("display","block");
			$(".pay a span").text($(".main .product_content.select").length);
			for(var i=0,total=0;i<$(".main .product_content.select").length;i++){
				var x=$(".main .product_content.select")[i];
				total+=$(x).children(".detail").children(".price_num").children(".price").children("span").text()*$(x).children(".detail").children(".price_num").children(".num").children("span").text();
			}
			$(".pay p span").text(parseFloat(total).toFixed(2));
		}else{
			$(".pay").css("display","none");
		}
	});
	
	$(".num button").click(function(event){
		event.stopPropagation();
		var elemt=event.target;
		if($(elemt).text()==="+"){
			var add=parseInt($(elemt).prev().text());
			$(elemt).prev().text(add+1);
		}else if($(elemt).text()==="-"){
			var sub=parseInt($(elemt).next().text());
			if(sub===1){
				alert("你购买的商品至少为1件");
				$(elemt).attr("disabled");
				return;
			}else{
				$(elemt).removeAttr("disabled");
			}
			$(elemt).next().text(sub-1);
		}
		for(var i=0,total=0;i<$(".main .product_content.select").length;i++){
			var x=$(".main .product_content.select")[i];
			total+=$(x).children(".detail").children(".price_num").children(".price").children("span").text()*$(x).children(".detail").children(".price_num").children(".num").children("span").text();
		}
		$(".pay p span").text(parseFloat(total).toFixed(2));
	});
	
	$(".edit").click(function(){
		if($(this).text()==="编辑"){
			$(this).text("取消");
			$(".product_content").css("right","60px");
			$(".del").css("right","0px");
		}else{
			$(this).text("编辑");
			$(".product_content").css("right","0px");
			$(".del").css("right","-60px");
		}
	});
	
	
	$(".del").click(function(){
		var flag=confirm("确认删除该商品么？");
		if(flag){
			if(($("#new-max_box").height()-55)<$(window).height()){
				$("#new-max_box").css("height",parseInt($(window).height())+"px");
			}
			$(this).parent(".product").remove();
			for(var i=0,total=0;i<$(".main .product_content.select").length;i++){
				var x=$(".main .product_content.select")[i];
				total+=$(x).children(".detail").children(".price_num").children(".price").children("span").text()*$(x).children(".detail").children(".price_num").children(".num").children("span").text();
			}
			$(".pay a span").text($(".main .product_content.select").length);
			$(".pay p span").text(parseFloat(total).toFixed(2));
			if($(".main .product").length===0){
				$(".main").css("display","none");
				$(".empty").css("display","block");
				$(".pay").css("display","none");
				$(".edit").text("编辑");
			}
		}else{
			return;
		}
	});
	
//	获取属性值
//	function getStyle(obj,attr) {
//  	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
//	}
})