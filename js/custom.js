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

	for (i=1; i< 981; i++) 
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

		// I had 4 images in my folder so I checked with 4.
		if(counter == 980) counter = 1;
		
		// assuming that your image sequence is named 1.jpg, 2.jpg, 3.jpg ....
		//img.src = 'images' + '/' + '77.png';

		counter++;
	
	// I set the interval to 100 ms, increase or decrease as per your need.
	// If you don't want loop use clearTimeout()
	}, 5);	

}, 17000);			

//document.getElementById('vid').play();
setTimeout(function () {
    document.getElementById('vid').style.display='none';
}, 16000);
//return false;

$(".logo-animation img").delay(19000).animate({
	top: '-50%',
}, 2000);


var canvas = document.getElementById("myCanvasText");
var ctx=canvas.getContext("2d");
ctx.font="60px Arial";
ctx.fillStyle = "white";
ctx.textAlign = "left";
ctx.fillText("The First & Only Tankless Inhaled Nitric Oxide Delivery System", 100, 100);

