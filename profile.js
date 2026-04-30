window.onload = function() {
    let email = localStorage.getItem("currentUser");
    let data = localStorage.getItem(email);

    if (data) {
        let user = JSON.parse(data);
        let realPassword = user.pass; 

        document.getElementById("pName").innerText = user.fName;
        document.getElementById("pEmail").innerText = user.email;
        document.getElementById("pAvatar").innerText = user.fName[0].toUpperCase();

        let passSpan = document.getElementById("pPassword");
        let toggleIcon = document.getElementById("toggleIcon");

 
        passSpan.innerText = "•".repeat(realPassword.length); 

        toggleIcon.onclick = function() {
            if (toggleIcon.classList.contains("fa-eye-slash")) {
             passSpan.innerText = realPassword;
                toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
                toggleIcon.style.color = "#ffb703";
            } else {
            
                passSpan.innerText = "•".repeat(realPassword.length);
                toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
                toggleIcon.style.color = "#8a99a4";
            }
        };
    } else {
        window.location.href = "login.html";
    }
};

function logout() {
    
    localStorage.removeItem("currentUser");
    
    console.log("Logging out...");

   
    window.location.href = "login.html"; 
}
