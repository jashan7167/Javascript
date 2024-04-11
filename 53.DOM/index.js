// DOM = Document object model
// object{} that represents the page you see in the web browser and provides you with an API to interact with it
//Web browser constructs the dom when it loads and html document, and structures all the elements in a tree-like representation.
//Javascript can access the dom to dynamically
//change the content , structure and style of the page
//hence our page (document) is an object with various properties or i may features attributes in it which we can access and change using the javascript which is called dom manipulation

// document.title = "My website";
// document.body.style.backgroundColor = "hsl(0,0%,15%)";
// console.dir(document); //we can see the whole object on the console

const username = " Jashanjot!";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username == "" ? "Guest" : username;
