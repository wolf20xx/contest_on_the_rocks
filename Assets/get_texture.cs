using UnityEngine;
using System.Collections;
using HTTPLib;

public class get_texture : MonoBehaviour {
	public string url = "";
	public float timeout = 10f;

	// Use this for initialization
	 void Start () {
		if (url == "") {
						url = "http://blog-imgs-44-origin.fc2.com/b/a/n/bansyuyarou/SaKNRLHVR.png";
						StartCoroutine (getTexture (url));
		} else {
			 //StartCoroutine (getTexture (url));
			getTextureWithHttp (url,timeout);
		}
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	IEnumerator getTexture(string url){
		WWW www = new WWW(url);
		yield return www; 
		Debug.Log ("www get");
		if(string.IsNullOrEmpty(www.error)){
			Texture2D tex2d = new Texture2D(www.texture.height, www.texture.height, TextureFormat.PVRTC_RGBA4, false, true);
			tex2d.anisoLevel = 0;
			www.LoadImageIntoTexture(tex2d);
			tex2d.Apply();
			renderer.material.mainTexture =  tex2d;
		}
	}

	void getTextureWithHttp(string url, float timeout){

		WWWClient client = new WWWClient(this, url);
		client.Timeout = timeout;
        client.OnDone = (WWW www) => {
						Debug.Log (www.text);
			if(string.IsNullOrEmpty(www.error)){
				Texture2D tex2d = new Texture2D(www.texture.height, www.texture.height, TextureFormat.PVRTC_RGBA4, false, true);
				tex2d.anisoLevel = 0;
				www.LoadImageIntoTexture(tex2d);
				tex2d.Apply();
				renderer.material.mainTexture =  tex2d;
			}
				};
		client.Request();
	}
}
