
//  this file to just move div up to top page

// this works

var page = {
    main: [
        "",
        "",
        "Navigate<br />With Clicks",
        "Focused Navigation",
        "At Finger Tips",
        ""
    ],
    two: [
        "",
        "",
        "Fast Page Load",
        "we design for speed",
        "they won't leave",
        ""
    ],
    third: [
        "",
        "",
        "No Re-loads",
        "All Data is Present",
        "No Waiting for Page Update",
        ""
    ],
    forth: [
        "",
        "",
        "No Menu Drop Downs",
        "Mouse Activity",
        "Scrolls to Data",
        ""
    ],
    fifth: [
        "",
        "",
        "Inform<br />Quickly",
        "With Single",
        "Mouse Clicks",
        ""
    ],
    sixth: [
        "",
        "",
        "Go Forward<br />(or) Back-up",
        "To Focus",
        "On the Data",
        ""
    ]
};
var clicker = ["up", "down"];

var total = [0];
var str = "main";
var web = [];
var div;

function makeDiv(value, index) {
    "use strict";
    var result = str.concat(index);
    web.push(result);
    div = web;
    if (index === 0) {
        div[index] = document.createElement("section");
        div[index].id = str;
        div[index].className = str.concat('Container');
        document.body.appendChild(div[index]);
    } else if (index === 1) {
        div[index] = document.createElement("div");
        div[index].id = str;
        div[index].className = "vert";
        div[index].innerHTML = value;
        div[0].appendChild(div[index]);
    } else {
        div[index] = document.createElement("div");
        div[index].id = str;
        div[index].className = str.concat('Div').concat(index);
        div[index].innerHTML = value;
        div[1].appendChild(div[index]);
    }
}

function up() {
    "use strict";
    console.log(total);
    var sum = total.reduce((a, b) => a + b, 0);
    if (sum === -2375) {
        console.log("no-move");
        return;
    }
    total.push(-475);
    var go = document.getElementById("move");
    go.style.position = "relative";
    sum = total.reduce((a, b) => a + b, 0);
    console.log(sum);
    go.style.transition = "all 1s ease-in";
    go.style.top = sum + "px";
}

function down() {
    "use strict";
    console.log(total);
    var sum = total.reduce((a, b) => a + b, 0);
    if (sum === 0) {
        console.log("no-move");
        return;
    }
    total.push(475);
    var go = document.getElementById("move");
    go.style.position = "relative";
    go.style.transition = "all 1s";
    sum = total.reduce((a, b) => a + b, 0);
    go.style.top = sum + "px";
    console.log(sum);
}
// make two buttons
function makeButton(value) {
    "use strict";
    var button = document.createElement("button");
    button.className = "button";
    button.type = "button";
    button.id = value;
    button.textContent = "scroll" + " " + value;
    if (button.id === "up") {
        button.addEventListener("click", up, false);
    } else {
        button.addEventListener("click", down, false);
    }
    div[5].appendChild(button);
}

// start program here

page.main.forEach(makeDiv);
clicker.forEach(makeButton);

str = "two";
page.two.forEach(makeDiv);
clicker.forEach(makeButton);

str = "third";
page.third.forEach(makeDiv);
clicker.forEach(makeButton);

str = "forth";
page.forth.forEach(makeDiv);
clicker.forEach(makeButton);

str = "fifth";
page.fifth.forEach(makeDiv);
clicker.forEach(makeButton);

str = "sixth";
page.sixth.forEach(makeDiv);
clicker.forEach(makeButton);