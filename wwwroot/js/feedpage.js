window.onload = function () {
    // Minden textarea-re alkalmazzuk a funkcionalitást, amiknek van 'autosize-textarea' osztályuk
    console.log("elindut");
    var textareas = document.querySelectorAll('.autosize-textarea');
    textareas.forEach(function (textarea) {
        textarea.style.height = 'auto'; // Állítsuk a magasságot autóra
        textarea.style.height = (textarea.scrollHeight) + 'px'; // Állítsuk a magasságot a szükséges méretre

        // Karakterszámláló hozzáadása
        var charCount = textarea.parentElement.querySelector('.character-counter');

        // Amikor változik a tartalom a szövegdobozban
        textarea.addEventListener('input', function () {
            console.log("it");
            if (this.scrollHeight <= 200) {
                this.style.height = 'auto'; // Állítsuk a magasságot autóra
                this.style.height = (this.scrollHeight) + 'px'; // Állítsuk a magasságot a szükséges méretre
            }

            // Frissítsük a karakter számlálót
            var currentLength = this.value.length;
            charCount.innerHTML = currentLength;

            // Ellenőrizzük, hogy elérte-e a maximális karakterszámot
            charCount.classList.toggle('exceeded', currentLength >= 256);
        });
    });
};

// Függvény a posztolás idejének megjelenítésére

// Hívjuk meg a függvényt, hogy megjelenítse az időt


function like(sessionid, id) {
    var likebutton = document.getElementById(id);

    const myArray = id.split("-");
    var realid = myArray[1];

    likebutton.className = "fa-solid fa-heart postreaction liked";
    likebutton.onclick = function () {
        unlike(sessionid, id);
    };

    var loginURL = "http://localhost:5232/apimirror/v1/LikeMirror/?sessionid=" + sessionid + "&postid=" + realid;

    var newRequest = new XMLHttpRequest();
    newRequest.open('GET', loginURL, true);
    newRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    newRequest.onload = function () {

        if (newRequest.status >= 200 && newRequest.status < 400) {
            var response = JSON.parse(newRequest.responseText);
            if (response.error) {
                console.log("error while sending like data (maybe you set something to empty?)");
            }
        }
        else {
            console.log("error while sending like data (maybe you set something to empty?)");
        }


    };

    newRequest.send();

}

function unlike(sessionid, id) {
    var likebutton = document.getElementById(id);

    const myArray = id.split("-");
    var realid = myArray[1];

    likebutton.className = "fa-regular fa-heart postreaction";
    likebutton.onclick = function () {
        like(sessionid, id);
    };

    var loginURL = "http://localhost:5232/apimirror/v1/RevokeLikeMirror/?sessionid=" + sessionid + "&postid=" + realid;

    var newRequest = new XMLHttpRequest();
    newRequest.open('GET', loginURL, true);
    newRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    newRequest.onload = function () {

        if (newRequest.status >= 200 && newRequest.status < 400) {
            var response = JSON.parse(newRequest.responseText);
            if (response.error) {
                console.log("error while sending revokelike data (maybe you set something to empty?)");
            }
        }
        else {
            console.log("error while sending revokelike data (maybe you set something to empty?)");
        }


    };

    newRequest.send();
}
 
function sendPostRequest(sessionid) {

    var body = document.getElementById("post-area").value;

    var loginURL = "http://localhost:5232/apimirror/v1/PostMirror/?sessionid=" + sessionid + "&body=" + body;

    var newRequest = new XMLHttpRequest();
    newRequest.open('GET', loginURL, true);
    newRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    newRequest.onload = function () {

        if (newRequest.status >= 200 && newRequest.status < 400) {
            var response = JSON.parse(newRequest.responseText);
            if (response.error) {
                console.log("error while sending post data (maybe you set something to empty?)");
            }
            window.location.reload();
        }
        else {
            console.log("error while sending post data (maybe you set something to empty?)");
        }


    };

    newRequest.send();



}



