$(document).ready(function() {
	if ('scrollRestoration' in history) {
	    history.scrollRestoration = 'manual';
	}
	window.scrollTo(0,0);

	// Canvas Script
	setTimeout(function(){
		    	
		var counter = 1;
		var imgArr = [];

		function FormatNumberLength(num, length) {
		    var r = "" + num;
		    while (r.length < length) {
		        r = "0" + r;
		    }
		    return r;
		}

		for (i=1; i < 981; i++) 
		{ 
		    imgArr[i] = new Image;
		    imgArr[i].src = 'images' + '/' + FormatNumberLength(i,4) + '.png';
		}
		setInterval(function(){
			var myCanvas = document.getElementById('myCanvas');
			var ctx = myCanvas.getContext('2d');
			
			// img.onload = function(){
			// 	ctx.drawImage(img,0,0);
			// };
			
			ctx.clearRect(0,0,1920,1080);
			ctx.drawImage(imgArr[counter],0,0);
			//console.log(imgArr[counter]);

			if(counter == 980) counter = 1;
			
			// assuming that your image sequence is named 1.jpg, 2.jpg, 3.jpg ....
			//img.src = 'images' + '/' + '77.png';

			counter++;

		}, 5);	

	}, 15000);	

	setTimeout(function () {
	    document.getElementById('vid').style.display='none';
	}, 16000);

	$('.logo-animation').css({display: 'none'});
	$('body').toggleClass("overflow-hidden");

	setTimeout(function () {
	  $('.logo-animation').css({display: 'block'});
	 	$('body').toggleClass("overflow-hidden");
	}, 16005);

	window.onscroll = function() {myFunction()};

	var header = document.getElementById("main-canvas");
	var sticky = header.offsetTop;

	function myFunction() {
	  if (window.pageYOffset > sticky) {
	    $('#myCanvas').addClass("sticky");
	  } else {
	    $('#myCanvas').removeClass("sticky");
	  }
	}

});


