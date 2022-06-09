function openAndCloseAddMenu() {
    if(document.getElementById("ocaddmenu").value === "Add User") {
        document.getElementById("addmenu").style.display = "block";
        document.getElementById("ocaddmenu").value = "Close Menu"
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("delete").style.visibility = "hidden";

        let dateNow = new Date();
        let dateToday = dateNow.getDate();
        if(dateToday < 10){
            dateToday = "0" + dateToday;
        }
        let monthToday = dateNow.getMonth() + 1;
        //let monthMax = monthToday
        if(monthToday < 10){
            monthToday = "0" + monthToday;
        }
        let yearToday = dateNow.getUTCFullYear();
        let yearMax = yearToday - 60;
        let yearMin = yearToday - 17;
        let yearJoin = 2015;
        let dateMax = yearMin + "-" + monthToday + "-" + dateToday;
        let dateMin = yearMax + "-" + monthToday + "-" + dateToday;
        console.log(dateMax);
        document.getElementById("DOB").setAttribute("max", dateMax);
        document.getElementById("DOB").setAttribute("min", dateMin);

    }

    else {
        document.getElementById("addmenu").style.display = "none";
        document.getElementById("update").style.visibility = "visible";
        document.getElementById("ocaddmenu").value = "Add User"
        document.getElementById("delete").style.visibility = "visible";
    }
}

function addUser() {
    const Id = document.getElementById("ID").value;
    const firstname = document.getElementById("fName").value;
    const lastname = document.getElementById("lName").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const dob = document.getElementById("DOB").value;
    const department = document.getElementById("departments").value;
    const jd = document.getElementById("JD").value;

    document.getElementById("userlist").innerHTML += `<tr><td>${Id}</td><td>${firstname}</td><td>${lastname}</td><td>${email}</td><td>${gender}</td><td>${dob}</td><td>${department}</td><td>${jd}</td>
        <td><input type="button" value="Delete"  class="delInner" style="visibility: hidden;" onclick="this.parentElement.parentElement.outerHTML = ''"/></td></tr>`;
}

function addDelete(){
    const buttons = document.getElementsByClassName("delInner");
    Array.prototype.forEach.call(buttons, function(buttons) {
        buttons.style.visibility = "visible";
    });
}