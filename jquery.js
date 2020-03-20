var playing = false;
var score;
var trialsleft;
var step;
var action;
var fruits = ['apple','banana','watermelon','mango','cherry','grapes','pear','peach','orange'];

$(function(){
	$("#startreset").click(function(){
		if(playing == true){
			location.reload();
		}else{
			playing = true;
			score = 0;
			$("#scorevalue").html(score);
			$("#trialsleft").show();
			trialsleft = 3;
			addHearts();
			$("#gameOver").hide();
			$("#startreset").html("Reset Game");
			startAction();
		}
	});
	$("#fruit1").mouseover(function(){
		score++;
		$("#scorevalue").html(score);
		// $("#slicesound")[0].play(); // JQuery version
		// document.getElementById("slicesound").play(); // JavaScript version
		clearInterval(action);
		//$("#fruit1").hide();
		//startAction();
		$("#fruit1").hide("explode", 500);
		//startAction();
		setTimeout(startAction, 504);
	});




// functions

	function addHearts(){
		$("#trialsleft").empty();
		for(i = 0; i < trialsleft; i++){
			$("#trialsleft").append('<img src="Images/heart.png" class="life">');
		}
	}

	function startAction(){
		$("#fruit1").show();
		chooseFruit();
		$("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -100});
		step = 1 + Math.round(5*Math.random());
		action = setInterval(function(){
			$("#fruit1").css('top', $("#fruit1").position().top + step);
			if($("#fruit1").position().top > $("#fruitsContainer").height()){
				if(trialsleft > 1){
					$("#fruit1").show();
					chooseFruit();
					$("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -100});
					step = 1 + Math.round(5*Math.random());
					trialsleft --;
					addHearts();
				}else{
					playing = false;
					$("#startreset").html('Start Game');
					$("#gameOver").show();
					$("#gameOver").html('<p>Game Over!</p><p>Your score is :' + score + '</p>');
					$("#trialsleft").empty();
					$("#trialsleft").hide();
					stopAction();
				}
			}
		}, 10);
	}

	function chooseFruit(){
		$("#fruit1").attr('src' , 'Images/' + fruits[Math.round(8*Math.random())] + '.png');
	}

	function stopAction(){
		clearInterval(action);
		$("#fruit1").hide();
	}
});
















