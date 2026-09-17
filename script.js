let contactForm=document.getElementById("contactForm");
if(contactForm){
    contactForm.addEventListener("submit", function(event){
    event.preventDefault();
    let name= document.getElementById("contactname").value.trim();
    if(name===""){
        alert("Please Enter your name!");
        return;
    }
    alert("Message send Successfully!");
    contactForm.reset();
})
}

let themeButton=document.getElementById("themebutton");
if(themeButton){
themeButton.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        themeButton.textContent="Light Mode";
    }
    else{
        themeButton.textContent="Dark Mode";
    }
});
}

let scrollTopBtn=document.getElementById("scrollTopBtn");
window.onscroll=function(){
    if(document.documentElement.scrollTop>200){
        scrollTopBtn.style.display="block";
    }else{
        scrollTopBtn.style.display="none";
    }
};

scrollTopBtn.onclick=function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
};
