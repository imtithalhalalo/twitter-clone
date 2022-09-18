const popup_search = this.document.getElementById('pop-search')

const open_search = this.document.getElementById('open-search')

const close_search = this.document.getElementById('close-search')

const searching = this.document.getElementById('searching')
const searchDiv = document.querySelector("#search-users");

const openPopupSearch = (e) => {
    popup_search.classList.add('open-popup')
    let fullname = searching.value
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", fullname);
    fetch(`http://localhost/twitter-clone/backend/search.php`, {
        method: 'POST',
        body: formData
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (data.length > 0) {
            data.forEach(user => {
                const followProfile = document.createElement("div");
                const accountDiv = document.createElement("div");
                const nameSpan = document.createElement("span");
                const usernameSpan = document.createElement("span");
                const button = document.createElement("button");

                const url = '../frontend/images/profile.png';
                const image = new Image();
                image.src = url;
                image.classList.add("profile-img");
                followProfile.appendChild(image);

                followProfile.classList.add("follow-profile")
                searchDiv.appendChild(followProfile)
                accountDiv.classList.add("account")
                followProfile.appendChild(accountDiv)
                nameSpan.innerText = user.name
                nameSpan.classList.add("account-name")
                usernameSpan.innerText = user.username
                usernameSpan.classList.add("account-username")
                accountDiv.appendChild(nameSpan)
                accountDiv.appendChild(usernameSpan)
                button.innerText = "Follow"
                button.classList.add("tweet-button")
                followProfile.appendChild(button)
                button.addEventListener("click", addFollow=()=>{
                
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
    
                   
                });
            });

        }
        else alert("No users found")
    });
}

open_search.addEventListener('click', openPopupSearch)

const closePopupSearch = () => {
    popup_search.classList.remove('open-popup')
}

close_search.addEventListener('click', closePopupSearch)


