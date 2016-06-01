$(function(){

	/*点击footer切换背景颜色*/
	var Fbtn = $("footer a");
	$(Fbtn).on('click',function(){
		var _index = $(this).index();
		$(this).addClass('active').siblings('a').removeClass('active');
	});
	/*点击footer切换背景颜色*/
	/*nav-dropdown*/
	var list1 = $("#nav .nav-list1");
	$('.nav-dropdown').css({'display':'none'});
	$(list1).hover(function(){
		$(this).find('.nav-dropdown').slideDown(300).finish();
	},function(){
		$(this).find('.nav-dropdown').slideUp(300).finish();
	})
	/*nav-dropdown*/
})