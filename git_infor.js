
let valide = () => {
    let email = document.querySelector(".email").value
    let password = document.querySelector(".password").value
    check=true
    

    var ktmk = /^[a-z0-9_-]{6,18}$/
    var ktgmail= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    
    if (!email.match(ktgmail)) {
        document.querySelector(".erroremail").style.display = "block"
        document.querySelector(".erroremail").style.color = "red"
        check = false
    }
    else document.querySelector(".erroremail").style.display = "none"

    if (!password.match(ktmk) ) {
        document.querySelector(".errorpass").style.display = "block"
        document.querySelector(".errorpass").style.color = "red"
        check = false
    }
    else document.querySelector(".errorpass").style.display = "none"

    if (check) {
        alert("success!")
        localStorage.setItem("email", email)
        localStorage.setItem("mk", password)
        console.log(email, password)

    }
}
