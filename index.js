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
	var photoOn = false;
	var nowTop = $(window).scrollTop();
	$(window).scroll(function(){
		nowTop = $(this).scrollTop();
		if(nowTop >= 750 && !photoOn){
			$('#photo1').fadeTo(400,1);
			$('#photo2').delay(100).fadeTo(400,1);
			$('#photo3').delay(200).fadeTo(400,1);
			photoOn = true;
		}
		else if(nowTop < 750 && photoOn){
			$('#photo3').fadeTo(400,0);
			$('#photo2').delay(100).fadeTo(400,0);
			$('#photo1').delay(200).fadeTo(400,0);
			photoOn = false;
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
	$('#dot1').click(function(){
		$('.game2').slideUp(400,function(){$('.game2').removeClass('active-game');});
		$('.game1').delay(300).slideDown(400,function(){$('.game1').addClass('active-game');});
		$('#dot2').removeClass('active-dot');
		$(this).addClass('active-dot');
	});


	$('#dot2').click(function(){
		$('.game1').fadeOut(200,function(){$('.game1').removeClass('active-game');});
		$('.game2').fadeIn(200,function(){$('.game2').addClass('active-game');});
		$('#dot1').removeClass('active-dot');
		
		$(this).addClass('active-dot');
	});
}