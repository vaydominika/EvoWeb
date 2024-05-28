function loadUserPosts() {
    // AJAX kérést küldünk a szervernek a felhasználó posztjainak betöltésére
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/api/posts', true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            var posts = JSON.parse(xhr.responseText);
            // Frissítjük a felhasználó felületét a betöltött posztokkal
            displayPosts(posts);
        } else {
            console.error('Hiba történt a posztok betöltése közben.');
        }
    };
    xhr.send();
}

function displayPosts(posts) {
    // Betöltött posztok megjelenítése a felhasználó felületén
    var container = document.getElementById('post-container');
    container.innerHTML = ''; // Előző posztok törlése
    posts.forEach(function (post) {
        var postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = '<h2>' + post.userName + '</h2><p>' + post.content + '</p>';
        container.appendChild(postElement);
    });
}

// Oldal betöltésekor automatikusan betöltjük a felhasználó posztjait
window.onload = function () {
    loadUserPosts();
}

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

window.onload = function () {
    // Minden textarea-re alkalmazzuk a funkcionalitást, amiknek van 'autosize-textarea' osztályuk
    var textareas = document.querySelectorAll('.autosize-textarea');
    textareas.forEach(function (textarea) {
        textarea.style.height = 'auto'; // Állítsuk a magasságot autóra
        textarea.style.height = (textarea.scrollHeight) + 'px'; // Állítsuk a magasságot a szükséges méretre

        // Karakterszámláló hozzáadása
        var charCount = textarea.parentElement.querySelector('.character-counter');

        // Amikor változik a tartalom a szövegdobozban
        textarea.addEventListener('input', function () {
            if (this.scrollHeight <= 200) {
                this.style.height = 'auto'; // Állítsuk a magasságot autóra
                this.style.height = (this.scrollHeight) + 'px'; // Állítsuk a magasságot a szükséges méretre
            }

            // Frissítsük a karakter számlálót
            var currentLength = this.value.length;
            charCount.textContent = currentLength;

            // Ellenőrizzük, hogy elérte-e a maximális karakterszámot
            charCount.classList.toggle('exceeded', currentLength >= 256);
        });
    });
};


