const aboutTab = document.querySelector(".about-tab");
const   aboutSection = document.querySelector(".about-section");
aboutTab.addEventListener("click",function(e){
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        aboutTab.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
}
});


const bgChange = document.querySelector(".BGchange-area");
const background1 = document.querySelector(".background1");
const background2 = document.querySelector(".background2");


bgChange.addEventListener("click",function(){
    background1.classList.toggle("hidden");
    background2.classList.toggle("hidden");

});

