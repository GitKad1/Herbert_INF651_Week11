/* Practice Assignment 11:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

/////////////////
// NOTE: Questions 2 and 5 are about toggling. 
// While Part 1 is wrong, Part 2 will be correct. 
// This is not an error. You should try to make 
// both parts correct. 
////////////////

// 1) Add an event listener to the button with an id
// of "button1". Listen for the click event. The
// button should change the text content of the
// paragraph with an id of "p1" to:
// "Hello World! I'm listening to events."
const btn1 = document.querySelector("#button1");

btn1.addEventListener("click", function () {
    document.querySelector("#p1").textContent = "Hello World! I'm listening to events.";
})


// 2) Add an event listener to the button with an id
// of "button2". Listen for the click event. The
// button should change the text content of the
// paragraph with an id of "p2" to:
// "This button toggles text content."
// If the button is clicked a 2nd time,
// the text content should change back to:
// "Paragraph Two."
// The button should switch the text back
// and forth, so 3rd and 4th clicks will
// do the same, etc.

const btn2 = document.querySelector("#button2");
const para2 = document.querySelector("#p2");
btn2.addEventListener("click", function () {
    para2.textContent = (para2.textContent === "Paragraph Two.") ? "This button toggles text content." : "Paragraph Two.";
})

/////////////////////
// Note: The remaining buttons and paragraphs
// do not have id attributes. You will need to
// construct selectors to meet these challenges.
////////////////////

// 3) In the "myPage" section, select the third
// button and assign a "click" listener. When
// clicked, it should change the text content
// of the third paragraph in the "myPage" section
// to "Third button clicked."
/////////
// HINT: You should look at the HTML carefully to
// make your selectors.

const div1 = document.querySelector("#myPage").querySelector("div:nth-child(1)");
const btn3 = div1.querySelector("button:nth-child(3)");
const para3 = div1.nextElementSibling.querySelector("p:nth-child(3)");
btn3.addEventListener("click", () => {
    para3.textContent = "Third button clicked.";
});

// 4) In the "myPage" section, select the fourth
// button and assign a "click" listener. When
// clicked, it should add a class named
// "fourthPara" to the fourth paragraph
// in the "myPage" section.

const btn4 = btn3.nextElementSibling;
const para4 = para3.nextElementSibling;

btn4.addEventListener("click", function() {
    para4.classList.add("fourthPara");
})

// 5) In the "myPage" section, select the fifth
// button and assign a "click" listener. When
// clicked, it should toggle the class named
// "fourthPara" for the fifth paragraph
// in the "myPage" section.
const btn5 = btn4.nextElementSibling;
const para5 = para4.nextElementSibling;

btn5.addEventListener("click", function() {
    para5.classList.toggle("fourthPara");
})

// 6) In the "myPage" section, select the sixth
// button and assign a "click" listener. When
// clicked, it should change the text content
// of the sixth paragraph in the "myPage"
// section to:
// "Event Bubbling. Stopping propagation."
// Your event listener should be set to
// Event Bubbling. You should stop the
// event propagation.

const btn6 = btn5.nextElementSibling;
const para6 = para5.nextElementSibling;
const stopProp = function(event){
    para6.textContent = "Event Bubbling. Stopping propagation.";
    event.stopPropagation();
}

btn6.addEventListener("click", stopProp)

// 7) Provide a function named "addToSessionStorage"
// that accepts two parameters:
// The first parameter "storeName" is the store
// name for your session storage.
// The second parameter "objName" is an object.
// Inside the function, use sessionStorage to
// save "objName" under the store name.
// Your test object can contain any properties
// you want.
//////
// Hint: Use JSON methods on these storage problems.
/////

const obj = {
    firstName: "Franklyn",
    lastName: "Roosevelt",
    occupation: "President",
    age: "oldEnough"
};

addToSessionStorage = function (storeName, objName) {
    sessionStorage.setItem(storeName, JSON.stringify(objName));
} 

// 8) Provide a function named getFromSessionStorage
// that will retrieve the object you put in
// session storage with the previous function.
// Your function should accept a "storeName"
// parameter and return the object it retrieves.

getFromSessionStorage = function (storeName) {
    return JSON.parse(sessionStorage.getItem(storeName));
}

// 9) Provide a function emptyWebStorage
// that will remove all entries from local
// storage and session storage.

emptyWebStorage = function () {
    sessionStorage.clear();
    localStorage.clear();
}