$(document).ready(function(){
	$('.front img').fadeIn(1000,function(){
		$('.front-text').css({'display':'block', 'opacity':'0'})
					    .animate({'opacity':'1', 'left':'18%'},1000,greetingOut);
	});

	$('.icon').mouseenter(function(){
		$(this).animate({'top':'-12%','opacity':'1'},{duration:200,queue:false})
			   .mouseleave(function(){
		 	   		$(this).animate({'top':'-6%','opacity':'0.8'},{duration:200,queue:false});
				});
		});
	scrollSense();
	seperate1Out();
});

var scrollSense = function(){
	$(window).scroll(function(){
		var nowTop = $(this).scrollTop();
		$('#scrollCount').remove();
		$('<p id="scrollCount">' + nowTop + '</p>').appendTo($('.WhoAreYou .row'));
	});

}

var seperate1Out = function(){
	$(window).scroll(function(){
		var nowTop = $(this).scrollTop();
		if(nowTop >= 400){
			$('#seperate1').animate({'opacity':'1','width':'300px'},{duration:400,queue:false});
			$('.WhoAreYou h1').animate({'opacity':'1'},{duration:400,queue:false});
		}
		else{
			$('#seperate1').animate({'opacity':'0','width':'0px'},{duration:400,queue:false});
			$('.WhoAreYou h1').animate({'opacity':'0'},{duration:400,queue:false});
		}
	});
}


		
var greetingOut = function(){
	$('.front-text')
					.animate({'opacity':'0'},500,linksIn);
}

var linksIn = function(){
	$('.front-text').remove();
	$('.links').css({'display':'block', 'opacity':'0'})
			   .animate({'opacity':'1'},500);
	$('.icon').animate({'top':'-6%','opacity':'0.8'},500);

}