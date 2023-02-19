const menuBar = document.querySelector(".menuBar");
const mobileMenu = document.querySelector(".links");
const closeBtn = document.querySelector("#closeBtn");
const catagoryBtn = document.getElementById("cBtn");
const CatagoryOptions = document.querySelector(".catagoriex");

// ------------------Mobile Menu----------------

menuBar.addEventListener("click", ()=>{
    
    mobileMenu.classList.remove("-right-full")
    mobileMenu.classList.remove("hidden")

    mobileMenu.classList.add("-right-0")

})
closeBtn.addEventListener("click", ()=>{
    mobileMenu.classList.add("-right-full")
    mobileMenu.classList.add("hidden")
    mobileMenu.classList.remove("-right-0")
})
// ----------------------Catagory Options---------------

catagoryBtn.addEventListener("click", ()=>{
    if(CatagoryOptions.classList.contains("scale-y-0")){
        CatagoryOptions.classList.remove("scale-y-0");
        CatagoryOptions.classList.add("scale-y-100");
    }else if(CatagoryOptions.classList.contains("scale-y-100")){
        CatagoryOptions.classList.remove("scale-y-100");
        CatagoryOptions.classList.add("scale-y-0");
    }
})