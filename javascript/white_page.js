var day27 = document.getElementById('day27');
var day28 = document.getElementById('day28');
var day29 = document.getElementById('day29');
	
day27.onclick = function() {
	document.getElementById('day27_content').style.display='block';
}
	
day28.onclick = function() {
	document.getElementById('day28_content').style.display='block';
}

day29.onclick = function() {
	document.getElementById('day29_content').style.display='block';
}

function closeWhiteWindow() {
	document.getElementById('day27_content').style.display='none';
	document.getElementById('day28_content').style.display='none';
	document.getElementById('day29_content').style.display='none';
}