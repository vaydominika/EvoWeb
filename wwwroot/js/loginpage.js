function login(event) {
    event.preventDefault();
    var emailorusername = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;
    var loginURL = "http://localhost:5232/apimirror/v1/APIMirror/?username=" + emailorusername + "&password=" + password;

    var errorAlert = document.getElementById('invalid-account');
    var successAlert = document.getElementById('successful-login');

    var success = false;

    var newRequest = new XMLHttpRequest();
    newRequest.open('GET', loginURL, true);
    newRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    newRequest.onload = function() {
        if (newRequest.status >= 200 && newRequest.status < 400) {
            var response = JSON.parse(newRequest.responseText);
            if (response.error) {
                // response.response = "invalid-account";

                errorAlert.className = "alert alert-danger";
                successAlert.className = "alert alert-success d-none";
                // azert, mert alert "alert-danger d-none" alapbol a className, ha a veget levagjuk akkor megjeleniti
                // alert(response.response);
            }
            else {
                errorAlert.className = "alert alert-danger d-none";
                successAlert.className = "alert alert-success";
                success = true;
              
                window.location.href = "/feed";
            }
        }
        else {
            errorAlert.className = "alert alert-danger";
            errorAlert.value = "Belső hiba";
            successAlert.className = "alert alert-success d-none";
        }
    };

    newRequest.send();
    }

