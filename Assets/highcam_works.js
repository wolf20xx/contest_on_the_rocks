#pragma strict

var rot = "right";
var pan_speed = 3;

function Start () {
	
}

function Update () {
	update_tilt();
}

function update_tilt(){
//41,252,21 -45,204,315
	var t = Time.deltaTime;
	var p = pan_speed;
	if (rot == "right"){	
		transform.Rotate(p * t,(p+1) * t,0);
		if(transform.rotation.eulerAngles.x > 0 && transform.rotation.eulerAngles.x > 60 ){
			rot = "left";
		}
	}else if(rot == "left")
	{
		Debug.Log(transform.rotation.eulerAngles);
		transform.Rotate(-p * t,-(p+1) * t,0);
		if(transform.rotation.eulerAngles.x  <  30 && transform.rotation.eulerAngles.x > 0  ){	
			rot = "right";
		}
	}
	
	//transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.LookRotation(Vector3(100,200,350)),0.2);
}