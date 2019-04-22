var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/setu.jpg') {
      myImage.setAttribute ('src','images/setu1.jpg');
    }else {
	  myImage.setAttribute ('src','images/setu.jpg');
	}
   
}