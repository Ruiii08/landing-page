function menu() {
    var x = document.querySelector('.ham_icon');
    var currentSrc = x.src;
    if (currentSrc.endsWith("/assets/bx-grid-alt.png")) {
        x.src = "./assets/bxs-grid-alt.png";
    } else {
        x.src = "./assets/bx-grid-alt.png";
    }
    const item = document.querySelector('.ham_links');
    const icon = document.querySelector('.ham_icon');
    item.classList.toggle("open");
    icon.classList.toggle("open");
}
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

var i =0;
var images= [];
var time= 4000; //3s duration
images[0]='assets/shoe1-removebg-preview.png';
images[1]='assets/shoe2-removebg-preview.png';
images[2]='assets/shoe3-removebg-preview.png';
images[3]='assets/shoe4-removebg-preview.png';
images[4]='assets/shoe5-removebg-preview.png';

function changeImg(){
    document.slide.src= images[i];
    if(i<images.length -1){
        i++;
    } else {
        i=0;
    }
    setTimeout("changeImg()",time);
}
window.onload=changeImg;

ScrollReveal().reveal(".letter", {
    duration: 1000,
    delay: 1000,
});
ScrollReveal().reveal("#container img", {
    duration: 1000,
    delay: 1500,
});
ScrollReveal().reveal(".text_left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
});
ScrollReveal().reveal(".text_right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
});
ScrollReveal().reveal(".explore", {
    duration: 1000,
    delay: 2500,
});
ScrollReveal().reveal("h5", {
    duration: 1000,
    interval: 500,
    delay: 4000,
});
ScrollReveal().reveal(".catalog", {
    duration: 1000,
    delay: 3000,
});
ScrollReveal().reveal(".print", {
    duration: 1000,
    delay: 3500,
});
window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display="flex";
        },
        9000
    )
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    document.body.classList.remove("active-popup");
});
document.querySelector(".submit").addEventListener("click",function(){
    document.body.classList.add("active-popup");
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".after-popup").style.display = "block";
});
document.querySelector("#closed").addEventListener("click", function(){
    document.querySelector(".after-popup").style.display = "none";
    document.body.classList.remove("active-popup");
});