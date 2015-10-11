//character movement controls
function onUpdate()
{
if (keys.w)
	object.autoMoveForward(5.0);
if (keys.s)
	object.autoMoveBack(5.0);
if (keys.a)
	object.autoMoveLeft(5.0);
if (keys.d)
	object.autoMoveRight(5.0);
} 
