const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/users/login",
        dataType: "text",
        contentType: "application/json",
        processData: false,
        data: JSON.stringify({
            'username' : username,
            'password' : password
        }),
        success: function(resp) {
            console.log(resp);
        }
    });
})