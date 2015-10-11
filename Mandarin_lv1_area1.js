//timer setup
var timerRunning = true;
var minutes = 5;
var seconds = 0;

//creates initial timer setup
function onInit()
{
	scene.setTimer("clock", 1);
	
   scenes.scene_1.objects.txTime.text = "Time: " + minutes + ":" + seconds;

}	
//basic function of timer when running	
	function onTimer(e) 
{
	if (e == "clock") 
	{
		if (timerRunning) 
		{
			decreaseSecond();
			scene.setTimer(e, 1);
		}
	}
}
	if (seconds <10) 
{
		seconds = "0" + seconds;
}
//decreases time by seconds
function decreaseSecond() 
{
	seconds--;
	if (seconds < 0) 
	{
		seconds = 59;
		minutes--;
	}
	if (seconds < 10) 
	{
		seconds = "0" + seconds;
	}

	scenes.scene_1.objects.txTime.text = "Time: " + minutes + ":" + seconds;
}
