let aboutButton = document.getElementById("aboutButton");
let timeToVisitButton = document.getElementById("timeToVisitButton");
let attractionsButton = document.getElementById("attractionsButton");
let aboutTab = document.getElementById("aboutTab");
let time = document.getElementById("timeToVisitTab");
let attractions = document.getElementById("attractionsTab");
// aboutTab.classList.add("hidden");

aboutTab.classList.remove("hidden")
time.classList.add("hidden");
attractions.classList.add("hidden");

function onClickAboutTab() {
    aboutButton.style.backgroundColor = "#ffffff";
    timeToVisitButton.style.backgroundColor = "#dae2ec";
    attractionsButton.style.backgroundColor = "#dae2ec";
    // attractions.classList.add("hidden");
    // time.classList.add("hidden");
    aboutTab.classList.remove("hidden");
    time.classList.add("hidden");
    attractions.classList.add("hidden");


}

function onClickTimeToVisitTab() {
    timeToVisitButton.style.backgroundColor = "#ffffff";
    aboutButton.style.backgroundColor = "#dae2ec";
    attractionsButton.style.backgroundColor = "#dae2ec";
    time.classList.remove("hidden");
    aboutTab.classList.add("hidden");
    attractions.classList.add("hidden");


}

function onClickAttractionsTab() {
    timeToVisitButton.style.backgroundColor = "#dae2ec";
    aboutButton.style.backgroundColor = "#dae2ec";
    attractionsButton.style.backgroundColor = "#ffffff";
    attractions.classList.remove("hidden");
    aboutTab.classList.add("hidden");
    time.classList.add("hidden");
}