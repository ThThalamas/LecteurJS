

function demarrage(){
	creationBaliseVideo();
	creationControleVideo();
}

function creationBaliseVideo(){
	var Div = document.getElementById("divPrincipale");
	var DivVideo = document.createElement("div");
	DivVideo.id = "DivVideo";
	Div.appendChild(DivVideo);

	var baliseVideo = document.createElement("video");
	baliseVideo.id = "baliseVideo";
	baliseVideo.poster = "http://camendesign.com/code/video_for_everybody/poster.jpg";
	baliseVideo.src = "https://www.quirksmode.org/html5/videos/big_buck_bunny.webm";
	DivVideo.appendChild(baliseVideo);
}

function creationControleVideo(){
	var Div = document.getElementById("divPrincipale");
	var baliseVideo = document.getElementById("baliseVideo");
	var DivControl = document.createElement("div");
	DivControl.id = "DivControl";
	Div.appendChild(DivControl);

	var butplay = document.createElement("button");
	butplay.id = "butplay";
	butplay.innerHTML = "PLAY";
	DivControl.appendChild(butplay);

	var butpause = document.createElement("button");
	butpause.id = "butpause";
	butpause.innerHTML = "PAUSE";
	DivControl.appendChild(butpause);

	butplay.addEventListener('click', function() {
		baliseVideo.play();
	})
	butpause.addEventListener('click', function() {
		baliseVideo.pause();
	})
}

