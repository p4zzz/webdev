const urls = ["list/lasagna.html", "list/pizza.html", "list/pizzaschnecken.html"]


// funcs for redirects to recipes
function goToLasagna() {
	window.location.href="list/lasagna.html";
}

function goToPizza() {
	window.location.href="list/pizza.html";
}

function goToPizzaschnecken() {
	window.location.href="list/pizzaschnecken.html"
}

function goToMaggifixsandra() {
	window.location.href="list/maggifix_sandra.html"
}



// go to a random recipe
function goToRandom() {
	var randomLink = urls[Math.floor(Math.random()*urls.length)]
	window.location.href=randomLink
}