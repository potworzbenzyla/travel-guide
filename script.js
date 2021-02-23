///menu trigger
var isMenuOpen = false;

function menuTrigger(){
    if(isMenuOpen == false){
      document.getElementById("navigation").style.display = "block";
      isMenuOpen = true;
    }
    else{
      document.getElementById("navigation").style.display = "none";
      isMenuOpen = false;
    }
}

///photo slider
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
images[0] = "./pictures/museum.jpg";
images[1] = "./pictures/gateofdawn.jpg";

function changeImg(){
  document.slide.src = images[i];
	if(i < images.length - 1){
	  i++;
	} else {
		i = 0;
	}
	setTimeout("changeImg()", time);
}