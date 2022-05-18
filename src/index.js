import './less/index.less'

// Your code goes here!

// assigning a variable to the nav-link
const navBarAnchor = document.querySelectorAll(".nav-link");
// mouse over = blue
navBarAnchor.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
        event.target.style.color = "blue";
    })
});
// mouse out = black
navBarAnchor.forEach((element) => {
    element.addEventListener("mouseout", (event) => {
        event.target.style.color = "black";
    })
});

// KEYDOWN
const colorChangeP = document.querySelectorAll("p");
colorChangeP.forEach(p => {
    p.setAttribute("tabindex", "1");
    p.addEventListener("keydown", event => {
        event.target.style.fontFamily = "Courier New,Courier","Lucida Sans Typewriter","Lucida Typewriter,monospace";
    })
});

// WHEEL
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("wheel", event => {
        event.target.style.transform = "scaleX(-1)";
    })
});

// LOAD
window.addEventListener("load", () => {
    alert("💻Finish Loading💻");
});

// Working on it!
//console.log(document.querySelector(".btn"));
document.querySelector(".btn").addEventListener("focus", () => {
});

window.addEventListener("resize", () => {
    let divBtn = document.querySelectorAll(".btn");
    divBtn.forEach(btn => {
        btn.style.backgroundColor = "#DEB887";
    })
})

window.addEventListener("scroll", () => {
    document.querySelector("header").style.position = "sticky";
    document.querySelector("header").style.top = "0";
})

document.querySelector("h1").addEventListener("dblclick", (event) => {
    event.target.textContent = "You Clicked On Me!";
})

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", event => {
        console.log("Prevent Default: ", event);
        event.preventDefault();
    })
})

// create a input element
const forFocus = document.createElement("input");
forFocus.setAttribute("type", "text");
forFocus.setAttribute("value", "select me!..select me!");
document.querySelector("header div").appendChild(forFocus);
// focus the input element
document.querySelector("header input").addEventListener("focus", event => {
    event.target.style.backgroundColor = "#00BFFF";
})

// select a <input>
forFocus.addEventListener("select", () => {
    document.querySelectorAll("h2").forEach(h2 => {
        h2.style["-webkit-text-stroke"] = "1px black";
        h2.style["-webkit-text-fill-color"] = "white";
    })
})

//drag img
let dragItem = document.getElementsByClassName("img-fluid rounded")[0];
dragItem.setAttribute("draggable", "true");
dragItem.style.cursor = "pointer";

dragItem.addEventListener("dragstart", () => {
    setTimeout(() => {
        dragItem.style.display = "none";
    }, 0)
})

dragItem.addEventListener("dragend", () => {
    dragItem.style.display = "block";
})
//element.style.display = "inline-block";