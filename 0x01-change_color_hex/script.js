let box = document.getElementById("box-change");
let button = document.getElementById("button");

button.addEventListener("click", function() {
	if (box.className == "") {
		box.classList.add("second_color");
	}
	else if (box.className== "second_color") {
		box.classList.remove('second_color');
	};
});

button.addEventListener("mouseover", function(){
  if (button.className == "button-first"){
    button.classList.remove("button-first");
    button.classList.add("button-change");
  };
});

button.addEventListener("mouseout", function(){
  if (button.className == "button-change"){
    button.classList.remove("button-change")
    button.classList.add("button-first");
  };
});
