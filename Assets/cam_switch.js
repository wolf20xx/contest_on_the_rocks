#pragma strict

var cameras : Camera[];
var numMain : int = 0;
 
function Start () {
    cameras[0] = GameObject.Find("Main Camera").GetComponent("Camera");
    cameras[1] = GameObject.Find("Sub Camera").GetComponent("Camera");
    SelectCamera(2);
    numMain = 0;
    //Debug.Log(numMain);
}

function Update () {
	if(Input.GetKeyDown(KeyCode.C))
	{
		SelectCamera((numMain++) % cameras.length);
	}
}

function SelectCamera(selectID : int) {
    for(var i = 0; i < cameras.length; i++) {
       cameras[i].enabled = false;
    }
    cameras[selectID].enabled = true;
}