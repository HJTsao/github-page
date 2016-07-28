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
	seperate();
	myPhoto();
	buttonclick();
});

var scrollSense = function(){
	$(window).scroll(function(){
		var nowTop = $(this).scrollTop();
		$('#scrollCount').remove();
		$('<p id="scrollCount">' + nowTop + '</p>').appendTo($('#scrollTop'));
	});

}

var seperate = function(){
	seperate1Out();
	seperate2Out();
}

var seperate1Out = function(){
	$(window).scroll(function(){
		var nowTop = $(this).scrollTop();
		if(nowTop >= 450){
			$('#seperate1').animate({'opacity':'1','width':'300px'},{duration:400,queue:false});
			$('.WhoAreYou h1').animate({'opacity':'1'},{duration:400,queue:false});
		}
		else{
			$('#seperate1').animate({'opacity':'0','width':'0px'},{duration:400,queue:false});
			$('.WhoAreYou h1').animate({'opacity':'0'},{duration:400,queue:false});
		}
	});
}

var seperate2Out = function(){
	$(window).scroll(function(){
		var nowTop = $(this).scrollTop();
		if(nowTop >= 1600){
			$('#seperate2').animate({'opacity':'1','width':'300px'},{duration:400,queue:false});
			$('.whatGame h1').animate({'opacity':'1'},{duration:400,queue:false});
		}
		else{
			$('#seperate2').animate({'opacity':'0','width':'0px'},{duration:400,queue:false});
			$('.whatGame h1').animate({'opacity':'0'},{duration:400,queue:false});
		}
	});
}

var myPhoto = function(){
	var topPhotoOn = false;
	var bottomPhotoOn
	$(window).scroll(function(){
		var nowTop = $(this).scrollTop();
		if(nowTop >= 750 && !topPhotoOn){
			$('#photo1').animate({'opacity':'1'},{duration:400,queue:false});
			$('#photo2').animate({'opacity':'1'},{duration:400,queue:false});
			topPhotoOn = true;
		}
		else if(nowTop < 750 && topPhotoOn){
			$('#photo1').animate({'opacity':'0'},{duration:400,queue:false});
			$('#photo2').animate({'opacity':'0'},{duration:400,queue:false});
			topPhotoOn = false;
		}
		if(nowTop>=1050 && !bottomPhotoOn){
			$('#photo3').animate({'opacity':'1'},{duration:400,queue:false});
			bottomPhotoOn = true;
		}
		else if(nowTop < 1050 && bottomPhotoOn){
			$('#photo3').animate({'opacity':'0'},{duration:400,queue:false});
			bottomPhotoOn = false;
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

var buttonclick = function(){
	/*$('#dot1').click(function(){
		$('.game2').fadeOut(500).removeClass('active-game');
		$('.game1').fadeIn(500).addClass('active-game');
		$('#dot2').removeClass('active-dot');
		$(this).addClass('active-dot');
	});*/

	/*$('#dot1').click(function(){
		$('.game2').fadeOut(500);
		$('.game2').delay(500).removeClass('active-game').delay(500);
		
		$('.game1').delay(500).addClass('active-game').fadeIn(500);
		$('#dot2').delay(230).removeClass('active-dot');
		
		$(this).delay(250).addClass('active-dot');
	});*/
	$('#dot1').click(function(){
		$('.game2').fadeOut(500);
		$('.game1').delay(500).fadeIn(500);
		$('#dot2').delay(230).removeClass('active-dot');
		
		$(this).delay(250).addClass('active-dot');
	});


	$('#dot2').click(function(){
		$('.game1').fadeOut(500);
		$('.game2').delay(500).fadeIn(500);
		$('#dot1').delay(230).removeClass('active-dot');
		
		$(this).delay(250).addClass('active-dot');
	});
}