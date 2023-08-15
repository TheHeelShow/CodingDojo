document.addEventListener("DOMContentLoaded", function() {
    const likeButtonNeil = document.getElementById("likeButtonNeil");
    const likeCountNeil = document.getElementById("likeCountNeil");
    
    const likeButtonNichole = document.getElementById("likeButtonNichole");
    const likeCountNichole = document.getElementById("likeCountNichole");
    
    const likeButtonJim = document.getElementById("likeButtonJim");
    const likeCountJim = document.getElementById("likeCountJim");

    likeButtonNeil.addEventListener("click", function() {
        likeCountNeil.textContent = parseInt(likeCountNeil.textContent) + 1;
    });
    
    likeButtonNichole.addEventListener("click", function() {
        likeCountNichole.textContent = parseInt(likeCountNichole.textContent) + 1;
    });
    
    likeButtonJim.addEventListener("click", function() {
        likeCountJim.textContent = parseInt(likeCountJim.textContent) + 1;
    });
});