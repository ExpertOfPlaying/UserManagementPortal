let attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if ( username === "Admin" && password === "adminpass"){
        alert ("Login successfully");
        window.location = "admin.html"; // Redirecting to other page.
        return false;
    }
    else if( username === "Staff" && password === "staffpass"){
        alert ("Login successfully");
        window.location = "staff.html"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
        if( attempt === 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}