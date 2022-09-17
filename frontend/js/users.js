//onst accountName=document.getElementById("account-name");
//const username=document.getElementById("account-username");
followDiv=document.querySelector(".who-to-follow");
//followProfile=document.querySelector(".follow-profile");
const getUsers=(e)=>{
    e.preventDefault();
    let formData = new FormData();
    formData.append("user_id", localStorage.getItem('user_id'));
    fetch(`http://localhost/twitter-clone/backend/get_users.php`, {
        method: 'POST',
        body: formData
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (data.length>0) {
           data.forEach(user => {
            //accountDiv=document.createElement("div");
            var url = '../frontend/images/profile.png';
            var image = new Image();
            image.src = url;
            image.classList.add("profile-img");
            const followProfile=document.createElement("div");
            followProfile.appendChild(image);
            followProfile.classList.add("follow-profile");
            followDiv.appendChild(followProfile);
            const accountDiv=document.createElement("div");
            accountDiv.classList.add("account");
            followProfile.appendChild(accountDiv);
            const nameSpan=document.createElement("span");
            nameSpan.innerText=user.name;
            nameSpan.classList.add("account-name");
            const usernameSpan=document.createElement("span");
            usernameSpan.innerText=user.username;
            usernameSpan.classList.add("account-username");
            accountDiv.appendChild(nameSpan);
            accountDiv.appendChild(usernameSpan);
            const button=document.createElement("button");
            button.innerText="Follow";
            button.classList.add("tweet-button");
            followProfile.appendChild(button);
        



            console.log(image)
            console.log(followDiv)
           });
        
        }
        else alert("No users found")
    });
}

window.addEventListener("load", getUsers);