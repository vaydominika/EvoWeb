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
function displayPostedTime() {
    var cardHeaders = document.querySelectorAll('.card-header');

    cardHeaders.forEach(function (cardHeader) {
        var postedTime = document.createElement('span');
        postedTime.classList.add('posted-time');
        cardHeader.appendChild(postedTime);

        var postDate = new Date(); // Ez lenne a tényleges posztolás dátuma, ide a megfelelő értéket kell behelyettesíteni

        // Számítás az eltelt idő alapján
        var currentTime = new Date();
        var elapsed = currentTime - postDate; // Mennyi idő telt el (ms-ban)

        // Idő formázása
        if (elapsed < 60 * 1000) { // Kevesebb, mint 1 perc
            postedTime.textContent = 'now';
        } else if (elapsed < 60 * 60 * 1000) { // Kevesebb, mint 1 óra
            var minutes = Math.floor(elapsed / (60 * 1000));
            postedTime.textContent = minutes + 'm';
        } else if (elapsed < 24 * 60 * 60 * 1000) { // Kevesebb, mint 1 nap
            var hours = Math.floor(elapsed / (60 * 60 * 1000));
            postedTime.textContent = hours + 'h';
        } else { // Több, mint 1 nap
            var days = Math.floor(elapsed / (24 * 60 * 60 * 1000));
            postedTime.textContent = days + 'd';
        }
    });
}

// Hívjuk meg a függvényt, hogy megjelenítse az időt
displayPostedTime();

function like(id) {
    var likebutton = document.getElementById(id);

    likebutton.className = "fa-solid fa-heart postreaction liked";
    likebutton.onclick = function () {
        unlike(id);
    };
}

function unlike(id) {
    var likebutton = document.getElementById(id);

    likebutton.className = "fa-regular fa-heart postreaction";
    likebutton.onclick = function () {
        like(id);
    };
}



