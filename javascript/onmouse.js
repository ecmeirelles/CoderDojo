// Javascript code binds the image's mouse-over event to the function changeOver
document.getElementById("facebook").onmouseover = facebookChangeOver;
document.getElementById("wordpress").onmouseover = wordpressChangeOver;
document.getElementById("twitter").onmouseover = twitterChangeOver;
document.getElementById("google+").onmouseover = googleChangeOver;

// Javascript code binds the image's mouse-out event to the function changeOut
document.getElementById("facebook").onmouseout = facebookChangeOut;
document.getElementById("wordpress").onmouseout = wordpressChangeOut;
document.getElementById("twitter").onmouseout = twitterChangeOut;
document.getElementById("google+").onmouseout = googleChangeOut;

// These are the changeOver() functions
function facebookChangeOver() {
	document.getElementById("facebook").src = "images/facebook_red.png";
}

function wordpressChangeOver() {
	document.getElementById("wordpress").src = "images/wordpress_gray.png";
}

function twitterChangeOver() {
	document.getElementById("twitter").src = "images/twitter_blue.png";
}

function googleChangeOver() {
	document.getElementById("google+").src = "images/google+_green.png";
}

// These are the changeOut() functions
function facebookChangeOut() {
	document.getElementById("facebook").src = "images/facebook.png";
}

function wordpressChangeOut() {
	document.getElementById("wordpress").src = "images/wordpress.png";
}

function twitterChangeOut() {
	document.getElementById("twitter").src = "images/twitter.png";
}

function googleChangeOut() {
	document.getElementById("google+").src = "images/google+.png";
}