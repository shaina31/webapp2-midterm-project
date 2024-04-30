document.addEventListener("DOMContentLoaded", function() {
    const urlParameter = new URLSearchParams(window.location.search);
    const postId = urlParameter.get("id");
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            const postDetails = document.getElementById("postDetails");
            postDetails.innerHTML = `
            <h3>Title: ${post.title}</h3>
            <p>Body: ${post.body}</p>          
            `;  
        })
        .catch(error => console.error("Error Fetching Users:", error));
});