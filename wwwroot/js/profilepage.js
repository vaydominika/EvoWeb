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


    followersLabel.onclick = function () {
        document.getElementById("modalContent").innerHTML = `<h2>Followers</h2><p>Here is the list of followers...</p>`;
        followModal.style.display = "block";
    }

    followingLabel.onclick = function () {
        document.getElementById("modalContent").innerHTML = `<h2>Following</h2><p>Here is the list of following...</p>`;
        followModal.style.display = "block";
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

function sendSaveProfileRequest(sessionid) {

    var displayName = document.getElementById("display-name").value;
    var bio = document.getElementById("bio").value;
    var pronouns = document.getElementById("pronouns").value;
    var location = document.getElementById("location").value;
    var dateOfBirth = document.getElementById("date-of-birth").value;
    var avatarUrl = "https://cdn.reigdev.hu/evoweb/img/generic-avatar.jpg";
    var bannerUrl = "https://cdn.reigdev.hu/evoweb/img/generic-banner.jpg";

    var loginURL = "http://localhost:5232/apimirror/v1/SetProfileMirror/?sessionid=" + sessionid + "&displayname=" + displayName + "&bio=" + bio + "&pronouns=" + pronouns +
        "&location=" + location + "&dateofbirth=" + dateOfBirth + "&avatarurl=" + avatarUrl + "&bannerurl=" + bannerUrl;

    var newRequest = new XMLHttpRequest();
    newRequest.open('GET', loginURL, true);
    newRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    newRequest.onload = function () {

        if (newRequest.status >= 200 && newRequest.status < 400) {
            var response = JSON.parse(newRequest.responseText);
            if (response.error) {
                console.log("error while saving profile data (maybe you set something to empty?)");
            }
            location.reload();
        }
        else {
            console.log("error while saving profile data (maybe you set something to empty?)");
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

function like(sessionid, id) {
    var likebutton = document.getElementById(id);

    const myArray = id.split("-");
    var realid = myArray[1];

    likebutton.className = "fa-solid fa-heart postreaction liked";
    likebutton.onclick = function () {
        unlike(id);
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
        like(id);
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