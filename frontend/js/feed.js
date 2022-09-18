const addTweetBtn=document.getElementById("addTweet-btn");
const tweetText=document.getElementById("tweet-text");
const image=document.getElementById("file-input");
let base64String = "";
const addTweet=()=>{
    let formData = new FormData();
    formData.append("text", tweetText.value);
    formData.append("user_id", localStorage.getItem('user_id'));
    formData.append("image", encodeImage(image));
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


function encodeImage(element) {
    let file = element.files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
    console.log(reader.result);
      return reader.result;
    }
    reader.readAsDataURL(file);
  }

addTweetBtn.addEventListener("click",addTweet)



