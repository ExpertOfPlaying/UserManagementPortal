/* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function addUser() {
    const Id = 1;
    const firstname = "Alexander";
    const lastname = "Yurovskyy";
    const email = "alex-yu2001@yandex.com";
    const gender = "Male";
    const dob = "10.03.2001";
    const department = "Fachbereich 4";

    document.getElementById("userlist").innerHTML = null;
    document.getElementById("userlist").innerHTML += `<tr><td>${Id}</td><td>${firstname}</td><td>${lastname}</td><td>${email}</td><td>${gender}</td><td>${dob}</td><td>${department}</td>
        <td></tr>`;
}
