const FORM = document.querySelector("form");


FORM.addEventListener("submit", function(e){
  e.preventDefault();

  // retrieve data from the user
  let VIEW = document.querySelector("#view");
  const MESSAGE = document.querySelector("#message");

  if (MESSAGE.value == ''){
    // print a danger message when the user enter an incorect message
    VIEW.innerHTML = '<p>Enter a valid input</p>';
    VIEW.classList.add("danger");
    console.log("No values")
  }
  else{
    console.log("Values")
    VIEW.classList.remove("danger");
    //display the message passed by the user and clear the input space
    VIEW.innerHTML = MESSAGE.value;
    MESSAGE.value = '';
  }

})
