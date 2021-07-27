let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "images/dogpic.png") {
      myImage.setAttribute('src','images/Puppy1.png');
    } else {
      myImage.setAttribute('src','images/dogpic.png');
    }
}