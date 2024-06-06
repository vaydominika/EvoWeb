function follow(sessionid, targetusername) {
    var followbutton = document.getElementById("follow");
    var icon = document.getElementById("icon");
    var followercount = document.getElementById("follower-count");

    followbutton.className = "btn btn-primary shadow-none followed-button";
    icon.className = "fa-solid fa-check tickbutton";
    let currentCount = parseInt(followercount.textContent, 10);
    currentCount++;
    followercount.textContent = currentCount;
    followbutton.onclick = function () {
        unfollow(sessionid, targetusername);
    };

    sendFollowRequest(sessionid, targetusername);

}

function unfollow(sessionid, targetusername) {
    var unfollow = document.getElementById("follow");
    var icon = document.getElementById("icon");
    var followercount = document.getElementById("follower-count");

    unfollow.className = "btn btn-primary shadow-none follow-button";
    icon.className = "fa-solid fa-plus plusbutton";
    let currentCount = parseInt(followercount.textContent, 10);
    currentCount = currentCount - 1;
    followercount.textContent = currentCount;1
    unfollow.onclick = function () {
        follow(sessionid, targetusername);
    };

    sendUnFollowRequest(sessionid, targetusername);
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

function sendFollowRequest(sessionid, targetusername) {

    quicksearch.innerHTML = "";
    var loginURL = "http://localhost:5232/apimirror/v1/FollowMirror/?sessionid=" + sessionid + "&targetusername=" + targetusername;

    var newRequest = new XMLHttpRequest();
    newRequest.open('GET', loginURL, true);
    newRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    newRequest.onload = function () {

        if (newRequest.status >= 200 && newRequest.status < 400) {
            var response = JSON.parse(newRequest.responseText);

        }
        else {

        }


    };

    newRequest.send();
}


function sendUnFollowRequest(sessionid, targetusername) {

    quicksearch.innerHTML = "";
    var loginURL = "http://localhost:5232/apimirror/v1/UnFollowMirror/?sessionid=" + sessionid + "&targetusername=" + targetusername;

    var newRequest = new XMLHttpRequest();
    newRequest.open('GET', loginURL, true);
    newRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    newRequest.onload = function () {

        if (newRequest.status >= 200 && newRequest.status < 400) {
            var response = JSON.parse(newRequest.responseText);


        }
        else {
        }


    };

    newRequest.send();
}