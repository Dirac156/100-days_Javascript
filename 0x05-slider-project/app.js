const RIGHT = document.querySelector("#button-right");
const LEFT = document.querySelector("#button-left");

let images = [0, 1, 2, 3, 4];
const PATH = "img/contBcg-";
let idx_img = 0;

let image = document.querySelector("#image");
image.setAttribute("src", PATH + images[idx_img] + ".jpeg");
image.setAttribute("alt", images[idx_img]);

RIGHT.addEventListener("click", function(){
    idx_img += 1;
    if (idx_img > images.length - 1){
        idx_img = 0;
    };
    image.setAttribute("src", PATH + images[idx_img] + ".jpeg");
    image.setAttribute("alt", images[idx_img]);
});

LEFT.addEventListener("click", function(){
    idx_img = idx_img - 1;
    if (idx_img < 0){
        idx_img = images.length - 1;
    };
    image.setAttribute("src", PATH + images[idx_img] + ".jpeg");
    image.setAttribute("alt", images[idx_img]);
});
