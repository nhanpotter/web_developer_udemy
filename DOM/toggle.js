var butt = document.querySelector("button");

var body = document.querySelector("body");
console.log(body);
butt.addEventListener("click", function(){
	if (body.style.background !== "purple"){
		body.style.background = "purple";
	}
	else {
		body.style.background = "white";
	}
});