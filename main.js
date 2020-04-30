// click the numbers --done!

// let allbuttons = document.querySelector(".calculator-keys");
// allbuttons.addEventListener("click", function() { console.log("click")
// });

//get the numbers to show up --done!


// let display = document.querySelector(".calculator-display"); 
// let text = document.createTextNode("13");
// display.appendChild(text);

// get the clear button to clear -- done!

//get the decimal, multiply, add, and subtract, to apply math -- done!



let sevenbutton = document.querySelector(".n7");
sevenbutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("7");
    display.appendChild(text);
});

let eightbutton = document.querySelector(".n8");
eightbutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("8");
    display.appendChild(text);
});

let ninebutton = document.querySelector(".n9");
ninebutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("9");
    display.appendChild(text);
});

let fourbutton = document.querySelector(".n4");
fourbutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("4");
    display.appendChild(text);
});

let fivebutton = document.querySelector(".n5");
fivebutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("5");
    display.appendChild(text);
});

let sixbutton = document.querySelector(".n6");
sixbutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("6");
    display.appendChild(text);
});

let threebutton = document.querySelector(".n3");
threebutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("3");
    display.appendChild(text);
});

let twobutton = document.querySelector(".n2");
twobutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("2");
    display.appendChild(text);
});

let onebutton = document.querySelector(".n1");
onebutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("1");
    display.appendChild(text);
});

let zerobutton = document.querySelector(".n0");
zerobutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("0");
    display.appendChild(text);
});

let dividebutton = document.querySelector(".divide");
dividebutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("/");
    display.appendChild(text);
});

let multiplybutton = document.querySelector(".multiply");
multiplybutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("*");
    display.appendChild(text);
});

let subtractbutton = document.querySelector(".subtract");
subtractbutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("-");
    display.appendChild(text);
});

let decimalbutton = document.querySelector(".decimal");
decimalbutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode(".");
    display.appendChild(text);
});

// let equalsbutton = document.querySelector(".equals");
// equalsbutton.addEventListener("click", function() { 
//     let display = document.querySelector(".calculator-display");
//     let text = document.createTextNode("=");
//     display.appendChild(text);
// });

let addbutton = document.querySelector(".add");
addbutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    let text = document.createTextNode("+");
    display.appendChild(text);
});

let clearbutton = document.querySelector(".clear");
clearbutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    display.innerHTML = " ";
});

let equalsbutton = document.querySelector(".equals");
equalsbutton.addEventListener("click", function() { 
    let display = document.querySelector(".calculator-display");
    display.innerText = eval(display.innerText);
});