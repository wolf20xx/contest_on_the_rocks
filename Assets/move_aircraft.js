#pragma strict

var t = Time.deltaTime;
var accel = 1000.0;
var rot_power = 4.0;
	
function Start () {

}

function Update () {
	rigidbody.AddForce(
		(-transform.right * t * 2 + transform.forward * t) * accel ,
		ForceMode.Impulse
		) ;

}