document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("settings-modal");
    const btn = document.getElementById("settings-button");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Settings Modal Script
    const settingsModal = document.getElementById("settings-modal");
    const settingsBtn = document.getElementById("settings-button");
    const settingsSpan = document.getElementsByClassName("close")[0];

    settingsBtn.onclick = function () {
        settingsModal.style.display = "block";
    }

    settingsSpan.onclick = function () {
        settingsModal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == settingsModal) {
            settingsModal.style.display = "none";
        }
    }

    // Followers and Following Modal Script
    var followModal = document.getElementById("followModal");
    var followersLabel = document.getElementById("followers-label");
    var followingLabel = document.getElementById("following-label");
    var followSpan = followModal.getElementsByClassName("close")[0];

    followersLabel.onclick = function () {
        document.getElementById("followModalBody").innerHTML = `<h2>Followers</h2><p>Here is the list of followers...</p>`;
        followModal.style.display = "block";
    }

    followingLabel.onclick = function () {
        document.getElementById("followModalBody").innerHTML = `<h2>Following</h2><p>Here is the list of following...</p>`;
        followModal.style.display = "block";
    }

    followSpan.onclick = function () {
        followModal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == followModal) {
            followModal.style.display = "none";
        }
    }
});
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