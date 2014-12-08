#pragma strict

	var speed = 30.0;
function Start () {
	rigidbody.AddForce((transform.forward + transform.right) * speed, ForceMode.VelocityChange);
}

function Update () {

}