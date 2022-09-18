followDiv=document.querySelector(".who-to-follow");

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
            const followProfile=document.createElement("div");
            const accountDiv=document.createElement("div");
            const nameSpan=document.createElement("span");
            const usernameSpan=document.createElement("span");
            const button=document.createElement("button");

            const url = '../frontend/images/profile.png';
            const image = new Image();
            image.src = url;
            image.classList.add("profile-img");
            followProfile.appendChild(image);

            followProfile.classList.add("follow-profile")
            followDiv.appendChild(followProfile)
            accountDiv.classList.add("account")
            followProfile.appendChild(accountDiv)
            nameSpan.innerText=user.name
            nameSpan.classList.add("account-name")
            usernameSpan.innerText=user.username
            usernameSpan.classList.add("account-username")
            accountDiv.appendChild(nameSpan)
            accountDiv.appendChild(usernameSpan)
            button.innerText="Follow"
            button.classList.add("tweet-button")
            followProfile.appendChild(button)
            button.addEventListener("click", addFollow=()=>{
                if(button.innerText=="Follow"){
                    let formData = new FormData();
                    formData.append("follower_id",localStorage.getItem('user_id'));
                    formData.append("following_id", user.id);
                    fetch(`http://localhost/twitter-clone/backend/add_follow.php `, {
                        method: 'POST',
                        body: formData
                    }).then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        if (data['success'] == true) {
                        button.innerText="Following";
                        button.classList.remove("tweet-button");
                        button.classList.add("following-button");
                        }
                        else alert("Error")
                    });
                }else if(button.innerText=="Following"){
                    formData.append("follower_id",localStorage.getItem('user_id'));
                    formData.append("following_id", user.id);
                    fetch(`http://localhost/twitter-clone/backend/unfollow.php `, {
                        method: 'POST',
                        body: formData
                    }).then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        if (data['success'] == true) {
                        button.innerText="Follow";
                        button.classList.remove("following-button");
                        button.classList.add("tweet-button");
                        }
                        else alert("Error")
                    });
                }
               
            });

            console.log(image)
            console.log(followDiv)
           });
        
        }
        else alert("No users found")
    });
}

window.addEventListener("load", getUsers);