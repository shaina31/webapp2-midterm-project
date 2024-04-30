document.getElementById("loginPage").addEventListener("submit", function(event){
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        const user = users.find(user => user.username === username);

        if(user) {
            if (password === "pass1234"){
               window.location.href = "main.html";
            }
            else{
                console.log("Incorrect Username or Password!");
         }
    }
        else{
                console.log("User not Found in the System!");
            }
    })
    .catch(error => console.log("Error Fetching Users:", error));
});
