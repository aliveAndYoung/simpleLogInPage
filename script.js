let usersArr = [];
usersArr = JSON.parse(localStorage.getItem("users")) || [];

function signUp() {
    let n = document.querySelector("#UN-SU");
    let e = document.querySelector("#E-SU");
    let p = document.querySelector("#P-SU");
    let newUser = {
        name: n.value,
        email: e.value,
        password: p.value,
    };
    if (n.value && e.value && p.value) {
        usersArr.push(newUser);
        localStorage.setItem("users", JSON.stringify(usersArr));
        location.href = "./index1.html";
    } else {
        document.querySelector(".error-msg").style.color = "red";
        document.querySelector(".error-msg").textContent =
            " please fill all the required data  ";
    }
}
function signIn() {
    let e = document.querySelector("#E-SU");
    let p = document.querySelector("#P-SU");
    for (let i = 0; i < usersArr.length; i++) {
        if (e.value == usersArr[i].email && p.value == usersArr[i].password) {
            localStorage.setItem("currUser", usersArr[i].name);
            console.log(usersArr[i].name);
            location.href = "./index3.html";
            break;
        }
    }
}
let curr_User = localStorage.getItem("currUser");
if (curr_User) {
    document.querySelector(".hello-msg").innerText = `Helloz :=>  ${curr_User}`;
}
console.log(localStorage.getItem("currUser"));
