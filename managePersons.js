const mapStudentDepartment = new Map();
const mapStudentSemester = new Map();

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
        let dateMax = yearToday + "-" + monthToday + "-" + dateToday;
        document.getElementById("DOB").setAttribute("max", dateMax);
    }

    else {
        document.getElementById("addmenu").style.display = "none";
        document.getElementById("update").style.visibility = "visible";
        document.getElementById("ocaddmenu").value = "Add User"
        document.getElementById("delete").style.visibility = "visible";
    }
}

function calculateAge (birthDate) {
    birthDate = new Date(birthDate);
    let dateNow = new Date();

    let years = (dateNow.getFullYear() - birthDate.getFullYear());

    if (dateNow.getMonth() < birthDate.getMonth() ||
        dateNow.getMonth() === birthDate.getMonth() && dateNow.getDate() < birthDate.getDate()) {
        years--;
    }

    return years;
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

    if(calculateAge(dob) > 17 && calculateAge(dob) < 60){
        document.getElementById("userlist").innerHTML += `<tr><td>${Id}</td><td>${firstname}</td><td>${lastname}</td><td>${email}</td><td>${gender}</td><td>${dob}</td><td>${department}</td><td>${jd}</td>
            <td><input type="button" value="Delete"  class="delInner" style="visibility: hidden;" onclick="this.parentElement.parentElement.outerHTML = ''"/></td></tr>`;
        mapStudentDepartment.set(Id, department);
        mapStudentSemester.set(Id, jd);
    }
    else if(calculateAge(dob) < 17){
        alert("Minimum age is 17");
    }
    else if(calculateAge(dob) > 60){
        alert("Maximum age is 60");
    }
    else {
        alert("Not a date");
    }
}

function addDelete(){
    const buttons = document.getElementsByClassName("delInner");
    Array.prototype.forEach.call(buttons, function(buttons) {
        buttons.style.visibility = "visible";
    });
}


function filterStudentDepartment(value) {
    const listStudent = document.getElementById("userlist").innerHTML;
    if (value == "All")
        return listStudent;
    const departmentFiltered = mapStudentDepartment.filter(s => s.departments === value);
}

/*
function filterStudSem(value) {
    if (value === "All")
        return;
    if (value === "Summer") {
        var studFiltered = students.filter(isSumSem);
    }
    else {
        var studFiltered = reject(students, isSumSem);
    }
    createTable(studFiltered);
    document.getElementById("selectDep").value = "Select";

}
function isSumSem(value) {
    const parts = value.JD.split("-");
    const month = parseInt(parts[1], 10);
    if (month >= 4 && month <= 9)
        return value;
}
*/