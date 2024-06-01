function follow() {
    var followbutton = document.getElementById("follow");
    var icon = document.getElementById("icon");

    followbutton.className = "btn btn-primary shadow-none followed-button";
    icon.className = "fa-solid fa-check tickbutton";
    followbutton.onclick = function () {
        unfollow();
    };
}

function unfollow() {
    var unfollow = document.getElementById("follow");
    var icon = document.getElementById("icon");

    unfollow.className = "btn btn-primary shadow-none follow-button";
    icon.className = "fa-solid fa-plus plusbutton";
    unfollow.onclick = function () {
        follow();
    };
}

function posts() {
    var post = document.getElementById("posts");
    var like = document.getElementById("liked");
    var tag = document.getElementById("tagged");

    post.className = "btn btn-outline-primary profile-card-button shadow-none active";
    like.className = "btn btn-outline-primary profile-card-button shadow-none";
    tag.className = "btn btn-outline-primary profile-card-button shadow-none";
}

function liked() {
    var post = document.getElementById("posts");
    var like = document.getElementById("liked");
    var tag = document.getElementById("tagged");

    post.className = "btn btn-outline-primary profile-card-button shadow-none";
    like.className = "btn btn-outline-primary profile-card-button shadow-none active";
    tag.className = "btn btn-outline-primary profile-card-button shadow-none";
}

function tagged() {
    var post = document.getElementById("posts");
    var like = document.getElementById("liked");
    var tag = document.getElementById("tagged");

    post.className = "btn btn-outline-primary profile-card-button shadow-none";
    like.className = "btn btn-outline-primary profile-card-button shadow-none";
    tag.className = "btn btn-outline-primary profile-card-button shadow-none active";
}