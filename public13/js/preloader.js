//Preloader

window.addEventListener("load", preloader);

function preloader() {
   console.log("hej");
    
    setTimeout(function(){
    document.getElementById("preloader").style.opacity = "0";
        
    setTimeout(function(){
    document.getElementById("preloader").style.display = "none";
    document.getElementById("footer").style.display = "block";
    document.getElementById("container").style.display = "block";
    
   
         }, 1000);
        
    }, 1000);
    
    
  
}