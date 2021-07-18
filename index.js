

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

const background1 = document.querySelector(".background1");
const background2 = document.querySelector(".background2");
document.addEventListener("dblclick",function(){
    background1.classList.toggle("hidden");
    background2.classList.toggle("hidden");

});

function myFunction(x) {
    if (x.matches) { // If media query matches
       // sweet alert module start 
        swal({
            title: "Double Mouse Click to Corner",
            text: "To change the Background",
            icon: "success",
        });
        // sweet alert module start end

    } else {
     document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(min-width: 500px)");
  myFunction(x); // Call listener function at run time

// jQuery code Start 

// setting navbar active
$(".navbar li a").on("click",function(e){
    if($(e.target).hasClass("nav-link") && !$(e.target).hasClass("active")){
        $(".navbar li a.active").removeClass("active");
        $(e.target).addClass("active");
    }
});