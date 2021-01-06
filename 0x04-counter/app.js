// Get Buttons

const LOW_COUNT = document.querySelector("#low-count");
const ADD_COUNT = document.querySelector("#add-count");
const RESET = document.querySelector("#reset");

// Get the place holder
let display_text = document.querySelector("#number");

let numb = 0;

display_text.innerHTML = numb;

let change_color = function(numb, place){

    let cls = place.className;

    if (cls != ""){
        place.classList.remove(cls); 
    };

    if (numb == 0){
        place.classList.add("display-normal"); 
    }
    else if (numb > 0){
        place.classList.add("display-green");
    }
    else if (numb < 0){
        place.classList.add("display-red");
    };
};

ADD_COUNT.addEventListener("click", function(){
    numb += 1;
    display_text.innerHTML = numb;
    change_color(numb, display_text);
});

LOW_COUNT.addEventListener("click", function(){
    numb -= 1;
    display_text.innerHTML = numb;
    change_color(numb, display_text);
});

RESET.addEventListener("click", function(){
    numb = 0;
    display_text.innerHTML = numb;
    change_color(numb, display_text);
});

