let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "images/dogpic.png") {
      myImage.setAttribute('src','images/Puppy1.png');
    } else {
      myImage.setAttribute('src','images/dogpic.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = "Your's Puppy, " + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Your's Puppy, " + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  