const main_account = document.querySelector('.main-account')
const getUserInfo = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("user_id", localStorage.getItem('user_id'));
    fetch(`http://localhost/twitter-clone/backend/user_info.php`, {
        method: 'POST',
        body: formData
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (data.length > 0) {
            data.forEach(user => {

                
                ///////////////////////////////////
                const url_profile = '../frontend/images/profile.png';
                const image_profile = new Image();
                image_profile.src = url_profile;
                image_profile.classList.add("profile-img");
                
                const account_details = document.createElement('div')
                const account1_name = document.createElement('div')
                const account1_username = document.createElement('div')
                account_details.classList.add('account-details')
                main_account.appendChild(account_details)
                const account1 = document.createElement('div')
                account1.classList.add('account')
                account_details.appendChild(image_profile)
                account1_name.classList.add('account-name')
                account1_username.classList.add('account-username')
                account_details.appendChild(account1)
                account1_name.innerText = user.name
                account1_username.innerText = '@' + user.username
                account1.appendChild(account1_name)
                account1.appendChild(account1_username)

                ///////////////////////////////////////////
                

            });

        }
        else alert("No tweets found")
    });
}
window.addEventListener("load", getUserInfo);