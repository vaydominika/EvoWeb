function register(event) {
    event.preventDefault();
    var registerFirstName = document.getElementById('firstname').value;
    var RegisterLastName = document.getElementById('lastname').value;
    var registerEmail = document.getElementById('email').value;
    var registerUsername = document.getElementById('username').value;
    var registerPassword = document.getElementById('password').value;
    var registerURL = "http://localhost:5232/apimirror/v1/RegisterMirror/?username=" + registerUsername + "&password=" + registerPassword + "&firstname=" + registerFirstName + "&lastname=" + RegisterLastName + "&email=" + registerEmail;


    var usernameerrorAlert = document.getElementById('username-unavailable');
    var emailerrorAlert = document.getElementById('email-unavailable');
    var successAlert = document.getElementById('successful-register');

    var newRequest = new XMLHttpRequest();
    newRequest.open('GET', registerURL, true);
    newRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    newRequest.onload = function () {
        if (newRequest.status >= 200 && newRequest.status < 400) {
            var response = JSON.parse(newRequest.responseText);
            if (response.error) {
                if (response.response == "username-unavailable") {
                    emailerrorAlert.className = "badge textbox text-bg-danger unavailable d-none";
                    usernameerrorAlert.className = "badge textbox text-bg-danger unavailable";
                    successAlert.className = "alert alert-success d-none";
                    usernameerrorAlert.value = "A felhasználónév nem elérhető";
                }
                else if (response.response == "email-unavailable") {
                    usernameerrorAlert.className = "badge textbox text-bg-danger unavailable d-none";
                    emailerrorAlert.className = "badge textbox text-bg-danger unavailable";
                    successAlert.className = "alert alert-success d-none";
                    emailerrorAlert.value = "E-mail cím nem elérhető";
                }
                else {
                    successAlert.className = "alert alert-danger";
                    successAlert.value = "Ismeretlen hiba";
                }  
            }
            else {
                usernameerrorAlert.className = "badge textbox text-bg-danger unavailable d-none";
                emailerrorAlert.className = "badge textbox text-bg-danger unavailable d-none";

                successAlert.className = "alert alert-success";
                successAlert.value = "Sikeres regisztráció!";
            }
        }
        else {
            successAlert.className = "alert alert-danger";
            successAlert.value = "Ismeretlen hiba";
        }
    };
   
    newRequest.send();
}

function validateForm(event) {
    event.preventDefault();
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var passwordConfirm = document.getElementById('passwordconfirm').value;
    var successAlert = document.getElementById('successful-register');

    // Ellenőrizze, hogy minden szükséges mezőt kitöltöttek-e, hossz, xortable
    if (firstName === '' || lastName === '' || email === '' || username === '' || password === '' || passwordConfirm === '') {
        successAlert.className = "alert alert-danger";
        successAlert.innerText = "Minden mező kitöltése kötelező!";
        return false;
    }
    else {

        if (password != passwordConfirm) {
            successAlert.className = "alert alert-danger";
            successAlert.innerText = "A jelszavak nem egyeznek meg!";
            return false;
        }
        else {
            successAlert.className = "alert alert-success";
            successAlert.innerText = "Sikeres regisztráció! Hamarosan átirányítunk a bejelentkezéshez";
        }
    }
    
    // Ellenőrizze, hogy a jelszavak megegyeznek-e


    // További egyedi validációk hozzáadhatók ide, például az email formátumának ellenőrzése

    // Ha minden validáció sikeres volt
    setTimeout(() => { window.location.href = "/login"; }, 5000);

    return true;
}