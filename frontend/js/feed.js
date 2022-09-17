const addTweetBtn=document.getElementById("addTweet-btn");
const tweetText=document.getElementById("tweet-text");
const addTweet=()=>{
    let formData = new FormData();
    formData.append("text", tweetText.value);
    formData.append("user_id", localStorage.getItem('user_id'));
    fetch(`http://localhost/twitter-clone/backend/add_tweet.php `, {
        method: 'POST',
        body: formData
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (data['success'] == true) {
           console.log(data); 
        }
        else alert("Adding tweet error error")
    });

}
addTweetBtn.addEventListener("click",addTweet)