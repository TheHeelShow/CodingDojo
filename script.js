const likeCountSpan = document.getElementById("likeCount");
        const likeButton = document.getElementById("likeButton");
        let likes = 3; 
        
        likeButton.addEventListener("click", function() {
            likes++;
            likeCountSpan.textContent = likes;
        });