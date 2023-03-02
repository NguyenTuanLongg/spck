
    let valide = (data) => {
    let name = document.querySelector(".fullname").value
    let email = document.querySelector(".email").value
    let password = document.querySelector(".password").value
    

    var ktmk = /^[a-z0-9_-]{6,18}$/
    var ktten = /^[\p{L}'][ \p{L}'-]*[\p{L}]$/u;
    var ktgmail= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    check = true

    if (!name.match(ktten)) {
        document.querySelector(".errorname").style.display = "block"
        document.querySelector(".errorname").style.color = "red"
        check = false
    }
    else document.querySelector(".errorname").style.display = "none"

    if (!email.match(ktgmail)) {
        document.querySelector(".erroremail").style.display = "block"
        document.querySelector(".erroremail").style.color = "red"
        check = false
    }
    else document.querySelector(".erroremail").style.display = "none"

    if (!password.match(ktmk)) {
        document.querySelector(".errorpass").style.display = "block"
        document.querySelector(".errorpass").style.color = "red"
        check = false
    }
    else document.querySelector(".errorpass").style.display = "none"


    if (check) {
        alert("success!")
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("mk", password)

    }
}
valide()