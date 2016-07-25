$(document).ready(function(){
	$('.front img').fadeIn(1000,function(){
		$('.front-text').css({'display':'block', 'opacity':'0'})
					    .animate({'opacity':'1', 'left':'24%'},1000,greetingOut);
	});
});

var greetingOut = function(){
	$('.front-text')
					.animate({'opacity':'0'},500,linksIn);
}

var linksIn = function(){
	$('.front-text').remove();
	$('.links').css({'display':'block', 'opacity':'0'})
			   .animate({'opacity':'1'},500);

}