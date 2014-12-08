#pragma strict

function Start () {

}


var accel = 1000.0;
var rot_power = 4.0;

function Update () {
	rigidbody.AddForce(
		(-transform.right * Input.GetAxisRaw("Vertical") + transform.forward * Input.GetAxisRaw("Horizontal")) * accel ,
		ForceMode.Impulse
	);
	//transform.RotateAround (Vector3.zero, Vector3.zero, 20 * Time.deltaTime);
	//transform.Rotate(0, 20 * Time.deltaTime, 0, Space.World);
}