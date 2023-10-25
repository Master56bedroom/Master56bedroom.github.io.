const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Untitled.webp") {
    myImage.setAttribute("src", "images/images.jfif");
  } else {
    myImage.setAttribute("src", "images/Untitled.webp");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Power scaling is fun, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Power scaling is fun, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
}