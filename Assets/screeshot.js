#pragma strict

var format = "yyyy-MM-dd-HH-mm-ss";

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.Space) && Input.GetKeyDown(KeyCode.S)){
            Application.CaptureScreenshot(Application.dataPath + "/" + System.DateTime.Now.ToString(format) +".png");
            }

}