// Selecting elements for the first set of listeners
let li = document.querySelector(".lis");
let arrowDown = document.querySelector(".arrow-down");
let arrowUp = document.querySelector(".arrow-up");

li.addEventListener('mouseenter', function() {
    arrowDown.style.display = "none";
    arrowUp.style.display = "inline-block";
});

li.addEventListener('mouseleave', function() {
    arrowDown.style.display = "inline-block";
    arrowUp.style.display = "none";
});

// Selecting elements for the second set of listeners
let l = document.querySelector(".list");
let arrowDow = document.querySelector(".arrow-dow");
let arrowU = document.querySelector(".arrow-u");

l.addEventListener('mouseenter', function() {
    arrowDow.style.display = "none";
    arrowU.style.display = "inline-block";
});

l.addEventListener('mouseleave', function() {
    arrowDow.style.display = "inline-block";
    arrowU.style.display = "none";
});

// Handling menu open and close functionality
let openButton = document.getElementById('open');
let closeButton = document.getElementById('close');
let menu = document.getElementById('menu');

openButton.addEventListener('click', function() {
    menu.style.display = "block";
    openButton.className = "noneim";
});

closeButton.addEventListener('click', function() {
    menu.style.display = "none";
    openButton.className = "menu-btn";
});

// Selecting elements for the third set of listeners
let liM = document.querySelector(".liM");
let arrowDownM = document.querySelector(".arrow-downM");
let arrowUpM = document.querySelector(".arrow-upM");

liM.addEventListener('mouseenter', function() {
    arrowDownM.style.display = "none";
    arrowUpM.style.display = "inline-block";
});

liM.addEventListener('mouseleave', function() {
    arrowDownM.style.display = "inline-block";
    arrowUpM.style.display = "none";
});

// Selecting elements for the fourth set of listeners
let lM = document.querySelector(".listM");
let arrowDowM = document.querySelector(".arrow-dowM");
let arrowUM = document.querySelector(".arrow-uM");

lM.addEventListener('mouseenter', function() {
    arrowDowM.style.display = "none";
    arrowUM.style.display = "inline-block";
});

lM.addEventListener('mouseleave', function() {
    arrowDowM.style.display = "inline-block";
    arrowUM.style.display = "none";
});
