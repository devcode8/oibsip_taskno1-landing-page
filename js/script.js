const nav= document.querySelector("nav");


window.addEventListener('scroll',function(){
    nav.classList.toggle("nav_scroll",window.scrollY>800);
});
