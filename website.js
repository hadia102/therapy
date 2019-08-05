alert("i am peppa pig");

var pic = document.getElementById("peppa");

var imageList = ["peppa.jpg", "peppa2.jpg","peppa3.jpg"];

var index = 0;

function slideshow (){
  pic.setAttribute('src', imageList[index]);

  if (index == imageList.length -1){
        index=0;
  }
  else{
    index++;
  }
}

setInterval(slideshow,2000);
