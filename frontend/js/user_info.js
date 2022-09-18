const user_info = document.querySelector('.user-info')
const main_account = document.querySelector('.main-account')
const bar = document.querySelector('.bar')
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

                const account = document.createElement("div");
                const date_created = document.createElement("div")
                const follow_details = document.createElement("div")

                user_info.appendChild(account)
                user_info.appendChild(date_created)
                user_info.appendChild(follow_details)

                account.classList.add('account')
                date_created.classList.add('date-created')
                follow_details.classList.add('follow-details')

                const account_name = document.createElement('div')
                const account_username = document.createElement('div')

                account_name.classList.add('account-name')
                account_username.classList.add('account-username')

                account.appendChild(account_name)
                account.appendChild(account_username)

                const url = '../frontend/images/calendar.png';
                const image = new Image();
                image.src = url;
                image.classList.add("calendar");
                date_created.appendChild(image);

                const date_joined = document.createElement('div')
                const date = document.createElement('span')

                date_joined.classList.add('date-joined')
                date.classList.add('date')

                date_joined.appendChild(date)
                date_created.appendChild(date_joined)
                /////////////////////////////////////////////
                console.log(user.name)
                account_name.innerHTML = user.name
                account_username.innerHTML = "@" + user.username
                date.innerHTML = user.created_at
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
                const span = document.createElement("span")
                bar.appendChild(span)
                span.innerText = user.name

            });

        }
        else alert("No tweets found")
    });
}
window.addEventListener("load", getUserInfo);