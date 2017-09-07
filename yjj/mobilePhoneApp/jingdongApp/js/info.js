$(document).ready(function(){
		$("#new-max_box").css("height",parseInt($("#new-max_box").height()+85)+"px");
		
//顶部弹出菜单
//$("#btnJdkey").click(function() {
//	if ($("#jdkey").css("display") == "none") {
//		$("#jdkey").show()
//	} else {
//		$("#jdkey").hide()
//	}
//});

//选项卡
$('#my_focus').click(function(){
	$('#my_history').removeClass("current");
	$('#my_focus').addClass("current");
	$('#my_favorite').removeClass("current");
	$('.my_focus').show();
	$('.my_favorite').hide();
	$('.my_history').hide();
});

$('#my_favorite').click(function(){
	$('#my_history').removeClass("current");
	$('#my_focus').removeClass("current");
	$('#my_favorite').addClass("current");
	$('.my_favorite').show();
	$('.my_focus').hide();
	$('.my_history').hide();
});

$('#my_history').click(function(){
	$('#my_focus').removeClass("current");
	$('#my_favorite').removeClass("current");
	$('#my_history').addClass("current");
	$('.my_history').show();
	$('.my_focus').hide();
	$('.my_favorite').hide();
	});
	
});