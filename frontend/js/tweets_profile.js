const tweet_profile = document.querySelector(".tweet-profile");

const getTweetsByUser = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("user_id", localStorage.getItem('user_id'));
    fetch(`http://localhost/twitter-clone/backend/get_profile_tweets.php`, {
        method: 'POST',
        body: formData
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (data.length > 0) {
            data.forEach(tweeter => {
                
                const tweet_div = document.createElement('div')
                tweet_div.classList.add('tweet')
                tweet_profile.appendChild(tweet_div)
                const tweet_details = document.createElement("div");
                tweet_details.classList.add('tweet-details')
                tweet_div.appendChild(tweet_details)


                const url = '../frontend/images/profile.png';
                const image_profile = new Image();
                image_profile.src = url;
                image_profile.classList.add("profile-img");
                tweet_div.appendChild(image_profile);


                const user_details = document.createElement("div");
                user_details.classList.add('user-details')
                tweet_details.appendChild(user_details)


                const usr = document.createElement("div");
                usr.classList.add('user')
                user_details.appendChild(usr)


                const fullname = document.createElement("a");
                fullname.classList.add('fullname')
                usr.appendChild(fullname)
                fullname.innerText = tweeter.name


                const username = document.createElement("span");
                username.classList.add('username')
                fullname.appendChild(username)
                username.innerText = tweeter.username


                const tweet_txt = document.createElement("div");
                tweet_txt.classList.add('tweet_txt')
                tweet_details.appendChild(tweet_txt)

            
                const paragraph = document.createElement("p");
                tweet_txt.appendChild(paragraph)
                paragraph.innerText = tweeter.text

                const tweet_fav = document.createElement("div");
                tweet_fav.classList.add('tweet-fav')

                const num = document.createElement("span")
                num.innerText = 0

                
                tweet_div.appendChild(tweet_details);

                countLike=()=>{
                    let formData = new FormData();
                    formData.append("tweet_id",tweeter.id);
                    console.log(tweeter.id)
                    fetch(`http://localhost/twitter-clone/backend/count_likes.php `, {
                        method: 'POST',
                        body: formData
                    }).then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        if (data.length>0) {
                            num.innerText = data[0].num
                        
                        }
                        else alert("Error")
                    });

                };
                countLike();

                //Image Like
                const url_like = '../frontend/images/heart.png';
                const image_like = new Image();
                image_like.src = url_like;
                image_like.classList.add("like");
                tweet_fav.appendChild(image_like);
                tweet_fav.appendChild(num);
                tweet_details.appendChild(tweet_fav)

                //fetch like api
                image_like.addEventListener("click",like=()=>{
                    let formData = new FormData();
                    formData.append("user_id",localStorage.getItem('user_id'));
                    formData.append("tweet_id",tweeter.id);
                    fetch(`http://localhost/twitter-clone/backend/like_tweet.php `, {
                        method: 'POST',
                        body: formData
                    }).then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        if (data['success'] == true) {
                            image_like.src="../frontend/images/heart_filled.jpeg";
                            image_like.classList.add("like");
                        }
                        else alert("Error")
                    });

                });

            });

        }
        else alert("No tweets found")
    });
}

window.addEventListener("load", getTweetsByUser);
